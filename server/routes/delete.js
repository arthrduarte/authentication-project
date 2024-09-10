const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares')
const User = require('../models/userModel')

router.post('/', isAuthenticated, async (req, res) => {
    const user = req.session.user
    try {
        const userToDelete = await User.findByIdAndDelete(user.userId);
        if (!userToDelete) {
            return res.status(404).json({ message: "User not found" });
        }
        req.session.destroy();
        res.clearCookie('session');
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = router