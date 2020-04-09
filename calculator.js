// jshint eversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// body-parser package to load the information from the 'post' method within the 'form tag' and 'parse' it into a JSON object
app.use(bodyParser.urlencoded({extended: true}));

// what do users 'get' when they load page
app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});


app.get("/bmiCalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

// what happens (res) when users make a post request(req)
app.post("/", function(req,res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;
  // what gets sent ((response)res.send) back to user
  res.send("The result of your calculation is " + result);
});

app.post("/bmiCalculator", function(req,res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var bmi = weight / Math.pow(height,2);
  res.send("Your BMI is " + bmi);
})

// set up server on port 3000 for developing locally
app.listen(3000, function(){
  console.log("server started on port 3000");
});
