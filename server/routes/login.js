const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("Login page");
});

router.post('/', async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        return res.status(200).json({ message: "Login successful", user });
        
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = router;