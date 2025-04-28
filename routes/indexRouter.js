const { Router } = require("express");
const indexRouter = Router();
const fileController = require("../controllers/fileController");

indexRouter
    .get('/', fileController.readAllFoldersGet)

module.exports = indexRouter;