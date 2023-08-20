require("express-async-errors")
require("dotenv/config")
const express = require("express")
const cors = require("cors")
const uploadConfig = require("./configs/upload")
const ErrHandler = require("./utils/ErrorHandler")
const { SERVER_PORT } = require("./utils/Env")

const routes = require("./routes")

const app = express()
const port = SERVER_PORT || 3333

// middlewares
app.use(express.json())
app.use(cors())
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))
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
app.get("/", (req, res) =>
  res.json({ message: "Hello to the movie database!" })
)
app.listen(port, () => console.log(`Listening to port: ${port}`))
