const cors = require('cors');
const express = require('express');
const app = express();
const path = require('node:path');

require('dotenv').config();

app.use(cors());
const assetsPath = path.join(__dirname, "public");
app.use(express.json()); 
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

app.use((err, req, res, next) => {
	console.error(err);
	res.status(Number(err.statusCode) || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`File uploader - listening on port ${PORT}.`);
});