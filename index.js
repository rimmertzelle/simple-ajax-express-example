// index.js and pug setup from learnnode.com by Wes Bos
import express from 'express';

// import statements for path 
// https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import routes from './src/routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

// serves up static files from the public folder.
// Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, '/public')));

// support json encoded and url-encoded bodies, mainly used for post and update
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all routes in a separated file
app.use('/', routes);

// Start our app
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`🐔 Express running → PORT ${server.address().port}`);
});
