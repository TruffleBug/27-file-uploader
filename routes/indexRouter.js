const { Router } = require("express");
const indexRouter = Router();

indexRouter
    .route('/')
    .get((req, res) => {
        res.render('index', { title: 'Your Files' })
    })

module.exports = indexRouter;