const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const db = require('../assets/data')
const app = express();
const port = 3000;
const route = require("./src/routes/web")

app.use(morgan('combined'));

app.set('view engine', 'ejs');
app.use('/assets', express.static(path.join(__dirname, '../assets/image')));

app.set('views', path.join(__dirname, '../views'));

app.use('/assets', express.static(path.join(__dirname, '../assets')));

// const route = express.Router();

route(app);

app.listen(process.env.PORT || 3000);

console.log('Open http://localhost:3000');
