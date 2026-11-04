var express = require("express"); // Requires the Express module
var cors = require("cors")
// Calls the express function to start a new Express application
var app = express();
app.use(cors());

var names = [
    {firstName: "Mark", lastName:"Jones"},
    {firstName: "Alan", lastName:"Turing"},
    {firstName: "Ada", lastName:"Lovelace"},
    {firstName: "Charles", lastName:"Babbage"},
]

app.get("/names", function(request, response) { 
    response.json(names);
});

app.use(function(request, response) {
    response.status(404).send("Page not found!");
});

app.listen(3000, function() {
    console.log("App started on port 3000");
});