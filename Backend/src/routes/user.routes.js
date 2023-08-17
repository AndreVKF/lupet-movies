const { Router } = require("express")
const UserController = require("../controllers/UserController")

const userController = new UserController()

const authenticate = require("../middleware/authenticate")

const userRouter = Router()

userRouter.get("/", authenticate, userController.index)
userRouter.get("/:user_id", authenticate, userController.show)
userRouter.post("/", userController.create)
userRouter.put("/", authenticate, userController.update)
userRouter.delete("/", authenticate, userController.delete)

module.exports = userRouter
