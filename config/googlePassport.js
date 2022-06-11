const passport = require('passport')
const User = require('../models/user')

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
(accessToken, refreshToken, profile, cb) => {
    User.findOne({ 'googleId': profile.id }, (err, user) => {
        if (err) {return cb(err)}
        if (user) {
            return cb(null, user)
        } else {
            const newUser = new User({
                name: profile.name,
                googleId: profile.id
            })
            newUser.save((err) => {
                if (err) return cb(err)
                return cb(null, newUser)
            })
        }
    })
}
))

passport.serializeUser( (user,done) => {
    done(null, user.id)
})

passport.deserializeUser( (id,done) => {
    Student.findById(id, (err,user) => {
        done(err, user)
    })
})