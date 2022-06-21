const Playlist = require('../models/playlist')

const playlistForm = (req,res) => {
    res.render('playlist/newPlaylist')
}

const createPlaylist = (req, res) => {
    Playlist.create(req.body, (err, playlist) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.redirect('/user')
    })
}

const playlistDetails = (req, res) => {
    Playlist.findById(req.params.playlistId, (err, playlist) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.render('track/tracks', { playlist })
    })
}

const editPlaylistForm = (req, res) => {
    Playlist.findById(req.params.playlistId, req.body, (err, playlist) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.render('playlist/editPlaylist', { playlist })
    })
}

const updatePlaylist = (req, res) => {
    Playlist.findByIdAndUpdate(req.params.playlistId, req.body, { new: true }, (err, playlist) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.redirect(`/playlist/${playlist._id}`)
    })
}

const deletePlaylist = (req, res) => {
    Playlist.findByIdAndDelete(req.params.playlistId, (err, playlist) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.redirect('/user')
    })
}



module.exports = {
    playlistForm,
    createPlaylist,
    playlistDetails,
    editPlaylistForm,
    updatePlaylist,
    deletePlaylist
}