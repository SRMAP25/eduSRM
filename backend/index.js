const mongoose = require("mongoose");
const express = require("express");
const app = express();

function connectDB() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/learn")
    .then(() => console.log("DataBase Connected"))
    .catch((err) => console.log("Error:", err));
}
