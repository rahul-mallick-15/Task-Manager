const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:rahulAdmin@nodeexpressproject.0muk7k5.mongodb.net/task-manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
