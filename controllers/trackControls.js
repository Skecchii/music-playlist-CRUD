const Playlist = require('../models/playlist')

const addTrackForm = (req,res) => {
    Playlist.findOne(req.params.playlistId, (err, playlist) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.render('track/newTrack', { playlist, playlistId: req.params.playlistId })
    })
}

// const addTrack = (req,res) => {
//     Tracks.create(req.body, (err, track) => {
//         if (err) {
//             res.status(400).json(err)
//             return
//         }
//         Playlist.findOneAndUpdate(req.params.playlistId, { new: true }, (err, playlist) => {
//             res.redirect(`/playlist/${playlist._id}`)
//         })
//     })
// }

const addTrack = (req,res) => {
    Playlist.findById(req.params.playlistId, (err, playlist) => {
        playlist.tracks.push(req.body)
        playlist.save(err => {
            res.redirect(`/playlist/${playlist._id}`)
        })
    })
}

// const removeTrack = (req,res) => {
//     Tracks.findByIdAndDelete(req.params.trackId, { new: true }, (err, track) => {
//         if (err) {
//             res.status(400).json(err)
//             return
//         }
//         Playlist.findOne(req.params.playlistId, (err, playlist) => {
//             res.redirect(`/playlist/${ playlist._id }`)
//         })
//     })
// }

const removeTrack = (req,res) => {
    Playlist.findById(req.params.playlistId, { new: true }, (err, playlist) => {
        playlist.tracks.map((track) => {
            track.id(_id).remove()
            playlist.save(err => {
                res.redirect(`playlist/${ playlist._id }`)
            })
        })
    })
    }

module.exports = {
    addTrackForm,
    addTrack,
    removeTrack
}