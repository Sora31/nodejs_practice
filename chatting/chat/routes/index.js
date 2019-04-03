var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', (req, res) => {
  res.render('hello', {name:req.query.nameQuery});
});

router.get('/hello/:nameParam', (req, res) => {
  res.render('hello', {name:req.params.nameParam});
});

router.get('/chat', (req, res) => {
  res.sendFile('chat');
});

module.exports = router;
