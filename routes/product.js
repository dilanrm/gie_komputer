const ProductRouter = require("express").Router();
const ProductController = require("../controllers/ProductController");
const { authentication } = require("../middlewares/auth");

ProductRouter.get("/", ProductController.get);
ProductRouter.post("/add", authentication, ProductController.add);
ProductRouter.get("/getOne/:id", ProductController.getOne);
ProductRouter.delete("/delete/:id", authentication, ProductController.delete);
ProductRouter.put("/update/:id", authentication, ProductController.edit);

module.exports = ProductRouter;
