var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleDateString('en-US') + ' ' + new Date().toLocaleTimeString('en-US'),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleDateString('en-US') + ' ' + new Date().toLocaleTimeString('en-US'),
  },
];

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.post('/new', function (req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date().toLocaleDateString('en-US') + ' ' + new Date().toLocaleTimeString('en-US'),
  });
  res.redirect('/');
});
module.exports = router;
