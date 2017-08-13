'use strict'

const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express()
app.use(bodyParser.json());
var obj = require('./public/calender_events.json');


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  //res.header('Access-Control-Allow-Origin', 'https://ssms-57461.firebaseapp.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST');
  next();
});
app.use(express.static(__dirname + '/public'));

app.post('/', (req, res) => {
  console.log('Received request',req.body);
  obj.push(req.body);
  fs.writeFile(__dirname+'/public/calender_events.json', JSON.stringify(obj), (err) => {
    if (err) throw err;
    console.log('File written to JSON.json');
    res.send({text:'File written to JSON.json'})
  })
});

app.listen(3000, ()=>{
  console.log('Listening on port 3000. Post a file to http://localhost:3000 to save to /JSON.json');
});