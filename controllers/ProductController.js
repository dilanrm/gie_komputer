const { product, brand, category } = require("../models");

class ProductController {
  static async get(req, res) {
    try {
      const data = await product.findAll({
        include:[brand,category],
        order: [["id", "DESC"]],
      });
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({ msg: e.error });
    }
  }

  static async add(req, res) {
    try {
      const { nama, deskripsi, harga, stock, berat, brandId, categoryId } =
        req.body;
      const data = await product.create({
        nama,
        deskripsi,
        harga,
        stock,
        berat,
        brandId,
        categoryId,
      });
      res.status(200).json({ msg: "Success add", data });
    } catch (e) {
      console.log(e);
      res.status(400).json({ msg: e.error });
    }
  }

  static async getOne(req, res) {
    const id = +req.params.id;
    try {
      const data = await product.findAll({
        where: {id},
        include:[brand,category],
        order: [["id", "ASC"]],
      });
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({ msg: e.error });
    }
  }
  
  // static async getCat(req, res) {
  //   const slug = req.params.slug;
  //   try {
  //     const data = await product.findAll({
  //       where: {slug}
  //     });
  //     res.status(200).json(data);
  //   } catch (e) {
  //     res.status(400).json({ msg: e.error });
  //   }
  // }

  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { nama, deskripsi, harga, stock, berat, brandId, categoryId } =
        req.body;
      const data = await product.update(
        {
          nama,
          deskripsi,
          harga,
          stock,
          berat,
          brandId,
          categoryId,
        },
        { where: { id } },
      );
      res.status(200).json({ msg: "Edit Success" });
    } catch (e) {
      res.status(400).json({ msg: e.error });
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const data = await product.destroy({ where: { id } });
      res.status(200).json({ msg: `Succes delete id ${id}` });
    } catch (e) {
      res.status(400).json({ msg: e.error });
    }
  }
}

module.exports = ProductController;
