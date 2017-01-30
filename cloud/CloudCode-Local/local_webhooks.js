var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var ParseCloud = require('parse-cloud-express');
var Parse = ParseCloud.Parse;

var app = express();

// Host static files from public/
// app.use(express.static(__dirname + '/public'));

// Define a Cloud Code function:
Parse.Cloud.define('dev-local', function(req, res) {
  res.success('Hello from Cloud Code on Node LocalHost mac.');
});

// Mount the Cloud Code routes on the main Express app at /webhooks/
// The cloud function above will be available at /webhooks/function_hello
app.use('/webhooks', ParseCloud.app);

// Launch the HTTP server
var port = process.env.PORT || 1338;
var server = http.createServer(app);
server.listen(port, function() {
	console.log('Cloud Code on Node running on port ' + port + '.');
});