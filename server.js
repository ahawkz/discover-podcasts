// === DEPENDENCIES === //
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const cors = require('cors');
const unirest = require('unirest');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// === PORT === //
const PORT = process.env.PORT || 3000;

// ===  DATABASE === //
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
//depreciation warnings
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
//error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// === ROUTES === //
app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/test', (req, res) => {
  res.json({
    message: 'hello world'
  })
});

// === LISTENER === //
app.listen(PORT, () => {
  console.log('listening on port ', PORT);
});
