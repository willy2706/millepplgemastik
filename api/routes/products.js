var express = require('express');
var router = express.Router();

var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../', 'config'));

// Get all products
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Get a product
router.get('/:id([0-9]+)', function(req, res, next) {

});

// Add/edit a product
router.get('/add/:id([0-9]+)?', function(req, res, next) {

});

// Add/edit a product
router.post('/add/:id([0-9]+)?', function(req, res, next) {

});

// Update status a product
router.get('/status/:id([0-9]+)', function(req, res, next) {

});

// Delete a product
router.delete('/:id([0-9]+)', function(req, res, next) {

});

module.exports = router;
