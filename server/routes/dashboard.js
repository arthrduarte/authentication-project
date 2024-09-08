const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares')

/* GET dashboard page. */
router.get('/', isAuthenticated, (req, res) => {
    res.json({ user: req.session.user });
});

module.exports = router;