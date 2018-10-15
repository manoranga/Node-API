const mongooes = require('mongoose');

const productSchema = mongooes.Schema({
    _id : mongooes.Schema.Types.ObjectId,
    name : { type :String, require},
    price : {type :Number, require}
});

module.exports = mongooes.model('Products',productSchema);