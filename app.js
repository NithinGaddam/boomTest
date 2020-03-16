"use strict";
var express = require("express");
var port = process.env.PORT || 3000;
var app = express();
var fs = require('fs');
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
// Apple 
// app.get('/apple-app-site-association', function (req, res) {
//     // If Apple doesn't let you version this then I guess it is dangerous to cache
//         // Note: /static files don't have cache by default but best to be explicit
//         res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
//         res.set("Content-Type", "application/json");
//         app.serveStatic(req, res, path.resolve("./static/apple-app-site-association"));
// });

var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
app.get('/apple-app-site-association', function(req, res, next) {
     res.set('Content-Type', 'application/json');
     res.status(200).send(aasa);
});