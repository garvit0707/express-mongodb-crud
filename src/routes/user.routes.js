const express = require("express");
const router = express.Router();
const userController = require("../controllers/User.Controller");


router.post("/add-user",userController.adduser);
router.post("/update", userController.updateuser);
router.post("del-user", userController.deleteUser);
router.get("/user", userController.getuser);
router.get("/test", userController.testuser)

module.exports = router
