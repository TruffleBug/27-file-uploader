const { Router } = require("express");
const newFolderRouter = Router();
const folderController = require("../controllers/folderController");

newFolderRouter
    .get('/', (req, res) => {
        res.render('newFolder', { title: 'New Folder' });
    })
    .post('/', folderController.createFolderPost, (req, res) => {
        res.redirect('/');
    })

module.exports = newFolderRouter;