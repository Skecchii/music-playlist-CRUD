const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))

router.get('oauth2callback', passport.authenticate('google', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/user')
})

router.get('/logout', (req,res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router