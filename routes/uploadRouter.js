const { Router } = require("express");
const uploadRouter = Router();
const multer = require('multer');
const upload = multer({ dest: './uploads/ '});
const folderController = require("../controllers/folderController");
const fileController = require("../controllers/fileController");

uploadRouter
    .get('/', folderController.readAllFoldersGet, (req, res) => {
        res.render('upload', { title: 'Upload File', folders: res.locals.folders });
    })
    .post('/', fileController.createFilePost, (req, res) => {
        res.redirect('/');
    })

module.exports = uploadRouter;