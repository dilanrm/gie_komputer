const { brand } = require("../models");
const slugify = require("../helpers/slugs");

class BrandController {
  static async get(req, res) {
    try {
      let brands = await brand.findAll({
        order: [["id", "ASC"]],
      });
      res.status(200).json(brands);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async add(req, res) {
    try {
      const { nama } = req.body;
      // console.log(brand.create({}));
      let result = await brand.create({
        nama,
      });

      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
      console.log(e)
    }
  }

  static async getOne(req, res) {
    const id = +req.params.id;
    try {
      const data = await brand.findByPk(id);
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { nama } = req.body;
      const slug = slugify(nama);
      const data = await brand.update({ nama,slug }, { where: { id } });
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({ msg: e });
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const data = await brand.destroy({ where: { id } });
      res.status(200).json({ msg: `Success delete id ${id}` });
    } catch (e) {
      res.status(400).json({ msg: e });
    }
  }
}

module.exports = BrandController;
