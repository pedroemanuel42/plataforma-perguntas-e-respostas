const Sequelize = require('sequelize');

const connection = new Sequelize('askdata', 'root', 'p13f02m89s', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
