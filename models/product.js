"use strict";
const { Model } = require("sequelize");
const slugify = require("../helpers/slugs");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.hasMany(models.product_image);
      product.hasMany(models.product_link);
      product.belongsTo(models.brand);
      product.belongsTo(models.category);
    }
  }
  product.init(
    {
      nama: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name can't be empty!'",
          },
        },
      },
      deskripsi: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            message: "Desc can't be empty!'",
          },
        },
      },
      harga: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "harga can't be empty!'",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "stock can't be empty!'",
          },
        },
      },
      berat: {
        type: DataTypes.NUMBER,
        validate: {
          notEmpty: {
            message: "berat can't be empty!'",
          },
        },
      },
      brandId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "brandId can't be empty!'",
          },
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "categoryId can't be empty!'",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name can't be empty!'",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: function (product, options) {
          product.slug = slugify(product.nama);
        },
        beforeUpdate: function (product, options) {
          product.slug = slugify(product.nama);
        },
      },
      sequelize,
      modelName: "product",
    },
  );
  return product;
};
