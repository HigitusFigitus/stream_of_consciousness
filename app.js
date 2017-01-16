var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/thoughts");

var thoughtSchema = new mongoose.Schema({
    text: String
});

var Thought = mongoose.model("Thought", thoughtSchema);

app.use(express.static(__dirname + "/public"));

app.get("/thoughts", function(request, response){
  Thought.find(function(err, thoughts){
    if (err) return console.error(err);
    console.log(thoughts);
    response.type("json");
    response.end(JSON.stringify({thoughts:thoughts}));
  });
});

app.post("/thoughts", function(request, response){
  var newThought = new Thought({text: request.body.thought});
    newThought.save();
});

var server = app.listen(8080);
