const mongoose = require('mongoose')

mongoose.set("strictQuery", false);

module.exports = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/authentication-project')
    } catch(err) {
        console.error(err.message)
        process.exit(1)
    }
}