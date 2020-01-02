require('app-module-path').addPath(require('app-root-path').toString());
require('dotenv').config();

const {
    APP_HOST,
    APP_PORT,
} = process.env;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', require('src/routers/TokenRouter'));

app.listen(APP_PORT, () => {
    console.log(`Server is running at ${APP_HOST}:${APP_PORT}`);
});
