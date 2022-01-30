const letterRouter = require("express").Router();
const LetterController = require("../controllers/LetterController");
const { authentication } = require("../middlewares/auth");

letterRouter.get("/", LetterController.getMsg);
letterRouter.post("/add", LetterController.addMsg);
letterRouter.delete("/delete/:id", authentication, LetterController.delMsg);

module.exports = letterRouter;
