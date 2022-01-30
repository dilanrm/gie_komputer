"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product_image.belongsTo(models.product);
    }
  }
  product_image.init(
    {
      filename: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "filename must not be empty",
          },
        },
      },
      size: {
        type: DataTypes.NUMBER,
        validate: {
          notEmpty: {
            message: "filesize must not be empty",
          },
        },
      },
      type: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "type must not be empty",
          },
        },
      },
      primary: {
        type: DataTypes.BOOLEAN,
        validate: {
          notEmpty: {
            message: "primary must not be empty",
          },
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "productId must not be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "product_image",
    },
  );
  return product_image;
};
