const { Router } = require("express");
const uploadRouter = Router();
const multer = require('multer');
const upload = multer({ dest: './uploads/ '});


uploadRouter
    .get('/', (req, res) => {
        res.render('upload', { title: 'Upload File' });
    })
    .post('/', upload.array('uploadedFiles', 5), (req, res) => {
        res.redirect('/');
    })

module.exports = uploadRouter;