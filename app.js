//jshint esversion:6
const express = require("express");
const bodyparser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({
    extended: true
}));

//The mongoose connection string
mongoose.connect('mongodb://localhost:27017/userDB', {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!");
});

let userSchema = new mongoose.Schema({
    email: String,
    password: String
});

var User = mongoose.model('User', userSchema);

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/register", function (req, res) {
    res.render("register");
});

//The user submits a registration including their email and password






app.listen(3000, function () {
    console.log("The server is now online");
});