// Example express application adding the parse-server module to expose Parse
// compatible API routes.

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var path = require('path');
const chalk = require('chalk');
var bodyParser = require('body-parser')

  /* KEYS - SENSITIVE */
  const APP_ID = 'qUTvoKARSHpFjhbIHUuSX6frleI24XPaF';
  const CLIENT_KEY = "KarshsNCahPZKGJ8ypr4uwyDFAm";
  const MASTER_KEY = "localMasterKey";
  const JSKEY = "sampleJSKey";
  const MONGODB_URI = "mongodb://heroku_svw9v2wm:mgk37r9c9tt1tj2t7cumailgsu@ds137139.mlab.com:37139/heroku_svw9v2wm";
  //"mongodb://karshk:WeTK@/efGe'pOVVw1HJc@ds137139.mlab.com:37139/heroku_svw9v2wm";
  const MONGODB_URI_LOCAL = 'mongodb://localhost:27017/mydb';
  var serverUrl = process.env.SERVER_URL || 'http://localhost:1337/parse';

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;
var bundleId = process.env.BUNDLE_ID  || 'com.Dare.ios';

if (!databaseUri) {
  console.log(chalk.yellow('DATABASE_URI not specified, falling back to MONGODB_URI.'));
  databaseUri = MONGODB_URI;
}

console.log(chalk.green('Running on Server URL: ', serverUrl));

var api = new ParseServer({
  databaseURI: databaseUri,
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  
  appId: process.env.APP_ID || APP_ID,
  clientKey: process.env.CLIENT_KEY || CLIENT_KEY,
  javascriptKey: process.env.JS_KEY || JSKEY,
  masterKey: process.env.MASTER_KEY || MASTER_KEY, 
  facebookAppIds: ['1512525229067852'],            // App Facebook ID
  serverURL: serverUrl
});

// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.redirect('/public');
});

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('karsh-foundation-server running on port ' + port + '.');
});

app.post('/contact_me', jsonParser, function (req, res) {
  console.log('/contact_me POST:');
  console.log('data: ');
  console.log(req.body);
  res.send('Thank you for sumbitting this message');
});


// This will enable the Live Query real-time server
//ParseServer.createLiveQueryServer(httpServer);
