const express = require("express");
const parse = require("csv-parse");
const fs = require("fs");

const app = express();
app.set("view engine","hbs");

let data = fs.readFileSync('./India.csv');

parse(data.toString(),(err,output)=>{
    console.log(output);
});

app.get('/',(req,res)=>{
    res.send("Express started");
});



app.listen(3000, ()=>{
    console.log("Staring on port 3000");
});



