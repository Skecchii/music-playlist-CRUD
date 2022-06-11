const express = require('express')
const router = express.Router()
const userCtrls = require('../controllers/UserControls')

router.get('/', userCtrls.userIndex)

router.get('/:userId/edit', userCtrls.editUserForm)

router.put('/:userId', userCtrls.updateUser)

module.exports = router