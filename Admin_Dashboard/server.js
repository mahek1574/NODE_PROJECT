const express = require("express")
const app = express();

app.set("view engine","ejs");
app.use("/",express.static("public"));





app.get("/", (req, res) => {
  res.render("index");
});


app.get("/contact",(req,res)=>{
  res.send("contact")
})
app.listen(6878, () => {
  console.log("server started on 6878");
});