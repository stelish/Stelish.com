/**
 * Created by stevekelly on 18/06/15.
 */
var express = require('express');
var app = express();
var path = require('path');

app.all('/*',function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    next();
});

app.use(express.static('views'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

var server = app.listen(3001, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Stelish listening at http://%s:%s', host, port);

});