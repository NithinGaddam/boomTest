"use strict";
var express = require("express");
var port = process.env.PORT || 3000;
var app = express();
app.get('/', function (req, res){
	res.send(JSON.stringify({ "Hello": "World"}));
});
app.listen(port, function (){
	console.log(`Example app listening on port !`);
});
//
app.get('/interview', function (req, res) {
    res.json([{"Brand":"Alfa Romeo","Model":"GTV"},{"Brand":"Porsche","Model":"718"}]);
});