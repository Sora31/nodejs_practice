var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/flash', (req, res) => {
  req.session.message = 'session message';
  req.flash('message', 'flash message');
  res.redirect('/users/flash/view');
});

router.get('/flash/view', (req, res) => {
  res.send(`${req.session.message} ${req.flash('message')}`);
});

router.get('/:id', (req, res) => {
  console.log(req.params);
});

module.exports = router;
