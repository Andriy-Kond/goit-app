const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // Рендеремо файл index.ejs:
  res.render('index', { title: 'Express' });
  // "index" - який ми беремо файл
  // { title: 'Express' } - що ми передаємо у цей файл.
});

module.exports = router;
