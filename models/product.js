const mongoose = require('mongoose');

//Schema is a JSON object that defines the structure and contents of data we want
const productSchema = new mongoose.Schema({ //create new schema
    image: {
        required: true,
        type: String,
    },
    date: {
        required: true,
        type: String,
    },
    product: {
        required: true,
        type: String,
    },
    desc: {
        required: true,
        type: String,
    },
    article: {
        required: true,
        type: String,
    }
});

//creates model with given schema constraints
const Product = mongoose.model('Product', productSchema)

module.exports = Product