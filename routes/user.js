const UserRouter = require("express").Router();
const UserController = require("../controllers/UserController");
const { authentication } = require("../middlewares/auth");

UserRouter.get("/", authentication, UserController.getUser);
UserRouter.get("/getOne/:id", authentication, UserController.getOne);
UserRouter.get("/isExist/:email", UserController.checkMail);
UserRouter.post("/login", UserController.login);
UserRouter.post("/register", UserController.register);
UserRouter.delete("/delete/:id", authentication, UserController.deleteUser);
UserRouter.put("/update/:id", authentication, UserController.editUser);

module.exports = UserRouter;
