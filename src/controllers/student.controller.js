const feesmodel = require("../models/student.model");
//getting all list
exports.getfeesList = (req, res) => {
  feesmodel.getallstudents((err, feess) => {
    console.log("we are here");
    if (err) {
      res.send(err, feess);
      console.log("students");
    } else if (feess) {
      res.send(feess);
    }
  });
};

//getting by id
exports.getfeesListbyID = (req, res) => {
  feesmodel.getallstudentsbyID(req.params.id, (err, ids) => {
    console.log("ok");
    if (err) {
      res.send(err);
    } else if (ids) {
      res.send(ids);
    }
  });
};

//create employee
exports.createNewId = (req, res) => {
  const feesReqData = new feesmodel(req.body);
  console.log("created student admission");

  if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
    res
      .send(400)
      .send({ success: false, message: "please fill all the details" });
  } else {
    console.log("valid data");
    feesmodel.createDetails(feesReqData, (err, feesss) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "created successfully",
        data: feesReqData.admission_id,
      });
    });
  }
};

//update data
exports.updateID = (req, res) => {
  const feesReqData = new feesmodel(req.body);
  console.log("updated student amission");
  //checking null
  if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
    res
      .send(400)
      .send({ success: false, message: "please fill all the details" });
  } else {
    console.log("valid data");
    feesmodel.updateDetails(req.params.id, feesReqData, (err) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "updated successfully",
      });
    });
  }
};
//delete
exports.deletelist = (req, res) => {
  feesmodel.deletelist(req.params.id, res, (err, del) => {
    if (err) res.send(err);
    res.json({
      status: true,
      message: "deleted successfully",
    });
  });
};

//getting student list controller function
// exports.getfeesList = (req, res) => {
//   console.log("here is all fees list");
// };
exports.createpost = (req, res) => {
  const feesReqData = new feesmodel(req.body);
  console.log("created student admission");

  if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
    res
      .send(400)
      .send({ success: false, message: "please fill all the details" });
  } else {
    console.log("valid data");
    feesmodel.createuser(feesReqData, (err, feesss) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "created successfully",
        data: feesReqData.admission_id,
      });
    });
  }
};
