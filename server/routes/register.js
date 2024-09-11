const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("Register page");
});

router.post('/', async (req, res, next) => {
    const { username, email, password } = req.body
    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: "Username or email already in use" });
        }

        const user = new User({ username, email, password });
        await user.save();

        req.session.user = {
            userId: user._id,
            username: user.username,
            email: user.email
        }

        return res.status(200).json({ message: "Register successful:", user: req.session.user });
        
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = router;