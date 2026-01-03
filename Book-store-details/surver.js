const express = require("express");
const db = require("./config/db");
const bookmodel = require("./model/bookmodel");

const app = express();
app.use(express.json());


app.post("/insertData", async (req, res) => {
  const data = await bookmodel.create(req.body);
  res.send(data);
});


app.get("/", async (req, res) => {
  const data = await bookmodel.find({});
  res.send(data);
});


app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await bookmodel.findByIdAndDelete(id);
  res.send("delete successfully");
});


app.patch("/:id", async (req, res) => {
  const id = req.params.id;
  await bookmodel.findByIdAndUpdate(id, req.body);
  res.send("updated successfully");
});

app.listen(8897, () => {
  console.log("Server running on port 8897");
});
