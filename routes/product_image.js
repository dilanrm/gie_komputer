const ProductImgRouter = require("express").Router();
const ProductImgController = require("../controllers/ProductImgController");
const { authentication } = require("../middlewares/auth");

ProductImgRouter.get("/", ProductImgController.get);
ProductImgRouter.get("/filenames/:id", ProductImgController.printFilename);
ProductImgRouter.get(
  "/getOne/:id",
  authentication,
  ProductImgController.imageByPrductId,
);
ProductImgRouter.delete(
  "/delete/:id",
  authentication,
  ProductImgController.delete,
);

module.exports = ProductImgRouter;
