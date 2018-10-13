const mongooes = require('mongoose');
const mongodb = require('mongodb')

const productSchema = mongooes.Schema({
    _id : mongooes.Schema.Types.ObjectId,
    name : String,
    price : Number
});

module.exports = mongooes.model('Products',productSchema);