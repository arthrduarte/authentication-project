const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username missing"]
    },
    email: {
        type: String,
        required: [true, "Email missing"]
    },
    password: {
        type: String,
        required: [true, "Password missing"]
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
