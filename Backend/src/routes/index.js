const { Router } = require("express")

const authenticate = require("../middleware/authenticate")

const sessionRouter = require("./session.routes")
const userRouter = require("./user.routes")
const movieNotesRouter = require("./movieNotes.routes")
const movieTagsRouter = require("./movieTags.routes")

const routes = Router()

// linkage to routes
routes.use("/authenticate", sessionRouter)
routes.use("/users", authenticate, userRouter)
routes.use("/movie_notes", authenticate, movieNotesRouter)
routes.use("/movie_tags", authenticate, movieTagsRouter)

module.exports = routes
