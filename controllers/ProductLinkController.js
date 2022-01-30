const { product, product_link } = require("../models");

class ProductLinkController {
  static async get(req, res) {
    try {
      // console.log(req.userData)
      const data = await product_link.findAll({
        include: [product],
        order: [["id", "ASC"]],
      });
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({ msg: e.error });
    }
  }

  static async add(req, res) {
    try {
      const { dest, url, productId } = req.body;

      const data = await product_link.create({
        dest,
        url,
        productId,
      });
      res.status(200).json({ msg: "Success add", data: data });
    } catch (e) {
      res.json({ msg: e.error });
    }
  }

  static async getOne(req, res) {
    const id = +req.params.id;
    try {
      const data = await product_link.findByPk(id);
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { dest, url, productId } = req.body;
      const data = await product_link.update(
        { dest, url, productId },
        { where: { id } },
      );
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({ msg: e });
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const data = await product_link.destroy({ where: { id } });
      res.status(200).json({ msg: `Success delete id ${id}` });
    } catch (e) {
      res.status(400).json({ msg: e });
    }
  }
}

module.exports = ProductLinkController;
