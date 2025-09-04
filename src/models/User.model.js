let mongoose = require("mongoose");

const mongodb_schema = new mongoose.Schema({
  name: { type: String, required: true, },
  age: { type: Number, min: 0 },
  add: { type: String },
  uniqueid: { type: Number, unique: true },
  place: { type: String },
  logic: {type:String,eval: ["aman", "pinkiiii","pinkiiii"]}
});


const Users = mongoose.model("User",mongodb_schema);
module.exports = Users;
