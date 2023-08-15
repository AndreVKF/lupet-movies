require("dotenv").config()
require("express-async-errors")
const ErrHandler = require("./utils/ErrorHandler")

const routes = require("./routes")

const express = require("express")

const app = express()
const port = 3333

// middlewares
app.use(express.json())
app.use(routes)

// error handler
app.use((err, req, res, next) => {
  if (err instanceof ErrHandler) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    })
  }

  console.log(err)

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  })
})

app.listen(port, () => console.log(`Listening to port: ${port}`))
