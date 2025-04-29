const { Router } = require("express");
const newFolderRouter = Router();
const fileController = require("../controllers/fileController");

newFolderRouter
    .get('/', (req, res) => {
        res.render('newFolder', { title: 'New Folder' });
    })
    .post('/', fileController.createFolderPost, (req, res) => {
        res.redirect('/');
    })

module.exports = newFolderRouter;