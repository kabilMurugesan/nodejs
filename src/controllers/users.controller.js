var dbConn = require("../../config/db.config");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const psSupported = require("jsonwebtoken/lib/psSupported");

exports.login = async function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  console.log(email);
  dbConn.query(
    "SELECT * FROM admins WHERE email_id = ? and password=?",
    [email, password],
    async function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        if (results.length > 0) {
          const comparision = bcrypt.compare(
            password,
            results[0].password,
            console.log(password)
          );
          if (comparision) {
            res.send({
              code: 200,
              success: "login sucessfull",
              jsontoken: sign({ result: results }, "qwe1234", {
                expiresIn: "24h",
              }),
            });
          } else {
            res.send({
              code: 204,
              success: "Email and password does not match",
            });
          }
        } else {
          res.send({
            code: 206,
            success: "Email does not exits",
          });
        }
      }
    }
  );
};
