const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

router.post('/', async (req, res) => {
    const userToDelete = await User.findByIdAndDelete(user.userId);
    if (!userToDelete) {
        return res.status(404).json({ message: "User not found" });
    }
    req.session.destroy();
    res.clearCookie('session');
    return res.status(200).json({ message: "User deleted successfully" });
})

module.exports = router