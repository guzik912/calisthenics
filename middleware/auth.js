const jwt = require('jsonwebtoken');
const { tokenSecret } = require('../config/url');

const authenticateToken = (req, res, next) => {
  const token = req.header('x-auth-token');

  if(!token) {
    res.status(401).json({ msg: 'No token provide' })
  }

  try {
    jwt.verify(token, tokenSecret, (err, decoded) => {
      if(err) {
        res.status(401).json({ msg: 'Token authenticate is denied'})
      } else {
        req.user = decoded.user;
        next();
      }
    })
  } catch (error) {
    res.status(500).json({ msg: 'Server error' })
  }
}

module.exports = authenticateToken;




