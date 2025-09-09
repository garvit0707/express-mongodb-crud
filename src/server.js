const app = require("./app")
// const connectDB = require("./config/Db");
require("dotenv").config()

connectDB();

const PORT = process.env.PORT || 4000;
// console.log("Port value i have is here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",PORT)
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
