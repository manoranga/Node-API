const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// create routes
const produtsRoutes = require('./api/routes/products');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//enable cors

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if(req.method ==='OPTION'){
        res.header("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE,PATCH');
        return res.status(200).json({});
    }
    next();
});
 //set routes
app.use('/products',produtsRoutes);

// error handling
app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message : error.message
        }
    })
})

module.exports = app
