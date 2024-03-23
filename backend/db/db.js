const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false); // Disables strict mode for queries
    await mongoose.connect(process.env.MONGODB_URL); // Connects to the MongoDB database
    console.log("DB is Connected"); // Logs a success message if the connection is successful
  } catch (error) {
    console.error("DB Connection Error:"); // Logs an error message if there's an error connecting to the database
  }
};

module.exports = {db};
