const express = require('express');
const router = express.Router();
const { checkLoggedIn } = require('../middlewares')

/* GET home page. */
router.get('/', checkLoggedIn, function (req, res, next) {
  res.send("Home page");
});

module.exports = router;
