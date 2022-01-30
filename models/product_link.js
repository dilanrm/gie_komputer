"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product_link.belongsTo(models.product);
    }
  }
  product_link.init(
    {
      dest: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "dest must not be empty",
          },
        },
      },
      url: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "url must not be empty",
          },
          isUrl: {
            message: "must url format",
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
      modelName: "product_link",
    },
  );
  return product_link;
};
