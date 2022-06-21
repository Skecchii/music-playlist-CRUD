const express = require('express')
const app = express()
const PORT = process.env.PORT || '4000'
const path = require('path')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const methodOverride = require('method-override')

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const playlistRoutes = require('./routes/playlistRoutes')
const trackRoutes = require('./routes/trackRoutes')

require('dotenv').config()
require('./config/database')
require('./config/googlePassport')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(methodOverride('_method'))

app.use(session({
    secret: process.env.GOOGLE_CLIENT_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
    res.render('login')
})

app.use(authRoutes)
app.use('/user', userRoutes)
app.use('/playlist', playlistRoutes)
app.use('/playlist', trackRoutes)

app.use((req,res, next) => {
    res.locals.user = req.user
    next()
})

app.listen(PORT)