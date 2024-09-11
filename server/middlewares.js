exports.isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        console.log("User is saved in session, proceeding to next handler")
        return next();  // User is authenticated, proceed to the next handler
    } else {
        console.log("User is not saved in session, error returned")
        return res.status(401).json({ message: 'You must log in' });
    }
}

exports.isNotAuthenticated = (req, res, next) => {
    if (!req.session.user) {
        console.log("User is not saved in session, proceed to next handler")
        return next();  // User is not authenticated, proceed to the next handler
    } else {
        console.log("User is saved in session, error returned")
        return res.status(401).json({ message: 'You are logged in' });
    }
}