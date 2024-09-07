exports.isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();  // User is authenticated, proceed to the next handler
    } else {
        return res.status(401).json({ message: 'You must log in' });
    }
}

exports.isNotAuthenticated = (req, res, next) => {
    if (!req.session.user) {
        return next();  // User is not authenticated, proceed to the next handler
    } else {
        return res.status(401).json({ message: 'You are logged in' });
    }
}