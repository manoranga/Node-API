const mongooes = require('mongoose');

const productSchema = mongooes.Schema({
    _id : mongooes.Schema.Types.ObjectId,
    name : { type :String, require : true},
    price : {type :Number, require : true}
});

module.exports = mongooes.model('Products',productSchema);