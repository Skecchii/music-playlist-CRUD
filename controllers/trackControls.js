const Playlist = require('../models/playlist')

const addTrackForm = (req,res) => {
    Playlist.findById(req.params.playlistId, (err, playlist) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.render('track/newTrack', { playlist })
    })
}

const addTrack = (req,res) => {
    Playlist.findById(req.params.playlistId, (err, playlist) => {
        playlist.tracks.push(req.body)
        playlist.save(err => {
            res.redirect(`/playlist/${playlist._id}`)
        })
    })
}

const removeTrack = (req,res) => {
    Playlist.findOne({'tracks._id': req.params.trackId}, (err, playlist) => {
        playlist.tracks.id(req.params.trackId).remove()
        playlist.save(err => {
            res.redirect(`/playlist/${playlist._id}`)
        })
    })
    }

module.exports = {
    addTrackForm,
    addTrack,
    removeTrack
}