var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    bodyParser = require('body-parser');

var handlebars = require('express-handlebars');
var hbs = handlebars.create({
    defaultLayout: 'main',
    extname: "hbs",
    helpers: require("./helpers/handlebars.js")
});
app.engine('hbs', hbs.engine);
app.set('views', './views');
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Access-Control-Allow-Credential","true");
    next();
});


var mysql = require("mysql2/promise");
global.pool = mysql.createPool({
    connectionLimit: 5,
    port: 33011,
    host: "localhost",
    user: "root",
    database: "curse_work",
    password: "root"
});


var routes = require('./api/routes/Routes'); //importing route
routes(app); //register the route


var cors = require('cors');

app.use(cors());

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);