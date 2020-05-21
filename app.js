var express = require("express");
var path = require("path");
var app = express();

var port_number = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port_number, function () {
  console.log("server listening");
});
