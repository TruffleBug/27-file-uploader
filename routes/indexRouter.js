const { Router } = require("express");
const indexRouter = Router();
const fileController = require("../controllers/fileController");

indexRouter
    .get('/', fileController.readAllFoldersGet, (req, res) => {
        res.render('index', { title: 'Your Files', folders: res.locals.folders });
    })

module.exports = indexRouter;