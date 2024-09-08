const express = require("express");
const app = express();
const User = require("./Models/User");
const { default: mongoose } = require("mongoose");


app.use(express.json());


//  To get all Users
app.get("/admin/users/", async (req, res) => {
  const data = await User.find();
  res.status(200).json({ length: data.length, data });
});
// To get specific user
app.get("/admin/users/:name", async (req, res) => {
  const { name } = req.params;
  const data = await User.find({ name: name });
  res.status(200).json({ length: data.length, data });
});
// To create new user
app.post("/admin/users/", async (req, res) => {
  const { name, age } = req.body;
  const data = await User.create({ name: name, age: age });
  res.status(200).json({ length: data.length, data });
});
// To update user details by user n
app.post("/admin/user/:name", async (req, res) => {
  const { name } = req.params;
  const age = req.body.age;
  await User.updateMany({ name: name }, { $set: { name: name, age: age } });
  res.status(200).json({ msg: "post success" });
});

function connectDB() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Learn")
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB Error", err));
}

app.listen(3000, () => {
  console.log("Server Running at 3000");
  connectDB();
});
