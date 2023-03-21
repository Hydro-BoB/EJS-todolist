//jshint esversion:6

const express = require('express')
const bodyParser = require("body-parser")

const date = require(__dirname + "/date.js");

console.log(date.getDate());
console.log(date.getDay());

let day = date.getDate();


const app = express();

let items = ["Buy food" , "Cook food" , "Eat food"] 
let workItems =[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const port = 3003;

app.get('/', function (req, res) {

    
   
   
    res.render("list", {
        listTitle: day,
        newListItems: items
    });
})

app.post("/", function(req,res){
    let item = req.body.newItem;

    console.log(req.body)
    if(req.body.value === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    }
    else
        items.push(item);
        res.redirect("/");


    items.push(item);

    res.redirect("/");
})

app.get("/work", function(req,res){ //template
    res.render("list",{listTitle:"Work List", newListItems: workItems});
})

app.get("/about", function (req,res) {
    res.render("about");
})

app.post("/work", function(req,res){
    let item =res.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})


app.listen(port, function () {
    console.log("server is working in port "+port);
})