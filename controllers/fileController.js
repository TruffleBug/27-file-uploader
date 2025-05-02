const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const db = require("../db/queries");
const { supabase } = require('./../server/supabase.js');
const { decode } = require('base64-arraybuffer');


const createFilePost = [
    upload.single('uploadedFile'),
    async (req, res, next) => {
        console.log('UPLOADED FILE: ', req.file);
        
        const fileBase64 = decode(req.file.buffer.toString("base64"));
        const { error } = await supabase.storage.from('27-file-uploader').upload(req.file.originalname, fileBase64);

        let publicURL;
        if(error) {
            console.error('Error uploading file:', error);
            // throw new CustomUploadFailedError('This file already exists. File upload failed.');
            next(error);
        } else {
            publicURL = supabase.storage.from('27-file-uploader').getPublicUrl(req.file.originalname);
            console.log('Public URL:', publicURL.data.publicUrl);
        };

        // file is in req.file, text is in req.body
        db.createFiles(req.file, req.body.folder, publicURL.data.publicUrl);

        next();
    }
];

async function readFileByFolderGet (req, res, next) {
    if(req.query.folder) {
        res.locals.folderName = await db.readFolderById(req.query.folder);
    };
    res.locals.files = await db.readFiles(req.query.folder);    
    next();
};

async function readFileDetailByIdGet (req, res, next) {
    res.locals.currentFile = await db.readFileDetails(req.query.file);
    res.locals.currentFolder = await db.readFolderById(res.locals.currentFile.folderId) || 'None';    
    next();
};

async function updateFilePost (req, res, next) {
    const { fileName } = req.body;
    await db.updateFile(Number(req.params.fileId), fileName);
    next();
};

async function deleteFilePost (req, res, next) {
    await db.deleteFile(req.params.fileId);
    next();
};


module.exports = { 
    createFilePost,
    readFileByFolderGet,
    readFileDetailByIdGet,
    updateFilePost,
    deleteFilePost
}