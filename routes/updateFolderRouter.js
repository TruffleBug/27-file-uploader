const { Router } = require("express");
const updateFolderRouter = Router();
const fileController = require("../controllers/fileController");

updateFolderRouter
    .post('/:folderId', fileController.updateFolderPost, (req, res) => {
        res.redirect('/');
    })

module.exports = updateFolderRouter;