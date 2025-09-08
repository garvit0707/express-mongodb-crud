// let express = require("express");
// let app = express();
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// var jwt = require('jsonwebtoken');
// const cookieParser = require("cookie-parser") 
// app.use(express.json()) 
// app.use(cookieParser())
// app.get("/", (req,res)=>{
//   // res.send("this is the initial route")
//   var token = jwt.sign({ "email": 'garvit@gmail.com' }, 'secret_key');
//   res.cookie("toke",token);
//   res.send("Done")
//   console.log("token_is_the",token)
// });

// app.get("/user",(req,res)=>{
//   // bcrypt.genSalt(saltRounds, function(err, salt) {
//   //     bcrypt.hash("garvit@gmail.com", salt, function(err, hash) {
//   //         // Store hash in your password DB.
//   //     });
//   // });
//   let data = jwt.verify(req.cookies.token,"secret_key")
//   console.log(data)
//   res.send(data)
// });

// app.get("/test",(req,res)=>{
//   res.send("this is the testing route here ")
// });

// app.listen("3000",()=>{
//   console.log("the port is running at 3000")  
// }
// )

const express = require("express");
var jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const bcrypt = require("bcrypt");


let app = express()
app.use(express.json())

app.use(cookieParser())
app.get("/",(req,res)=>{
  res.send("the project is running live")
});


app.get("/create",(req,res)=>{
  var token = jwt.sign({ useremail: 'ashutosh@gmail.com' }, 'shhhhh');
  res.cookie("token_by_default",token);
  res.send("creation of token takes places",token)
  console.log(token)
});


app.get("/getting",(req,res)=>{
  console.log("res is her",req.cookies)
  var decoded = jwt.verify(req.cookies.token_by_default, 'shhhhh');
  console.log(decoded.useremail, decoded) // bar
  res.send("this is the getting route decrypting of token doen here!!!")

});

app.listen("300",(req,res)=>{
  console.log("the port is running at 300");
});
