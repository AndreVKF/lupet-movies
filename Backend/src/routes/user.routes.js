const { Router } = require("express")
const UserController = require("../controllers/UserController")

const userController = new UserController()

const userRouter = Router()

userRouter.get("/", userController.index)
userRouter.get("/:user_id", userController.show)
userRouter.post("/", userController.create)
userRouter.put("/", userController.update)
userRouter.delete("/", userController.delete)

module.exports = userRouter
