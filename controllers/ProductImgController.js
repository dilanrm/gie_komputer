const { product, product_image } = require("../models");
const fs = require("fs");

class ProductImgController {
  static async get(req, res) {
    try {
      const data = await product_image.findAll({
        include: [product],
        order: [["id", "ASC"]],
      });
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({ msg: e.error });
    }
  }

  static async imageByPrductId(req, res) {
    const id = +req.params.id;
    try {
      const result = await product_image.findAll({
        limit: 1,
        order: [["id", "DESC"]],
        where: { productId: id, primary: true },
      });

      res.status(200).json(result[0]);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  static async delete(req, res) {
    const id = +req.params.id;
    try {
      const result = await product_image.destroy({
        where: { productId: id },
      });

      try {
        const files = await product_image.findAll({
          attributes: ["filename"],
          where: { productId: id },
        });

        const root = "../static/images/";

        const output = files.map((fil) => {
          return fil.dataValues.filename;
        });

        output.forEach(
          (path) => fs.existsSync(root + path) && fs.unlinkSync(root + path),
        );

        res
          .status(200)
          .json({ message: `Product with id ${id} successfully deleted!` });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async printFilename(req, res) {
    const id = +req.params.id;
    try {
      const result = await product_image.findAll({
        attributes: ["filename"],
        where: { productId: id },
      });
      const output = result.map((fil) => {
        return fil.dataValues.filename;
      });
      console.log(output);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProductImgController;
