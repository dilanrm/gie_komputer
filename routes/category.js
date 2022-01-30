const CategoryRouter = require("express").Router();
const CategoryController = require("../controllers/CategoryController");
const { authentication } = require("../middlewares/auth");

CategoryRouter.get("/", CategoryController.get);
CategoryRouter.post("/add", authentication, CategoryController.add);
CategoryRouter.get("/getOne/:id", CategoryController.getOne);
CategoryRouter.delete("/delete/:id", authentication, CategoryController.delete);
CategoryRouter.put("/update/:id", authentication, CategoryController.edit);

module.exports = CategoryRouter;
