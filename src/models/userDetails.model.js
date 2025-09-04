let mongoose = require("mongoose");

const mongodb_schema2 = new mongoose.Schema({
  key: { type: Number,unique:true },
  class: { type: Number, required: true },
  address: { type: String },
  surname: { type: String },
  greeting: { type: String },
  uniquename: {type: String} 
});


const user_details = new mongoose.model("userdetails", mongodb_schema2 );

module.exports  = user_details;

