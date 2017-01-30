// Example express application adding the parse-server module to expose Parse
// compatible API routes.

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var path = require('path');
const chalk = require('chalk');

  /* KEYS - SENSITIVE */
  const APP_ID = 'qUTvoKARSHpFjhbIHUuSX6frleI24XPaF';
  const CLIENT_KEY = "KarshKizBlClIhKzbPFLohajaaIsGret3DS9cYyzD";
  const MASTER_KEY = '2veMUVmPFeOET,0LIK&&SDCOLcy';
  const MONGODB_URI = "mongodb://karshk:hLPToUCPj1xSpD1Thj~'Be@ds137139.mlab.com:37139/heroku_svw9v2wm";
  const MONGODB_URI_LOCAL = 'mongodb://localhost:27017/mydb';

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;
var bundleId = process.env.BUNDLE_ID  || 'com.Dare.ios';

if (!databaseUri) {
  console.log(chalk.yellow('DATABASE_URI not specified, falling back to MONGODB_URI.'));
  databaseUri = MONGODB_URI;
}

// Default: mongodb://127.0.0.1:27017/mydb
var api = new ParseServer({
  databaseURI: databaseUri,
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  
  appId: process.env.APP_ID || APP_ID,
  clientKey: process.env.CLIENT_KEY || CLIENT_KEY,
  masterKey: process.env.MASTER_KEY || MASTER_KEY, // Add your master key here. Keep it secret!

  facebookAppIds: [],            // App Facebook ID

  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',  // Don't forget to change to https if needed
  liveQuery: {
    classNames: [] // List of classes to support for query subscriptions
  }
});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('I am Karsh Foundations private app. Dont touch me');
});

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('karsh-foundation-server running on port ' + port + '.');
});

// This will enable the Live Query real-time server
//ParseServer.createLiveQueryServer(httpServer);
