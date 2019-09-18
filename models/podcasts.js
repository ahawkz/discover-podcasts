const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
  title: String,
  artist: String,
  url: String,
  artwork: String
})

const Podcasts = mongoose.model('Podcast', podcastSchema);
module.exports = Podcasts;
