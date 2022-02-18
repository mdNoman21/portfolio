const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-noman:Test123@cluster0.0r0mj.mongodb.net/contactDB");
const contactSchema = {
    name:String,
    email: String,
    number: String,
    comment:String
  };

  const Contact = mongoose.model("Contact",contactSchema);
app.get("/", function(req, res){
    res.render("home");
});
app.get("/contact", function(req, res){
    res.render("contact");
});
app.post("/",function(req,res){
 const contact = new Contact({
    name:req.body.name,
    email: req.body.email,
    number: req.body.number,
    comment:req.body.comment
 });
 contact.save(function(err){
    if(!err){
 res.redirect("/");
    }
  });
});



app.listen(3000,function(err){
    if(!err){
        console.log("Server Listening on port 3000");
    }
});