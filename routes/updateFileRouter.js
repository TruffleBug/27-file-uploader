const { Router } = require("express");
const updateFileRouter = Router();
const folderController = require("../controllers/folderController");
const fileController = require("../controllers/fileController");

updateFileRouter
    .post('/:fileId', fileController.updateFilePost, (req, res) => {
        res.redirect('/');
    })

module.exports = updateFileRouter;