const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    try {
        const user_object = jwt.verify(token, process.env.privateKey);

        req.user = user_object.user;
        next();
    } catch (error) {
        res.status(401).json({msg: "Invalid token"})
    }
}