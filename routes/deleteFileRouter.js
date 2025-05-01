const { Router } = require("express");
const deleteFileRouter = Router();
const fileController = require("../controllers/fileController");

deleteFileRouter
    .post('/:fileId', fileController.deleteFilePost, (req, res) => { 
        res.redirect('/')
    })

module.exports = deleteFileRouter;