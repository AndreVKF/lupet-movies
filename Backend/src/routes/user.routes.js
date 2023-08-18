const express = require("express")
const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const upload = multer(uploadConfig.MULTER)

const UserController = require("../controllers/UserController")
const userController = new UserController()

const UserAvatarController = require("../controllers/UserAvatarController")
const userAvatarController = new UserAvatarController()

const authenticate = require("../middleware/authenticate")

const userRouter = Router()

userRouter.get("/", authenticate, userController.index)
userRouter.get("/:user_id", authenticate, userController.show)
userRouter.post("/", userController.create)
userRouter.put("/", authenticate, userController.update)
userRouter.delete("/", authenticate, userController.delete)
userRouter.patch(
  "/avatar",
  authenticate,
  upload.single("avatar"),
  userAvatarController.update
)

module.exports = userRouter
