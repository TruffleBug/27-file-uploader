const { Router } = require("express");
const viewRouter = Router();
const folderController = require("../controllers/folderController");
const fileController = require("../controllers/fileController");

viewRouter
    .get('/', fileController.readFileByFolderGet, (req, res) => {
        res.render('viewFiles', { title: 'Your Files', folderName: res.locals.folderName, currentFiles: res.locals.files });
    })

module.exports = viewRouter;