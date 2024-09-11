exports.isAuthenticated = (req, res, next) => {
    console.log("Checking if user is authenticated...");
    console.log("Session ID:", req.sessionID);
    console.log("Session Data:", req.session);

    console.log(req.session.user)
    if (req.session.user) {
        console.log("User is saved in session, proceeding to next handler")
        return next();  // User is authenticated, proceed to the next handler
    } else {
        console.log("User is not saved in session, error returned")
        return res.status(401).json({ message: 'You must log in' });
    }
}

exports.isNotAuthenticated = (req, res, next) => {
    console.log("Checking if user is not authenticated...");
    console.log("Session ID:", req.sessionID);
    console.log("Session Data:", req.session);

    console.log(req.session.user)
    if (!req.session.user) {
        console.log("User is not saved in session, proceed to next handler")
        return next();  // User is not authenticated, proceed to the next handler
    } else {
        console.log("User is saved in session, error returned")
        return res.status(401).json({ message: 'You are logged in' });
    }
}