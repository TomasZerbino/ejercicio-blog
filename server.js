const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res){
    res.send("holaaaaa");
})

app.listen(3000, function () {
    console.log("http://localhost:3000");
})