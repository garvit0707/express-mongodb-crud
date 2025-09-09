let mongoose = require("mongoose");

const moongodb_schema3 = new mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    password: {
        type: String, 
        required: true
    }
})


const auth_model = mongoose.model("data",moongodb_schema3);

module.exports = auth_model;