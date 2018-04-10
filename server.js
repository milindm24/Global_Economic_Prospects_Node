const express = require("express");
const path = require("path");
const http = require('http');
const hbs = require('hbs');
const parse = require("csv-parse");
const fs = require("fs");
const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(__dirname + "/public"));

//  var server = http.createServer(app);

// app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine","hbs");
let data = fs.readFileSync(path.join(__dirname, 'public', 'CSV' , 'India.csv'));

parse(data.toString(),(err,output)=>{
    app.get('/',(req,res)=>{
        res.render('index.hbs',{
            output
        });
    });
});







app.listen(3000, ()=>{
    console.log("Staring on port 3000");
});



