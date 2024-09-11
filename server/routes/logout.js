const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    req.session.destroy()
    res.clearCookie('session');
    console.log('Session destroyed and cookies cleared');
    return res.status(200).json({ message: 'Logout successful' });
})

module.exports = router