const app = require('express')();
require("dotenv").config();
const bodyParser = require('body-parser');
const noc = require('no-console');
const cors = require('cors');

// App configuration
noc(app);
app.use(bodyParser.json());
app.use(cors());

//Routes configuration
require("./../src/routes")(app);

module.exports = app;