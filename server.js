const http = require('http');


const app = require('./app');
const mongodb = require('mongodb').MongoClient
const  format = require('util').format


const port = process.env.port || 3000;
const server = http.createServer(app);
server.listen(port);