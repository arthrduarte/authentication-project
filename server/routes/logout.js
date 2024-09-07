var express = require('express');
var router = express.Router();
const { isAuthenticated } = require('../middlewares')

router.get('/', isAuthenticated, (req, res) => {
    req.session.destroy()
    res.clearCookie('session')
    res.status(200).json({ message: 'Logout successful' });
})

module.exports = router