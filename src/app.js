const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
var jwt = require('jsonwebtoken');  
const data = require("./models/auth.model");
const connectDB = require("./config/db");
var cookieParser = require('cookie-parser')
require("dotenv").config();

app.use(express.json());

app.use(cookieParser())
connectDB();
app.get("/", (req, res) => {
  res.send("this is the initial route file");
});

// creating the user while keep the encryption of the data

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    // res.status(200).send({ message: "Data Saved Successfully!!!", dat });
    // console.log("data sent is", dat);
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const dat = await data.create({ username, password: hashedPassword });
    res.status(200).send("User registered successfully!",dat);
    console.log("the dat is here we have!!", dat);
  } catch (error) {
    res.status(500).send("Error registering user");
    console.log("error has been caught", error);
  }
});

// now i am going to decrypt the user values !!!!

app.post("/login", async (req, res)=>{
  try {
    const {username,password} = req.body
    const user = await data.findOne({username})
    if (!user){
      res.status(400).send("user not found")
      console.log("user we could not found in our data base")
    };
    console.log("values of pass and data pass",password,user.password)
    const isMatch = await bcrypt.compare(password,user.password)
    if (!isMatch){
      return res.status(400).send("Invalid Credentials");
    };

    // now generating the token
    const token = jwt.sign({ username: username }, 'shhhhh');
    res.cookie("token", token, { httpOnly: true});
    res.send({message: "Login successful, JWT issued",token});
    console.log("res,sending token is here",token)

  } catch (error) {
    console.log("error has caught!!!",error)
    res.status(500).send("error caught")
  }
});


app.get("/profile", (req, res) => {
  try {
    if (!req.cookies.token) {
      return res.status(401).send("No token provided");
    }
    const decode = jwt.verify(req.cookies.token, "shhhhh");
    console.log("Decoded token:", decode);
    res.send(`Welcome ${decode.username}, this is your profile`);
  } catch (error) {
    res.status(401).send("Unauthorized: Invalid or expired token");
  }
});


app.get("/user", async (req, res) => {
  try {
    const decode = jwt.verify(req.cookies.token, "shhhhh");
    console.log("Decoded token: here@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@22", decode);
    const users = await data.find();
    console.log("the users are", users);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("error while fetching the data");
    console.log("error is caught here");
  }
});

app.get("/")

app.listen("3000", (req, res) => {
  console.log("this is the port i am listening here!!!!!");
});
