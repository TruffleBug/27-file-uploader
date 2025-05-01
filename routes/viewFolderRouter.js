const { Router } = require("express");
const viewFolderRouter = Router();
const folderController = require("../controllers/folderController");
const fileController = require("../controllers/fileController");

viewFolderRouter
    .get('/', fileController.readFileByFolderGet, (req, res) => {
        res.render('viewFolder', { title: 'Your Files', folderName: res.locals.folderName, currentFiles: res.locals.files });
    })

module.exports = viewFolderRouter;