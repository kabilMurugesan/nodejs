//create route for all fees list

const express = require("express");

const router = express.Router();

const studentcontroller = require("../controllers/student.controller");

//creating route for all fees lst

router.get("/", studentcontroller.getfeesList);

router.get("/:id", studentcontroller.getfeesListbyID);

router.post("/", studentcontroller.createNewId);

router.put("/:id", studentcontroller.updateID);

router.delete("/:id", studentcontroller.deletelist);

module.exports = router;
