const { Router } = require("express");
const deleteFolderRouter = Router();
const folderController = require("../controllers/folderController");

deleteFolderRouter
    .post('/:folderId', folderController.deleteFolderPost, (req, res) => { 
        res.redirect('/')
    })

module.exports = deleteFolderRouter;