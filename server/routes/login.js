const express = require('express');
const router = express.Router();
const User = require('../models/userModel')
const { isNotAuthenticated } = require('../middlewares')

/* GET home page. */
router.get('/', isNotAuthenticated, function (req, res, next) {
    res.send("Login page");
});

router.post('/', isNotAuthenticated, async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        req.session.user = {
            userId: user._id,
            username: user.username,
            email: user.email
        }

        return res.status(200).redirect('/dashboard');
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = router;