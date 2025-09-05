const express = require("express");
let router = express.Router();
const userdetails =  require("../controllers/userDetails.controller");


router.post("/userdetails", userdetails.adddata)
router.get("/userdetails", userdetails.getdata);
router.post("/userdetails/:unique", userdetails.getuniquedata);
router.put("/userdetails/:dynamic_id", userdetails.updatedata);
router.delete("/userdetails/:value", userdetails.deleteuser);


module.exports = router