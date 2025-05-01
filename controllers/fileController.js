const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// const upload = multer({ dest: './uploads/ '});
const db = require("../db/queries");
const { supabase } = require('./../server/supabase.js');
const { decode } = require('base64-arraybuffer');
const { enable } = require('express/lib/application.js');


const createFilePost = [
    upload.single('uploadedFile'),
    async (req, res, next) => {
        console.log('UPLOADED FILE: ', req.file)
        
        const fileBase64 = decode(req.file.buffer.toString("base64"));

        const filePath = `${Date.now()}_${req.file.filename}`
        // const { error } = await supabase.storage.from('27-file-uploader').upload(filePath, req.file)
        const { error } = await supabase.storage.from('27-file-uploader').upload(req.file.originalname, fileBase64)

        if(error) {
            console.error('Error uploading file:', error);
        } else {
            const publicURL = supabase.storage.from('27-file-uploader').getPublicUrl(filePath);
            console.log('Public URL:', publicURL.data.publicUrl);
        }

        // file is in req.file, text is in req.body
        // db.createFiles(req.file, req.body.folder);
        next();
    }
];

async function readFileByFolderGet (req, res, next) {
    if(req.query.folder) {
        res.locals.folderName = await db.readFolderById(req.query.folder);
    }
    res.locals.files = await db.readFiles(req.query.folder);
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
    updateFilePost,
    deleteFilePost
}