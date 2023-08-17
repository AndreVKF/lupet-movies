require("express-async-errors")
const express = require("express")
const cors = require("cors")
const ErrHandler = require("./utils/ErrorHandler")

const routes = require("./routes")

const app = express()
const port = 3333

// middlewares
app.use(express.json())
app.use(cors())
app.use(routes)

// error handler
app.use((err, req, res, next) => {
  if (err instanceof ErrHandler) {
    res.status(err.statusCode).json({
      message: err.message,
    })

    return
  }

  console.log(err)

  res.status(500).json({
    status: "error",
    message: "Erro Interno do Servidor",
  })
})

app.listen(port, () => console.log(`Listening to port: ${port}`))
