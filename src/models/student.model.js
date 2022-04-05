const { status } = require("express/lib/response");
var dbConn = require("../../config/db.config");

var Fees = function (fees) {
  this.admission_number = fees.admission_number;
  this.admission_id = fees.admission_id;
  this.student_name = fees.student_name;
  this.father_name = fees.father_name;
  this.phone_number = fees.phone_number;
  this.alternate_phone_no = fees.alternate_phone_no;
  this.address = fees.address;
  this.email_id = fees.email_id;
  this.status_of_student = fees.status_of_student;
};

Fees.getallstudents = (result) => {
  dbConn.query("SELECT * FROM fees", (err, res) => {
    if (err) {
      console.log("error while fetching table values", err);
      result(null, err);
    } else if (res) {
      console.log("values fetched succesfully");
      result(null, res);
    }
  });
};

Fees.getallstudentsbyID = (id, result) => {
  dbConn.query("SELECT * FROM fees WHERE admission_id=? ", id, (err, res) => {
    if (err) {
      console.log("Error while fetching by id", err);
      return null, err;
    } else {
      result(null, res);
    }
  });
};
Fees.createDetails = (feesReqData, result) => {
  dbConn.query("INSERT INTO fees SET?", feesReqData, (err, res) => {
    if (err) {
      console.log("error while inserting", err);
      result(null, err);
    } else {
      console.log("data created succesfully");
      result(null, res);
    }
  });
};

Fees.updateDetails = (id, feesReqData, result) => {
  dbConn.query(
    "UPDATE fees SET admission_number=?,student_name=?,father_name=?,phone_number=?,alternate_phone_no=?,address=?,email_id=?,status_of_student=? WHERE admission_id=?",
    [
      feesReqData.admission_number,
      feesReqData.student_name,
      feesReqData.father_name,
      feesReqData.phone_number,
      feesReqData.alternate_phone_no,
      feesReqData.address,
      feesReqData.email_id,
      feesReqData.status_of_student,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error while updating");
        result(null, err);
      } else {
        console.log("its updated");
        result(null, res);
      }
    }
  );
};
Fees.deletelist = (id, result) => {
  dbConn.query("DELETE FROM fees WHERE admission_id=?", [id], (err, res) => {
    if (err) {
      console.log("error while deleting");
      result(null, err);
    } else {
      console.log(res);
    }
  });
};

module.exports = Fees;
//module.exports = User;
