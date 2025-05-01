const { Router } = require("express");
const fileRouter = Router();
const folderController = require("../controllers/folderController");
const fileController = require("../controllers/fileController");

fileRouter
    .get('/new', folderController.readAllFoldersGet, (req, res) => {
        res.render('upload', { title: 'Upload File', folders: res.locals.folders });
    })
    .post('/new', fileController.createFilePost, (req, res) => {
        res.redirect('/');
    })

    .post('/update/:fileId', fileController.updateFilePost, (req, res) => {
        res.redirect('/');
    })

    .post('/delete/:fileId', fileController.deleteFilePost, (req, res) => { 
        res.redirect('/')
    })
    
module.exports = fileRouter;