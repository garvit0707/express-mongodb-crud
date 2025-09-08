const { response } = require("../app");
const Users = require("../models/User.model");

exports.adduser = async (req, res) => {
  try {
    const existing_user = await Users.findOne({ uniqueid: req.body.uniqueid });
    if (existing_user) {
      return res.status(409).send({
        error: "User with this unique Id  already exists",
        existing_user,
      });
    }
    const newuser = new Users(req.body);
    await newuser.save();
    res
      .status(201)
      .send({ message: "Data saved in data bse succesfully!!!", newuser });
  } catch (error) {
    console.log("error has been caught here!!!");
    res.status(500).send({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { uniqueid } = req.body;
    if (!uniqueid) {
      return res.status(400).send({ error: error.message });
    }
    const deleteUser = await Users.deleteMany({ uniqueid });
    res.status(200).send({ message: "User deleted successfully", deleteUser });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getuser = async (req, res) => {
  try {
    const data = await Users.find();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.updateuser = async (req, res) => {
  try {
    const { uniqueid, ...updatedata } = req.body;
    console.log(
      "the unique id and the unique data i have is here",
      uniqueid,
      updatedata
    );
    if (!uniqueid) {
      return res
        .status(400)
        .send({ error: "uniqueid is required for updating user" });
    }

    const updated_User = await Users.findOneAndUpdate(
      { uniqueid: uniqueid },
      updatedata
    );
    // CHANGE 3: Check if user exists
    if (!updated_User) {
      return res.status(404).send({
        error: "User with this uniqueid not found",
      });
    }

    res
      .status(200)
      .send({ message: "data has been updated succesfully", updated_User });
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.log("error has been caught by me here!!");
  }
};

exports.logical = async (req, res) => {
  try {
    const work = req.params.work;

    if (work == "aman" || work == "piyush" || work == "pinkiiii") {
      console.log("found it ");
      response = await Users.find({ username: work });
      res.status(200).json(response);
    }

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.testuser = async (req, res) => {
  res.send("this is th test route i defined");
};

// middlewares function goes here


// const logRequest =(req, res, next)=>{
//     console.log(`the time is ${new Date().toDateString()} and the original url is ${req.originalUrl}`)
// };



// app.get("/test", (req, res) => {
//   res.send("this is th test route i defined");
// });
