const express = require('express')
const app = express()
const path = require('path');
const methodOverride = require('method-override');
const Product = require('./models/product');
const mongoose = require('mongoose');

//app.set() used to assign or set a setting name to a value. Example below, sets view engine to ejs so that we can render ejs files
//app.use() you're defining a middleware
//app.listen() is used when you want to listen for connections.


app.use(methodOverride('_method'));
/*Allows us to override. This allows us to override the specified method with something of our choice.
Usually two options, but I have it specified in the ejs files I render, where I want to update something.*/


app.use(express.urlencoded({extended: true})) 
/*objective is to parse incoming request with urlencoded payloads
basicallly parse http or https. Since in production a web browser would request something from our web server, 
this allows different URL's to work. The URL enconding converts characters into a format that can be transmitted through 
the internet, since URLs can only be sent over the internet using the ASCII character-set.*/


app.use(express.json());
/*express.json() is a built in middleware in express used to parse 
incoming JSON requests with JSON payloads and is based on body-parser*/


app.set('view engine', 'ejs'); /*This app.set() allows us to render ejs files. 
Need to install 'ejs' package beforehand. 
Install 'ejs-mate' if you want to use layouts from other ejs files, or partials and blocks.*/


//views is a setting name that is a directory or an array of directories for the application's views.
app.set('views', path.join(__dirname, '/views')) //to keep the directory to that that holds the current index.js. 
/*We need this for when we render files since the .render() function looks up views. 
Here we set it to the current directory of app.js + whichever directory we may want to store our files to be rendered.*/


//express.static() is a builtin middleware function in express used to serve static files.
//Static files are files clients download from the server. 
app.use(express.static(path.join(__dirname, 'public'))); 
/* to serve assets, include css file. Allows us to use js scripts and css files. Here we only use the cs,html, and js 
files in the directory specified. Can do multiple directories with multiple function calls*/


mongoose.connect('mongodb://localhost:27017/mini', {}) //set up connection to mongo anytime you need a file to use something from it's database
    .then(() => {
        console.log("CONNECTION OPEN!!!!");
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!!");
        console.log(err);
    })


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});


//app.get() used to parse GET requests. In this case a request is parsed, and is checked if it is equal to the root ('/')
app.get('/', async (req, res) => {
    const products = await Product.find({});
    console.log("products is:\n", products)
    res.render('main.ejs', {products}) // if request is '/' then render this file from the views directory we previously set. destructure products and add as argument.
})


app.post('/', async (req, res) => {
    console.log("req.body.item is\n", req.body.item)
    const newproduct = new Product(req.body.item);
    await newproduct.save();
    //const products = await Product.find({});
    //console.log("products is:\n", products)
    //res.render('main.ejs', {products}) // if request is '/' then render this file from the views directory we previously set. destructure products and add as argument.
    res.redirect('/');
})


app.use((req, res) => { //for sending back
    res.send("Sorry request does not exist!");
})

app.listen(8080, () => {  //listen for connections and bind them
    console.log("Listening on port 8080")
})