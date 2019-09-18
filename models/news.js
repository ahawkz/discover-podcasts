const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  headline: String,
  byline: String,
  url: String
})

const News = mongoose.model('News', newsSchema);
module.exports = News;
