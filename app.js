var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

var thoughts = [
  {text: "First thought", time: "First time"},
  {text: "Second thought", time: "Second time"}
];

app.use(express.static(__dirname + "/public"));

// JSON.stringify turns a Javascript object into JSON text and stores that JSON text in a string.
app.get("/thoughts", function(request, response){
  response.type("json");
  response.end(JSON.stringify({thoughts:thoughts}));
});

app.post("/thoughts", function(request, response){
  var newThought = {text: request.body.thought, time: new Date().getTime()};
thoughts.push(newThought);
response.type("json");
response.end(JSON.stringify(newThought));
});

var server = app.listen(8080);