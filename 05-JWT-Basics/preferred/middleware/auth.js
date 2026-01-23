const jwt = require('jsonwebtoken')

const authMiddleware = async(req, res, next) =>{
  const authorization = req.headers.authorization
  if(!authorization || !authorization.startsWith('Bearer ')){
    return res.status(401).json({ message: 'Unauthorized'}) 
    // Needs to return after this otherwise it'll keep continuing to next lines of code which leads to a crash even though a response has been sent
    // this middleware must stop execution if the auth header is bad.
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