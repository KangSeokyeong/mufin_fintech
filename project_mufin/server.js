const express = require('express')
const app = express()
var path = require('path'); 
var request = require('request');
var mysql = require('mysql');
//--------------------------------------------------
var db =  mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'q1w2e3r4',
    database : 'fintech'
  });

db.connect();
 
db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

db.query("SELECT * FROM user", function(err, results, field){
    console.log(results);
})
 
db.end();
//------------------------------------------------

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('main')
})

app.get('/signup', function(req, res){
    res.render('signup');
})

app.post('/signup', function(req, res){
    var name = req.body.nameinput;
    var email = req.body.emailinput;
    console.log(name, email);
})

app.get('/sayHello', function(req, res){
    res.send("say Hello");
})

app.get('/sayHello2', function(req, res){
    res.send("say Hello2");
})

app.listen(3000)