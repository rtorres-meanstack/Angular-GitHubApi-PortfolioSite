var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var TASKS_COLLECTION = "tasks";

var app = express();
app.use(bodyParser.json());

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/tasks", function (err, client) {
    if(err){
        console.log(err);
        process.exit(1);
    }

    db = client.db();
    console.log("Databse connection ready");

    var server = app.listen(process.env.PORT || 8080, function() {
        var port = server.address().port;
        console.log("App now running on  port", port);
    });
});

function handleError(res, reason, message, code) {
    console.log("Error: " + reason);
    res.status(code || 500).json({"error": message});
}

app.get("/api/tasks", function(req, res) {
    db.collection(TASKS_COLLECTION).find({}).toArray(function(err, docs){
        if(err){
            handleError(res, err.message, "Failed to get contacts.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.post("/api/tasks", function(req, res){
    var newContact = req.body;
    newContact.createDate = new Date();

    if (!req.body.name){
        handleError(res, "Invalid user input", "MUst provide a name.", 400);
    } else {
        db.collection(TASKS_COLLECTION).insertOne(newContact, function(err, doc) {
            if (err) {
                handleError(res, err.message, "Failed to create new task.");
            } else {
                res.status(201).json(doc.ops[0]);
            }
        });
    }
});
app.get("/api/tasks/:id", function(req, res){
});
app.put("/api/tasks/:id", function(req, res){
});
app.delete("/api/tasks/:id", function(req, res){
});



// app.get("/api/tasks", function(req, res) {
// });

// app.post("/api/tasks", function(req, res){
// });
// app.get("/api/tasks/:id", function(req, res){
// });
// app.put("/api/tasks/:id", function(req, res){
// });
// app.delete("/api/tasks/:id", function(req, res){
// });