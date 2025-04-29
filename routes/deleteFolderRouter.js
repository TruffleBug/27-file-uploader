const { Router } = require("express");
const deleteFolderRouter = Router();
const fileController = require("../controllers/fileController");

deleteFolderRouter
    .post('/:folderId', fileController.deleteFolderPost, (req, res) => { 
        res.redirect('/')
    })

module.exports = deleteFolderRouter;