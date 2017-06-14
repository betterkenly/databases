var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

module.exports = connection;
