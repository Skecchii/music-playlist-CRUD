const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/user',
    failureRedirect: '/'
}))

router.get('auth/failure', (req,res) => {
    res.send('something went wrong..')
})

router.get('/logout', (req,res) => {
    req.logout(req.user, err => {
        if (err) return next(err)
        res.redirect('/')
    })
})

module.exports = router