const { Router } = require("express");
const folderRouter = Router();
const folderController = require("../controllers/folderController");
const fileController = require("../controllers/fileController");

folderRouter
    .get('/', fileController.readFileByFolderGet, (req, res) => {
        res.render('viewFolder', { title: 'Your Files', folderName: res.locals.folderName, currentFiles: res.locals.files });
    })

    .get('/view', fileController.readFileByFolderGet, (req, res) => {
            res.render('viewFolder', { title: 'Your Files', folderName: res.locals.folderName, currentFiles: res.locals.files });
    })

    .post('/update/:folderId', folderController.updateFolderPost, (req, res) => {
        res.redirect('/');
    })

    .post('/delete/:folderId', folderController.deleteFolderPost, (req, res) => { 
        res.redirect('/')
    })

    .get('/new', (req, res) => {
        res.render('newFolder', { title: 'New Folder' });
    })
    .post('/new', folderController.createFolderPost, (req, res) => {
        res.redirect('/');
    })   

module.exports = folderRouter;