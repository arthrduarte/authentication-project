const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/authentication-project',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected')
    } catch(err) {
        console.error(err.message)
        process.exit(1)
    }
}