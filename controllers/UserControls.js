const User = require('../models/user')
const Playlist = require('../models/playlist')

const userIndex = (req,res) => {
    User.findOne(req.user, (err, user) => {
        if (err) {
            return res.status(400).json(err)
        }
        Playlist.find({}, (err, playlists) => {
            if (err) {
                return res.status(400).json(err)
            }
            res.render('user/userProfile', { user, playlists })
        })
    })
}

module.exports = {  
    userIndex,
}