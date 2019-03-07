const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes');
const config = require('config');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//db options
let options = { 
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } 
}; 
// connect
mongoose.connect(config.DBHost, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


// api
app.use('/api/', routes);

// server
app.listen(3000, () => console.log('App started on port 3000'))

module.exports = {
  app
} // testing
