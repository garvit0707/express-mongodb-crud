const user_details = require("../models/userDetails.model");

exports.adddata = async (req, res) => {
  try {
    const existing = await user_details.findOne({ key: req.body.key });

    if (existing) {
      return res.status(400).send({
        error: "Duplicate value: this key already exists. Try another value.",
      });
    }

    const newdata = new user_details(req.body);
    await newdata.save();

    res.status(201).send(newdata);
  } catch (error) {
    console.error("❌ Error caught in adddata:", error.message);
    res.status(500).send({ error: error.message });
  }
};

exports.getdata = async (req, res) => {
  try {
    const data = await user_details.find();
    res.status(201).send({ message: "data is found here", data });
  } catch (error) {
    console.log("error has been caught here!!!");
    res.status(402).send({ error: error.message });
  }
};

// this is the dynamic routing i have created or done from my side
exports.getuniquedata = async (req, res) => {
  try {
    const unname = req.params.unique;
    const data = await user_details.find({ uniquename: unname });
    res.status(200).send({ message: "data is found here", data });
    console.log(data);
  } catch (error) {
    console.log("error has been caught here!!!");
    res.status(402).send({ error: error.message });
  }
};

exports.updatedata = async (req, res) => {
  try {
    const dynamic_id = req.params.dynamic_id;
    const normaldata = req.body;
    console.log("dynamicid", dynamic_id);
    console.log("normalid", normaldata);
    const datafound = await user_details.findOneAndUpdate(
      { class: dynamic_id },
      normaldata,
      { new: true, upsert: true }
    );
    if (!datafound) {
      const new_data = new user_details({
        class: dynamic_id,
        ...normaldata,
      });
      newfound = await new_data.save();
      return res
        .status(200)
        .send({ message: "Data not found, so created new record", datafound });
    }
    return res
      .status(200)
      .send({ message: "data up[pdated succesfully through put!!", datafound });
  } catch (error) {
    console.log("the error has been caught here! check it now");
    res.status(400).send({ error: error.message });
  }
};

exports.deleteuser = async (req, res) => {
  try {
    value_to_del = req.params.value;
    console.log("the params i am calling this route at", req.params.value);
    // console.log("the requested data user sending",req.body);
    const finding_user = await user_details.deleteMany({
      key: req.params.value,
    });
    if (finding_user.deletedCount == 0) {
      return res.status(404).send({error:"Repeated element errors"});
    }
    return res.status(200).send({
      status: 1,
      message: "Successfully deleted the item(s)",
      deletedCount: finding_user.deletedCount,
    });
  } catch (error) {
    console.log("error is caught");
    res.status(400).json({ error: error.message });
  }
};
