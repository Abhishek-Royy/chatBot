const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const connectLink = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connection Successfull with: ${connectLink.connection.host}`.bgBlue.white
    );
  } catch (error) {
    console.log("Failed to connect with DB".bgRed.white, error);
    process.exit(1);
  }
};

module.exports = connectDB;
