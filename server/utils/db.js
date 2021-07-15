const mysql = require("mysql");

exports.db = mysql.createConnection({
  host: "localhost",
  user: "gamention",
  password: "aa123456",
  database: "student_greivance_system",
});
