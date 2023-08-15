const { AUTH_SECRET } = require("../utils/Env")

module.exports = {
  jwtConfig: {
    secret: AUTH_SECRET,
    expiresIn: "1d",
  },
}
