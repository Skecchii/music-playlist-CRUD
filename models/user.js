const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    googleId: String,
})

const User = mongoose.model('User', UserSchema)

module.exports = User