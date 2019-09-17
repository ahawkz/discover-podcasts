const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
  collectionName: String,
  artistName: String,
  collectionViewUrl: String,
  artworkUrl100: String,
  primaryGenreName: String
})

const Podcasts = mongoose.model('Podcast', podcastSchema);
module.exports = Podcasts;
