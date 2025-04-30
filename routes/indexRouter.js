const { Router } = require("express");
const indexRouter = Router();
const folderController = require("../controllers/folderController");
const fileController = require("../controllers/fileController");

indexRouter
    .get('/', fileController.readFileByFolderGet)
    .get('/', folderController.readAllFoldersGet, (req, res) => {
        res.render('index', { title: 'Your Files', folders: res.locals.folders, currentFiles: res.locals.files });
    })

module.exports = indexRouter;