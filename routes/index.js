var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Birchwood',
    subtitle: 'Digital Media Agency', 
  });
});

module.exports = router;
