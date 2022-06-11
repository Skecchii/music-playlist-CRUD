const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    text: String,
})

const TracksSchema = new mongoose.Schema({
    name: String,
    artist: String,
    genre: String,
})

const PlaylistSchema = new mongoose.Schema({
    name: String,
    description: String,
    tracks: [TracksSchema],
    comment: [CommentSchema]
})

const UserSchema = new mongoose.Schema({
    name: String,
    playlist: [PlaylistSchema]
})

module.exports = mongoose.model('User', UserSchema)
