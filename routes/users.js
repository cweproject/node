var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', function(req, res, next) {
  res.send('get all users');
});

router.post('/', function(req, res, next) {
  res.send('success');
});

router.delete('/', function(req, res, next) {
  res.send('success');
});

module.exports = router;
