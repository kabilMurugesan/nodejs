var mysql = require("mysql2");

var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kabil@123",
  database: "student_profile_page",
});

dbConn.connect(function (error) {
  if (error) throw error;
  console.log("database connected succesfully!!!!!");
});
module.exports = dbConn;
