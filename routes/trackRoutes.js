const express = require('express')
const router = express.Router()
const trackCtrls = require('../controllers/trackControls')

router.get('/new', trackCtrls.addTrackForm)

router.delete('/:trackId', trackCtrls.removeTrack)

module.exports = router