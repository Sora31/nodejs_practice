var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const a = "asff/dfsdfasdf/dfasdxcv/sdflajsdfl.dks"
  const b = a.split('/')[3].split('.')[0];
  console.log(b);
  res.render('index', { title: b });
});

module.exports = router;
