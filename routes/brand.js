const BrandRouter = require("express").Router();
const BrandController = require("../controllers/BrandController");
const { authentication } = require("../middlewares/auth");

BrandRouter.get("/", BrandController.get);
BrandRouter.post("/add", authentication, BrandController.add);
BrandRouter.get("/getOne/:id", BrandController.getOne);
BrandRouter.delete("/delete/:id", authentication, BrandController.delete);
BrandRouter.put("/update/:id", authentication, BrandController.edit);

module.exports = BrandRouter;
