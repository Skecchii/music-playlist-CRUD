const express = require('express')
const router = express.Router()
const playlistCtrls = require('../controllers/playlistControls')

router.get('/new', playlistCtrls.playlistForm)

router.get('/', playlistCtrls.allPlaylists)

router.get('/:playlistId', playlistCtrls.playlistDetails)

router.get('/:playlistId/edit', playlistCtrls.editPlaylistForm)

router.post('/', playlistCtrls.createPlaylist)

router.put('/:playlistId', playlistCtrls.updatePlaylist)

router.delete('/:playlistId', playlistCtrls.deletePlaylist)

module.exports = router