const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const db = require("../db/queries");


async function createFolderPost (req, res, next) {
    const { folderName } = req.body;
    await db.createFolder(folderName);
    console.log('New folder created: ', folderName);
    next();
};

async function readAllFoldersGet (req, res, next) {
    res.locals.folders = await db.readFolders();
    next();
};

async function updateFolderPost (req, res, next) {
    const { folderName } = req.body;
    await db.updateFolder(Number(req.params.folderId), folderName);
    next();
};

async function deleteFolderPost (req, res, next) {
    await db.deleteFolder(req.params.folderId);
    next();
};

module.exports = { 
    createFolderPost,
    readAllFoldersGet,
    updateFolderPost,
    deleteFolderPost
}