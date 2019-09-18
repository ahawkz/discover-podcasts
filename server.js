// === DEPENDENCIES === //
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const cors = require('cors');
const podcastsController = require('./controllers/podcasts.js');
const Podcasts = require('./models/podcasts.js');
const manyPodcasts = require('./models/podcastData.js')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/podcasts', podcastsController)


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

// === SEED DATA === //
app.get('/podcasts/seed', async (req, res) => {
  try {
    const seedItems = await Podcasts.create(manyPodcasts)
    res.redirect('/')
  } catch (err) {
    res.send(err.message)
  }
});


// === ROUTES === //
// app.get('/', (req, res) => {
//   res.send('hello world')
// });

// app.get('/test', (req, res) => {
//   res.json({
//     message: 'hello world'
//   })
// });

// === LISTENER === //
app.listen(PORT, () => {
  console.log('listening on port ', PORT);
});
