const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

//serve up static files
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
}

//Linking Routes
app.use(routes)


// Mongoose
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoscraper';
mongoose.connect(DB_URI, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('connected to database'));

app.listen(PORT, () => console.log(`🌎 ==> Server now on port ${PORT}!`));