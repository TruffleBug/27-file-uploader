const express = require('express');
const app = express();
const path = require('node:path');

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// ---------------------------------------------------------------------

const indexRouter = require('./routes/indexRouter');
const folderRouter = require('./routes/folderRouter');
const fileRouter = require('./routes/fileRouter');

app.use('/', indexRouter);
app.use('/folder', folderRouter);
app.use('/file', fileRouter);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`File uploader - listening on port ${PORT}.`);
});