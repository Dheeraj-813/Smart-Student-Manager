const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
const authHeader = req.header('Authorization');

if (!authHeader || !authHeader.startsWith('Bearer ')) {
  return res.status(401).json({
    message: 'Access denied. Valid Bearer token required.'
  });
}

const token = authHeader.slice(7).trim();

if (!token) {
  return res.status(401).json({
    message: 'Access denied. No token provided.'
  });
}

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = authMiddleware;