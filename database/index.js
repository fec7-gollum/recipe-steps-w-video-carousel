const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const con = mysql.createConnection(mysqlConfig);

module.exports = {
  con
};