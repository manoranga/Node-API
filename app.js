const express = require('express');
const app = express();


const produtsRoutes = require('./api/routes/products');

app.use('/products',produtsRoutes);

module.exports = app
//