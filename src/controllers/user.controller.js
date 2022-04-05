const usermodel = require("../models/user.model");

exports.createNewuser = (req, res) => {
  const userReqData = new usermodel(req.body);
  console.log("created student admission");

  if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
    res
      .send(400)
      .send({ success: false, message: "please fill all the details" });
  } else {
    console.log("valid data");
    usermodel.register(userReqData, (err, feesss) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "created successfully",
        data: userReqData.email_id,
      });
    });
  }
};
