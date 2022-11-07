const Sequelize = require("sequelize");

const config = require("../config/config");

const env = process.env.NODE_ENV || "development";
const {
  username,
  password,
  database,
  host,
  dialect,
} = require("../config/config")[env];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const Member = require("./member")(sequelize, Sequelize.DataTypes);

const db = {};
db.Member = Member;
module.exports = db;
