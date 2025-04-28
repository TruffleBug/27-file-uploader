const { Router } = require("express");
const updateFolderRouter = Router();
const fileController = require("../controllers/fileController");

updateFolderRouter
    .post('/:folderId', fileController.updateFolderPost)

module.exports = updateFolderRouter;