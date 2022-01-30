const ProductLinkRouter = require("express").Router();
const ProductLinkController = require("../controllers/ProductLinkController");
const { authentication } = require("../middlewares/auth");

ProductLinkRouter.get("/", ProductLinkController.get);
ProductLinkRouter.post("/add", authentication, ProductLinkController.add);
ProductLinkRouter.get("/getOne/:id", ProductLinkController.getOne);
ProductLinkRouter.delete(
  "/delete/:id",
  authentication,
  ProductLinkController.delete,
);
ProductLinkRouter.put(
  "/update/:id",
  authentication,
  ProductLinkController.edit,
);

module.exports = ProductLinkRouter;
