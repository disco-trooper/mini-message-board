const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleString(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
  },
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Mini Message Board',
    messages: messages,
  });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'Mini Message Board' });
});

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageAuthor,
    added: new Date().toLocaleString(),
  });
  res.redirect('/');
});

module.exports = router;
