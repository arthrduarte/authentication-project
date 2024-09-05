exports.checkLoggedIn = (req, res, next) => {
    if (req.session.user) {
        console.log("User is logged in and accessed home page")
        next()
    } else {
        console.log("User is not logged in and tried to access home page. Redirecting to login...")
        res.redirect('/login')
    }
}

exports.bypassLogin = (req, res, next) => {
    if (!req.session.user) {
        console.log("User is not logged in and accessed login page")
        next()
    } else {
        console.log("User is logged in and tried to access login page. Redirecting to home...")
        res.redirect('/')
    }
}