var dbcon = require("../../config/db.config");
const { status } = require("express/lib/response");
const hash = require("bcrypt");
const bcrypt = require("bcryptjs/dist/bcrypt");

const saltRounds = 10;
var User = function (user) {
  this.email_id = user.email_id;
  this.password = user.password;
};

User.register = async function (req, res) {
  console.log(req.email_id);
  const password = req.password;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  let user = {
    email_id: req.email,
    password: encryptedPassword,
  };
  dbcon.query(
    "INSERT INTO admins SET ?",
    user,
    function (error, results, fields) {
      if (error) {
        console.log({
          code: 400,
          failed: "error occurred",
          error: error,
        });
      } else {
        console.log({
          code: 200,
          success: "user registered sucessfully",
        });
      }
    }
  );
};

module.exports = User;
