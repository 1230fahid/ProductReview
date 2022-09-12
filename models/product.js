const mongoose = require('mongoose');

//(analogy for schema is a table in a relational database like MySQL)
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

const Product = mongoose.model('Product', productSchema)

module.exports = Product