const { Router } = require("express");
const deleteFolderRouter = Router();
const fileController = require("../controllers/fileController");

deleteFolderRouter
    .post('/:folderId', fileController.deleteFolderPost)

module.exports = deleteFolderRouter;