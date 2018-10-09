const express = require('express');
const router = express.Router();
const mongooes = require('mongoose');

const Products = require('../models/products');
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message : 'HTTP get method works'
    })
});
router.get("/:productId",(req,res,next)=>{
    const id = req.params.productId;
    Products.findById(id)
    .exec()
    .then(doc =>{console.log(doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({message : 'Not Found'});
        }
       
    })
    .catch(err =>{console.log(err);
        res.status(500).json({error :err});
    });
});

router.post('/',(req,res,next)=>{
    const product1 = new Products({
        _id  : new mongooes.Types.ObjectId(),
        name : req.body.name,
        price: req.body.price
    });
    product1.save().then(result =>{
        console.log(result); 
    }).catch(err =>{
        console.log(err); 
    });
    res.status(200).json({
        message : 'HTTP post method works!!',
        createdUser :product1
    })
});
 module.exports = router;