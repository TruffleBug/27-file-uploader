const { Router } = require("express");
const updateFolderRouter = Router();
const folderController = require("../controllers/folderController");

updateFolderRouter
    .post('/:folderId', folderController.updateFolderPost, (req, res) => {
        res.redirect('/');
    })

module.exports = updateFolderRouter;