const express = require('express');

const router = require('./router.js');

const relic = require('newrelic');

const path = require('path');

const morgan = require('morgan');

const port = 3007;

const bodyparser = require('body-parser');

const app = express();

//app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '..','client', 'dist')));
app.use('/api', router);

app.listen(port, () => console.log(`Listening on ${port}`));