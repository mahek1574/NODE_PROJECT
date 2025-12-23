const express = require("express");
const app = express();


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));



let student = [
  { id: 1, name: "Riya" },
  { id: 2, name: "riyaa" },
];


app.get("/", (req, res) => {
  res.render("Form", { student });
});


app.post("/insertData", (req, res) => {
  const id = Number(req.body.id);
  const name = req.body.name;


  const exists = student.find((el) => el.id === id);
  if (!exists) {
    student.push({ id, name });
  }

  res.redirect("/");
});

app.get("/delete", (req, res) => {
  const id = Number(req.query.id);
  student = student.filter((el) => el.id !== id);
  res.redirect("/");
});


app.get("/edit", (req, res) => {
  const id = Number(req.query.id);
  const data = student.find((el) => el.id === id);
  res.render("edit", { editvalue: data });
});


app.post("/editData", (req, res) => {
  const id = Number(req.body.id);
  const name = req.body.name;

  const index = student.findIndex((el) => el.id === id);
  if (index !== -1) {
    student[index].name = name;
  }

  res.redirect("/");
});

app.listen(7000, () => {
  console.log("Server on port 7000");
});
