// import sequelize
const { Sequelize } = require("sequelize");

// create connection
const db = new Sequelize("sequelize_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// export connection
module.export = db;
