var express = require('express');
// var $ = require('jquery');
// var http = require("http");
var bodyParser = require('body-parser');
var app = express();


app.use(express.static('./src/client'));
// app.use(express.static('client'), (req, res, next) => {
//     next();
//   });

app.use(bodyParser.json());
app.get('/data', (req, res) => res.send('Hello World!hhh'));
// console.log(req);
app.post('/data', (req, res) => {
    console.log(req.body);
    // console.log(res);
    res.send('yo')
});

app.listen(3000, () => console.log('Port listening on 3005'));

// const express = require('express');
// const bodyParser = require('body-parser');
// // const jsonToCsv = require('./utils/jsonToCsv.js');

// const app = express();

// app.use(express.static('./src/client'), (req, res, next) => {
//   next();
// });

// app.use(bodyParser.json());

// app.post('/text', (req, res) => {
//   // console.log('request as csv is..', jsonToCsv(req.body));
//   // res.status(201).json(jsonToCsv(req.body));
//   console.log('uo');
// });

// app.get('/data', (req, res) => {
//   console.log('handing get / request');
//   res.send('Hello World!');
// });

// app.listen(3000, () => console.log('Example app listening on port 3000!'));