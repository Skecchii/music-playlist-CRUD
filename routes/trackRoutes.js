const express = require('express')
const router = express.Router()
const trackCtrls = require('../controllers/trackControls')

router.get('/new', trackCtrls.addTrackForm)

router.get('/:trackId', trackCtrls.trackInfo)

router.delete('/:trackId', trackCtrls.removeTrack)

module.exports = router