const mysql = require('mysql2');

const config = require('./config');

const conn = mysql.createConnection({
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    database: config.MYSQL_DATABASE,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    charset:config.MYSQL_CHARSET
});

conn.query(
    'SELECT * FROM `user`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

