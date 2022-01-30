const router = require("express").Router();

const userRouter = require("./user");
router.use("/users", userRouter);
const BrandRouter = require("./brand");
router.use("/brands", BrandRouter);
const ProductRouter = require("./product");
router.use("/products", ProductRouter);
const CategoryRouter = require("./category");
router.use("/categories", CategoryRouter);
const uploadRouter = require("./upload");
router.use("/uploads", uploadRouter);
const ProductImgRouter = require("./product_image");
router.use("/product-images", ProductImgRouter);
const ProductLinkRouter = require("./product_link");
router.use("/product-link", ProductLinkRouter);
const letterRouter = require("./letter");
router.use("/letter", letterRouter);

router.get("*", (req, res) => {
  res.status(404);

  // respond with html page
  if (req.accepts("html")) {
    res.send("404", { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts("json")) {
    res.json({ error: "Not found" });
    return;
  }

  // default to plain-text. send()
  res.type("txt").send("Not found");
});

module.exports = router;
