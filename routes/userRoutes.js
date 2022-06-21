const express = require('express')
const router = express.Router()
const userCtrls = require('../controllers/UserControls')

router.get('/', userCtrls.userIndex)

module.exports = router