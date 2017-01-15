var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Server listening on port " + port);
})

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
