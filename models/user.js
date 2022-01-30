'use strict';
const {
  Model
} = require('sequelize');
const { encryptPwd } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    nama: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "fullname must not be empty",
        },
      },
    },
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
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "password must not be empty",
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
    }
  }, {
    hooks: {
      beforeCreate: function (user, options) {
        user.password = encryptPwd(user.password);
      },
      beforeUpdate: function (user, options) {
        user.password = encryptPwd(user.password);
      },
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};