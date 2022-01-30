"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class letter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  letter.init(
    {
      nama: DataTypes.STRING,
      subject: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Email must be not empty",
          },
          isEmail: {
            message: "Must email format",
          },
        },
      },
      phone: DataTypes.STRING,
      message: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "letter",
    },
  );
  return letter;
};
