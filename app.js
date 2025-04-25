const express = require('express');
const app = express();
const path = require('node:path');

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ---------------------------------------------------------------------

const indexRouter = require('./routes/indexRouter');
const uploadRouter = require('./routes/uploadRouter');

app.use('/', indexRouter);
app.use('/upload', uploadRouter);


const PORT = 3000;
app.listen(PORT, () => {
	console.log(`My first Express app - listening on port ${PORT}.`);
});