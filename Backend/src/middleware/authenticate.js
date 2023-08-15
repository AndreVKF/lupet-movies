const { verify } = require("jsonwebtoken")

const ErrorHandler = require("../utils/ErrorHandler")
const { jwtConfig } = require("../configs/auth")

const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new ErrorHandler("JWT token not informed!!", 401)
  }

  // split token
  const [, token] = authHeader.split(" ")

  try {
    const { userId } = verify(token, jwtConfig.secret)

    req.user = {
      user_id: Number(userId),
    }

    return next()
  } catch {
    throw new ErrorHandler("JWT Token invalid", 401)
  }
}

module.exports = authentication
