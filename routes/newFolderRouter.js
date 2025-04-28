const { Router } = require("express");
const newFolderRouter = Router();
const fileController = require("../controllers/fileController");

newFolderRouter
    .get('/', fileController.createFolderGet)
    .post('/', fileController.createFolderPost)

module.exports = newFolderRouter;