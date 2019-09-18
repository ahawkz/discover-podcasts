const express = require('express');
const router = express.Router();
const Podcasts = require('../models/podcasts.js');

//index
router.get('/', (req, res) => {
  Podcasts.find({}, (err, foundPodcasts) => {
    res.json(foundPodcasts)
  });
});

router.get('/test', (req, res) => {
  res.json({
    message: 'hello world'
  })
});

//create
router.post('/', (req, res) => {
  Podcasts.create(req.body, (err, createdPodcast) => {
    res.json(createdPodcast)
  })
});

//delete
router.delete('/:id', (req, res) => {
  Podcasts.findByIdAndRemove(req.params.id, (err, deletedPodcast) => {
    res.json(deletedPodcast)
  })
});

//update
router.put('/:id', (req, res) => {
  Podcasts.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPodcast) => {
    res.json(updatedPodcast)
  })
});

module.exports = router;
