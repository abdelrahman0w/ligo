const mysql = require ('mysql2');

const config = {
  host: 'sql11.freemysqlhosting.net',
  user: 'sql11494512',
  password: 'JtkySiR1XB',
  database: 'sql11494512'
};

const conn = mysql.createConnection(config);

module.exports = conn;