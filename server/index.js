var express = require('express');
var myRouter = require('./routes.js');
var bodyParser = require('body-parser');


var app = express();
var port = 80; //process.env.PORT || 80;

app.use(express.static(__dirname + '/../client'));

app.use(bodyParser.urlencoded({ extended: true })); 


app.use('/', myRouter);

app.listen(port, ()=>{
  // console.log(`Server listening on port ${port}`);
});