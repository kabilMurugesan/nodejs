const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const { checkToken } = require("./auth/token.validation");
const port = process.env.PORT || 5000;

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

//importing file student routes
// const studentroutes = require("./src/routes/student.route");
// const userroutes = require("./src/routes/user.route");
// const routes = require("./test/calculator");

//create url using middleware
// app.use("/api/v1/student/login", userroutes);
// app.use("/api/v1/student", checkToken, studentroutes);

app.listen(port, () => {
  console.log("express server is started at port 5000");
});
