const express = require('express')
const router = express.Router()
const playlistCtrls = require('../controllers/playlistControls')
const trackCtrls = require('../controllers/trackControls')

router.get('/new', playlistCtrls.playlistForm)

router.get('/:playlistId', playlistCtrls.playlistDetails)

router.get('/:playlistId/edit', playlistCtrls.editPlaylistForm)

router.post('/', playlistCtrls.createPlaylist)

router.post('/:playlistId', trackCtrls.addTrack)

router.put('/:playlistId', playlistCtrls.updatePlaylist)

router.delete('/:playlistId', playlistCtrls.deletePlaylist)

module.exports = router