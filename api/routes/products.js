const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message : 'HTTP get method works'
    })
});


router.post('/',(req,res,next)=>{
    res.status(200).json({
        message : 'HTTP post method works!!'
    })
});
 module.exports = router;