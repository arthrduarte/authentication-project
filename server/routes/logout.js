var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    req.session.destroy()
    res.clearCookie('session')
    res.redirect('/')
})

module.exports = router