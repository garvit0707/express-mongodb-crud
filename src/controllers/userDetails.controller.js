const user_details = require("../models/userDetails.model");


exports.adddata = async (req, res) => {
  try {
   
    const existing = await user_details.findOne({ key: req.body.key });

    if (existing) {
      return res
        .status(400) 
        .send({ error: "Duplicate value: this key already exists. Try another value." });
    }

    const newdata = new user_details(req.body);
    await newdata.save();

    res.status(201).send(newdata);
  } catch (error) {
    console.error("❌ Error caught in adddata:", error.message);
    res.status(500).send({ error: error.message });
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



// this is the dynamic routing i have created or done from my side 
exports.getuniquedata = async(req, res) =>{
    try {
        const unname = req.params.unique
        const data = await user_details.find({uniquename: unname})
        res.status(200).send({message:"data is found here",data})
        console.log(data)

    } catch (error) {
         console.log("error has been caught here!!!");
    res.status(402).send({ error: error.message });
    }

}