/**
 * Created by stevekelly on 18/06/15.
 */
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');

var app = express(); // the main app
var path = require('path');
var fs         = require("fs");

// body parser
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


/**
 * Get's Main Admin Dashboard Page
 * Used to enable short request to /admin
 */
app.route('/banners')
    .get(function(req, res) {
        console.log('Accessing the banner section ...');
        console.log(app.path());
        res.type('.html');
        res.sendFile(path.join(__dirname + '/views/banners/req.params[0]'));
    });


/**
 * Serves everything else
 */
app.route('/*')
    .get(function(req, res) {
        res.sendFile(path.join(__dirname + '/views/'+req.params[0]));
    });

// Bind to port
var SERVER_PORT = 3001;
http.createServer(app).listen(SERVER_PORT);