"use strict";
const { Model } = require("sequelize");
const slugify = require("../helpers/slugs");
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      brand.belongsToMany(models.category, {
        through: "models.product",
        foreignKey: "product.brandId",
      });
    }
  }
  brand.init(
    {
      nama: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name can't be empty!'",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Slug can't be empty!'",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: function (brand, options) {
          brand.slug = slugify(brand.nama);
        },
        beforeUpdate: function (brand, options) {
          brand.slug = slugify(brand.nama);
        },
      },
      sequelize,
      modelName: "brand",
    },
  );
  return brand;
};
