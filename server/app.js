const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session')
const cors = require('cors')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const dashboardRouter = require('./routes/dashboard');
const logoutRouter = require('./routes/logout')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'my_session_secret',
    resave: true,
    saveUninitialized: false,
    name: 'session'
}))
app.use((req, res, next) => {
    res.locals.user = req.session.user
    next()
})
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/dashboard', dashboardRouter);
app.use('/logout', logoutRouter);

module.exports = app;
