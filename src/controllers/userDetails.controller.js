const user_details = require("../models/userDetails.model");


exports.adddata = async (req, res) => {
  try {
    const find_data = await user_details.find({key : req.body.key})
    if (find_data){
        res.status(200).send({error: "it has the dublicate value , try another value to save"})
    };
    const newdata = new user_details(req.body);
    await newdata.save();
    res.status(200).send(newdata)
  } catch (error) {
    console.log("error has been caught here!!!");
    res.status(402).send({ error: error.message });
  }
};


exports.getdata = async(req,res) =>{
    try {
       const data =  await user_details.find()
        res.status(201).send({message:"data is found here",data})
    } catch (error) {
         console.log("error has been caught here!!!");
    res.status(402).send({ error: error.message });
    }
}