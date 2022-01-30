let multer = require("multer");
const path = require("path");
let fileUpload = require("../middlewares/upload");
const { product_image } = require("../models");

// const base_url = window.location.origin;

class UploadController {
   static prodImg(req, res) {
    let upload = multer({
      storage: fileUpload.files.storage("product"),
      limits: { fileSize: 20000000 },
      fileFilter: fileUpload.files.allowedFile,
    }).single("prodImg");
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        res.json({ message: err });
      } else if (err) {
        res.json({ message: err });
      } else {
        console.log(req.file);
        try {
          // console.log(id)
          const { primary, productId } = req.body;
          const result = await product_image.create({
            filename: `http://${req.headers.host}/static/images/${req.file.filename}`,
            size: req.file.size,
            type: path.extname(req.file.filename),
            primary: primary === "true",
            productId
          });

          res.status(200).json(result);
        } catch (err) {
          res.status(500).json(err);
        }
      }
    });
  }
}

module.exports = UploadController;
