const express = require('express')
const router = express.Router()
const trackCtrls = require('../controllers/trackControls')

router.get('/:playlistId/track/new', trackCtrls.addTrackForm)

router.delete('/:playlistId/track/:trackId', trackCtrls.removeTrack)

module.exports = router