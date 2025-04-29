const multer = require('multer');
const upload = multer({ dest: './uploads/ '});
const db = require("../db/queries");

// FOLDERS
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
    console.log('it is reaching updateFolderPost function, folderId: ', req.params.folderId);
    next();
};

async function deleteFolderPost (req, res, next) {
    await db.deleteFolder(req.params.folderId);
    next();
};

// FILES



module.exports = { 
    // CREATE FOLDERS
    createFolderPost,
    // READ FOLDERS
    readAllFoldersGet,
    // UPDATE FOLDERS
    updateFolderPost,
    // DELETE FOLDERS
    deleteFolderPost,


    // CREATE FILES
    // READ FILES

    // UPDATE FILES

    // DELETE FILES


}