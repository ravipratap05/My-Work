const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/rented-bikes");
  console.log("DB Connected");
}

const userSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
  category: String,
  day: String,
  streetAddress: String,
  country: String,
  contact: String,
  city: String,
  province: String,
  zip: String,
});
const User = mongoose.model("User", userSchema);

const server = express();
let port = 8080;

server.use(cors());
server.use(bodyParser.json());

server.get("/submit", (req, res) => {
  res.send("submitted");
});

server.post("/", async (req, res) => {
  let user = new User();
  user.fName = req.body.fName;
  user.lName = req.body.lName;
  user.email = req.body.email;
  user.category = req.body.category;
  user.day = req.body.day;
  user.contact = req.body.contact;
  user.country = req.body.country;
  user.streetAddress = req.body.streetAddress;
  user.city = req.body.city;
  user.region = req.body.region;
  user.postalCode = req.body.postalCode;

  const doc = await user.save();

  //   console.log(doc);
  //   res.json(doc);
});

server.listen(port, () => {
  console.log("server started");
});
