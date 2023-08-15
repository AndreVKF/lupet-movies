const { Router } = require("express")

const SessionController = require("../controllers/SessionController")
const sessionController = new SessionController()

const sessionRouter = Router()

sessionRouter.post("/", sessionController.create)

module.exports = sessionRouter
