// === DEPENDENCIES === //
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// === PORT === //
const PORT = process.env.PORT || 3000;

// ===  DATABASE === //
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
//depreciation warnings
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
//error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));

// === LISTENER === //
app.listen(PORT, () => {
  console.log('listening on port ', PORT);
}
