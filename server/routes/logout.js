const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares')

router.post('/', (req, res) => {
    if (req.session.user) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to log out' });
            }
            console.log('Session destroyed and cookies cleared');
            res.clearCookie('session'); 
            return res.status(200).json({ message: 'Logout successful' });
        });
    } else {
        res.status(404).json({ message: 'You are not logged in' })
    }
})

module.exports = router