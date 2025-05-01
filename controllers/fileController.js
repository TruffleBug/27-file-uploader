const multer = require('multer');
const upload = multer({ dest: './uploads/ '});
const db = require("../db/queries");

const createFilePost = [
    upload.single('uploadedFile'),
    (req, res, next) => {
        db.createFiles(req.file, req.body.folder);
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