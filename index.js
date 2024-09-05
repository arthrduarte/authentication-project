const express = require('express');
const session = require('express-session')
const { checkLoggedIn, bypassLogin } = require('./middlewares')

const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'my_session_secret',
    resave: true,
    saveUninitialized: false,
    name: 'session'
}))

app.use((req, res, next)=>{
    res.locals.user = req.session.user
    next()
})

app.get('/', checkLoggedIn, (req, res) => {
    res.render('home');
});

app.get('/login', bypassLogin, (req, res) => {
    res.render('login', { error: null });
});

app.post('/login', (req, res) => {
    if (req.body.username === 'arthur' && req.body.password === '123') {
        console.log('Logged in')
        console.log(req.session.id)
        req.session.user = { id: 1, username: 'arthur', name: 'Arthur Duarte' }
        res.redirect('/')
    } else {
        res.render('login', { error: 'wrong credentials' })
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.clearCookie('session')
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});