const jwt = require('jsonwebtoken')

const authMiddleware = async(req, res, next) =>{
  const authorization = req.headers.authorization
  if(!authorization || !authorization.startsWith('Bearer ')){
    res.status(401).json({ message: 'Unauthorized'})
  }
  
  const token = authorization.split(' ')[1]
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { name: decoded.name }
    next()
  } catch(err) {
    res.status(401).json({ message: 'Unauthorized'})
  }
}

module.exports = authMiddleware