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
const uploadRouter = require('./routes/uploadRouter');
const newFolderRouter = require('./routes/newFolderRouter');
const deleteFolderRouter = require('./routes/deleteFolderRouter');
const updateFolderRouter = require('./routes/updateFolderRouter');
const viewFilesRouter = require('./routes/viewFilesRouter');

app.use('/', indexRouter);
app.use('/upload', uploadRouter);
app.use('/newFolder', newFolderRouter); 
app.use('/deleteFolder', deleteFolderRouter); 
app.use('/updateFolder', updateFolderRouter); 
app.use('/view', viewFilesRouter); 


const PORT = 3000;
app.listen(PORT, () => {
	console.log(`File uploader - listening on port ${PORT}.`);
});