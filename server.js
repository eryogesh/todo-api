
let app = require("./express");
const http = require('http');
const db = require("./database");
app = http.createServer(app);

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('process listening ON', process.env.PORT || 3000);
});
module.exports = server;