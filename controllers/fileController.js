const multer = require('multer');
const upload = multer({ dest: './uploads/ '});
const db = require("../db/queries");

// FOLDERS
async function createFolderGet (req, res) {
    res.render('newFolder', { title: 'New Folder' });
};

async function createFolderPost (req, res) {
    const { folderName } = req.body;
    await db.createFolder(folderName);
    console.log('New folder created: ', folderName);
    res.redirect('/');
};

async function readAllFoldersGet (req, res) {
    const folders = await db.readFolders();
    res.render('index', { title: 'Your Files', folders: folders });
};

async function updateFolderPost (req, res) {
    const { folderName } = req.body;
    await db.updateFolder(Number(req.params.folderId), folderName);
    console.log('it is reaching updateFolderPost function, folderId: ', req.params.folderId)
    res.redirect('/');
};

async function deleteFolderPost (req, res) {
    await db.deleteFolder(req.params.folderId);
    res.redirect('/');
};

// FILES
function createFileGet (req, res) {
    res.render('upload', { title: 'Upload File' })
};

const createFilePost = [
    upload.array('uploadedFiles', 5),
    (req, res) => {
        console.log('SUCCESS!', req.files, 'BODY: ', req.body);
        res.redirect('/')
    }
];



module.exports = { 
    // CREATE FOLDERS
    createFolderGet,
    createFolderPost,
    // READ FOLDERS
    readAllFoldersGet,
    // UPDATE FOLDERS
    updateFolderPost,
    // DELETE FOLDERS
    deleteFolderPost,


    // CREATE FILES
    createFileGet,
    createFilePost
    // READ FILES

    // UPDATE FILES

    // DELETE FILES


}