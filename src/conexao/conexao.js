const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '192.168.102.205',
    user: 'scriptcase',
    database: 'ESCOLA_NA_MAO_APP',
    password: 'Zaq12wsX!@',
    port:'3306'
  });

module.exports = connection;