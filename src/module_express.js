const express = require('express');
const app = express();

app.use(require('./routes/index')); /* import the router module from routes/index.js */

module.exports = app; /* export the app  */
console.log("Express app initialized"); /* log the initialization of the app */
