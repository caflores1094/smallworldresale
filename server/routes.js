var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
})

router.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/about.html'));
})

router.get('/services', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/services.html'));
})

router.get('/inventory', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/inventory.html'));
})

router.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/contact.html'));
})

module.exports = router;