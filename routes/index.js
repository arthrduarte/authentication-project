var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.isAuth = true
  console.log(req.session)
  console.log(req.session.id)
  res.send("Hello Session")
});

module.exports = router;
