// Require Node Modules
var http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser'),
    Parse = require('parse/node'),
    ParseCloud = require('parse-cloud-express');

var app = express();

// Import your cloud code (which configures the routes)
require('./cloud/main.js');
// Mount the webhooks app to a specific path (must match what is used in scripts/register-webhooks.js)
app.use('/webhooks', ParseCloud.app);

// Host static files from public/
// app.use(express.static(__dirname + '/public'));

// Catch all unknown routes.
app.all('/', function(request, response) {
	console.log('Hello from Cloud Code on Node LocalHost mac.');
	response.status(200).send('Ran function code at endpoint /');
});

/*
 * Launch the HTTP server
 */
var port = process.env.PORT || 1338;
var server = http.createServer(app);
server.listen(port, function() {
  	console.log('Cloud Code Webhooks server running on port ' + port + '.');
});

