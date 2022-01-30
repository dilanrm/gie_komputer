const { letter } = require("../models");

class LetterController {
  static async getMsg(req, res) {
    try {
      const data = await letter.findAll({
        include: [user],
        order: [["id", "ASC"]],
      });
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({ msg: e.error });
    }
  }

  static async addMsg(req, res) {
    const { nama, subject, email, phone, message } = req.body;
    const id = req.userData.id || 1;
    try {
      console.log("send");

      const data = await letter.create({
        nama,
        subject,
        email,
        phone,
        message,
        userId: id,
      });
      res.status(200).json({ msg: "Success add", data: data });
    } catch (e) {
      res.json({ msg: e });
    }
  }

  static async delMsg(req, res) {
    if (req.userData.type !== "admin") {
      res.status(400).json({ msg: "You're not an Admin!" });
    } else {
      try {
        const id = +req.params.id;
        const data = await letter.destroy({ where: { id } });
        res.status(200).json({ msg: `Success delete id ${id}` });
      } catch (e) {
        res.status(400).json({ msg: e });
      }
    }
  }
}

module.exports = LetterController;
