const mongoose = require('mongoose')

const TracksSchema = new mongoose.Schema({
    song: {type: String, required: true},
    artist: {type: String, required: true},
}, {
    timestamps: true
})

const PlaylistSchema = new mongoose.Schema({
    name: {type: String, required: true},
    tracks: [TracksSchema]
})

const Playlist = mongoose.model('Playlist', PlaylistSchema)
module.exports = Playlist