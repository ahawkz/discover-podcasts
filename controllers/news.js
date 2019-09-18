const express = require('express');
const router = express.Router();
const News = require('../models/news.js');

//index
router.get('/', (req, res) => {
  News.find({}, (err, foundNews) => {
    res.json(foundNews)
  });
});

//create
router.post('/', (req, res) => {
  News.create(req.body, (err, createdNews) => {
    res.json(createdNews)
  })
});

//delete
router.delete('/:id', (req, res) => {
  News.findByIdAndRemove(req.params.id, (err, deletedNews) => {
    res.json(deletedNews)
  })
});

//update
router.put('/:id', (req, res) => {
  News.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedNews) => {
    res.json(updatedNews)
  })
});

module.exports = router;
