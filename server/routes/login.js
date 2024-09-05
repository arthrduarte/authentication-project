const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("Login page");
});

router.post('/', async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            if (user.password === req.body.password){
                console.log("Logged in");
                return res.status(200).json({ user });
            } else {
                console.log("Incorrect password")
                return res.status(401).json({ message: "Incorrect password" });
            }
        } else {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = router;