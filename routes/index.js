var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.post('/new', function (req, res) {
  messages.push({ text: req.body.message, user: req.body.user, added: new Date() });
  res.redirect('/');
});
module.exports = router;
