const { Router } = require("express")
const authenticate = require("../middleware/authenticate")

const SessionController = require("../controllers/SessionController")
const sessionController = new SessionController()

const sessionRouter = Router()

sessionRouter.post("/", sessionController.create)
sessionRouter.get("/validate", authenticate, sessionController.validate)

module.exports = sessionRouter
