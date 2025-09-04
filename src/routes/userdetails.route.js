const express = require("express");
let router = express.Router();
const userdetails =  require("../controllers/userDetails.controller")


router.post("/userdetails", userdetails.adddata)
router.get("/userdetails", userdetails.getdata);


module.exports = router