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

// async function readFileNoFolderGet (req, res, next) {
//     console.log('REQ.QUERY.FOLDER', req.query.folder)
//     res.locals.files = await db.readFiles(req.query.folder);
//     // next();
// };

async function readFileByFolderGet (req, res, next) {
    if(req.query.folder) {
        res.locals.folderName = await db.readFolderById(req.query.folder);
    }
        res.locals.files = await db.readFiles(req.query.folder);
    // } else {
    //     res.locals.files = await db.readFiles()
    // }
    next();
};

// async function updateFolderPost (req, res, next) {
//     const { folderName } = req.body;
//     await db.updateFolder(Number(req.params.folderId), folderName);
//     next();
// };

// async function deleteFolderPost (req, res, next) {
//     await db.deleteFolder(req.params.folderId);
//     next();
// };

module.exports = { 
    createFilePost,
    // readFileNoFolderGet,
    readFileByFolderGet,
    // updateFolderPost,
    // deleteFolderPost
}