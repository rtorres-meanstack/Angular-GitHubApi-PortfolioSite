const express = require('express'),
// const dotenv = require('dotenv'),
    dotenv = require('dotenv').config(),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');
    
    /// Serve only the static files form the dist directory    
    app.use(express.static(__dirname + '/dist'));

    app.get('/*', function(req,res) {  
        res.sendFile(path.join(__dirname+'/dist/index.html'));   
    }); 

    const taskRoute = require('./routes/task.route');
    mongoose.Promise = global.Promise;

    // mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/task", { useNewUrlParser: true }).then(
    mongoose.connect(config.DB || "mongodb://localhost:27017/task", { useNewUrlParser: true }).then(
        () => { console.log('Database is connected') },
        err => { console.log('Can not connect to the database' + err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/task', taskRoute)
    
    const port = process.env.PORT || 8080;

    const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });