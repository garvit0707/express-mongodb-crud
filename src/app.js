let express = require("express");
// let mongoose = require("mongoose");
let UserRoutes = require("./routes/user.routes") 

let app = express();

app.use(express.json());
app.use(UserRoutes);

// mongoose
//   .connect(mongo_db)
//   .then(() => {
//     console.log("✅ Mongodb connected successfully through mongoose");
//   })
//   .catch((err) => {
//     console.log("❌ error while connecting through mongodb", err);
//   });

// app.get("/", (req, res) => {
//   console.log("this is the home screen event trigerred by me at this point!!!");
//   res.send("THIS MESSAGE HAS TO COME TO THIS PAGE");
// });

// app.get("/u",(req,res)=>{
//   const data = {id: "1",name: "garvit",age: 45}
//   res.send(data)
// })

// const mongodb_schema = new mongoose.Schema({
//   name: { type: String, required: true },
//   age: { type: Number, min: 0 },
//   add: { type: String },
//   uniqueid: { type: Number, unique: true },
//   place: { type: String },
// });

// const Users = mongoose.model("User", mongodb_schema);

// app.post("/add-user", async (req, res) => {
//   try {
//     const existing_user = await Users.findOne({ uniqueid: req.body.uniqueid });
//     if (existing_user) {
//       return res
//         .status(409)
//         .send({
//           error: "User with this unique Id  already exists",
//           existing_user,
//         });
//     }
//     const newuser = new Users(req.body);
//     await newuser.save();
//     res
//       .status(201)
//       .send({ message: "Data saved in data bse succesfully!!!", newuser });
//   } catch (error) {
//     console.log("error has been caught here!!!");
//     res.status(500).send({ error: error.message });
//   }
// });

// app.post("/del-user", async (req, res) => {
//   try {
//     const { uniqueid } = req.body;
//     if (!uniqueid) {
//       return res.status(400).send({ error: error.message });
//     }
//     const deleteUser = await Users.deleteMany({ uniqueid });
//     res.status(200).send({ message: "User deleted successfully", deleteUser });
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// app.get("/user", async (req, res) => {
//   try {
//     const data = await Users.find();
//     res.status(201).send(data);
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// app.post("/update", async (req, res) => {
//   try {
//     const {uniqueid, ...updatedata} = req.body
//     console.log("the unique id and the unique data i have is here",uniqueid,updatedata)
//     if (!uniqueid){
//       return res.status(400).send({error:"uniqueid is required for updating user"})
//     }

//     const updated_User = await Users.findOneAndUpdate(
//       { uniqueid: uniqueid },
//       updatedata
//     )
//        // CHANGE 3: Check if user exists
//     if (!updated_User) {
//       return res.status(404).send({ 
//         error: "User with this uniqueid not found" 
//       });
//     }

//     res.status(200).send({message: "data has been updated succesfully",updated_User})
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//     console.log("error has been caught by me here!!");
//   }
// });

app.get("/test", (req, res) => {
  res.send("this is th test route i defined");
});
app.listen("3000", () => {
  console.log("the port is now open attt 30000");
});


module.exports = app;
