const Sequelize = require('sequelize');

const connection = new Sequelize('todolist', 'root', 'root', {
    host: 'localhost',
    dialect: "mysql"
  });

module.exports = connection;