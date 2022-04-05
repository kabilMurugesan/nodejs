const express = require("express");

var router = express.Router();
const userlogin = require("../controllers/users.controller");
const usercontroller = require("../controllers/user.controller");

router.post("/", usercontroller.createNewuser);
router.post("/login", userlogin.login);

module.exports = router;
