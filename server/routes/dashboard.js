const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares')

/* GET dashboard page. */
router.get('/', isAuthenticated, (req, res) => {
    res.json({ message: 'Welcome to your dashboard', user: req.session.user });
});

module.exports = router;