var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('john', { 
  });
});

router.get('/john', function(req, res, next) {
  res.render('john', { 
  });
});

module.exports = router;
