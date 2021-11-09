const express = require ('express');
const path = require ('path');

const app = express ();
const port = 3000;
const publicPath = path.resolve (__dirname, './public' )
app.use(express.static (publicPath))

app.listen(port, () => {console.log ("Servidor corriendo en puerto" + port)});

app.get ('/', function (req, res) { res.sendFile (path.join (__dirname, '/views/home.html'))} );

app.get ('/register', function (req, res) { res.sendFile (path.join (__dirname, '/views/register.html'))} );

app.post("/register", (req, res) => {res.redirect("/")});

app.get ('/login', function (req, res) { res.sendFile (path.join (__dirname, '/views/login.html'))} );

app.post("/login", (req, res) => {res.redirect("/")});

app.get ('/productCart', function (req, res) { res.sendFile (path.join (__dirname, '/views/productCart.html'))} );

app.post("/productCart", (req, res) => {res.redirect("/")});

app.get ('/productDetail', function (req, res) { res.sendFile (path.join (__dirname, '/views/productDetail.html'))} );

app.post("/productDetail", (req, res) => {res.redirect("/")});