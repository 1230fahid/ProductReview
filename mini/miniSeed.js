const mongoose = require('mongoose');
const Product = require('../models/product');
const products = require('./miniInfo')

mongoose.connect('mongodb://localhost:27017/mini', { useNewUrlParser: true, useUnifiedTopology: true }) //set up connection to mongo (still need mongod on powershell). movieApp is an example
    .then(() => { 
        console.log("CONNECTION OPEN!!!!");
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!!");
        console.log(err);
    })



const create = async () => {
    await Product.deleteMany({}); //delete existing products
    for(product of products){
        let item = new Product(product); //create new products
        await item.save(); //wait for it to save in database before moving forward
        console.log(item);
    }
}

create()
    .then(() => {
        mongoose.connection.close();
    })