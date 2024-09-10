const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares')

router.post('/', isAuthenticated, (req, res) => {
    req.session.destroy()
    console.log('Session destroyed and cookies cleared');
    res.clearCookie('session');
    return res.status(200).json({ message: 'Logout successful' });
})

module.exports = router