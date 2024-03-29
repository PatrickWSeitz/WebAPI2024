var express = require("express");
var app = express();
var router = express.Router();
var path = require('path');

//var num = 6 * 6;

//console.log(num);

//example of staic route
app.use(express.static(__dirname+'/pages'));

// JavaScript for a route

app.get('/',function(req,res){
    //res.send("here would be the page from the route");
    res.sendFile(path.join(__dirname+ "/pages/index.html"));
});

app.get('/About',function(req,res){
    //res.send("here would be the page from the route");
    res.sendFile(path.join(__dirname+ "/pages/About.html"));
});

app.get('/Contact',function(req,res){
    //res.send("here would be the page from the route");
    res.sendFile(path.join(__dirname+ "/pages/Contact.html"));
});

app.listen(3000, function(){
    console.log("Running on port 3000");
})