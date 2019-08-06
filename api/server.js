const express = require('express'),
// const dotenv = require('dotenv'),

const http = require('http');
const path = require('path');
const app = express();

dotenv = require('dotenv').config(),
// var path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./DB');

// Serve only the static files from the dist directory
// app.use(express.static(__dirname + '/dist'));
// app.get('/', (req, res) => {
// res.sendFile(path.join(__dirname, '/dist/index.html'));
// });

app.use(express.static(path.join(__dirname, '/dist/')));
app.get("/", function(req, res) {
res.sendFile(path.join(__dirname + "/dist/"));
});

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

const taskRoute = require('./routes/task.route');
mongoose.Promise = global.Promise;

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/task", { useNewUrlParser: true }).then(
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/tasks", { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err)}
);


app.use(bodyParser.json());
app.use(cors());

app.use('/task', taskRoute)

const port = process.env.PORT || 8080;

app.set(port);
const server = http.createServer(app);

const server = app.listen(port, () => {
    console.log('Listening on port ' + port);
});