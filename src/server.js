const express = require('express');
const path = require('path');
const router = require('./routes.js');

const server = express();

server.set('view engine', 'ejs');
server.use(express.static("public"));

server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({extended: true}))

server.use(router);

server.listen(process.env.PORT || 3000, () => console.log("Server is running...."));