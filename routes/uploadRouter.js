const { Router } = require("express");
const uploadRouter = Router();
const fileController = require("../controllers/fileController");

// const multer = require('multer');
// const upload = multer({ dest: './uploads/ '});

uploadRouter
    .get('/', fileController.uploadFileGet)
    // .post('/', upload.single('uploadedFile'), fileController.uploadFilePost)
    .post('/', fileController.uploadFilePost)

module.exports = uploadRouter;