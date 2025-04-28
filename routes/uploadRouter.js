const { Router } = require("express");
const uploadRouter = Router();
const fileController = require("../controllers/fileController");

uploadRouter
    .get('/', fileController.createFileGet)
    .post('/', fileController.createFilePost)

module.exports = uploadRouter;