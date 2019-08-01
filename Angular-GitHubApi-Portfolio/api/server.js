const express = require('express'),
// const dotenv = require('dotenv'),
    dotenv = require('dotenv').config(),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    
    config = require('./DB');
    

    const taskRoute = require('./routes/task.route');
    mongoose.Promise = global.Promise;
    // `mongodb://task-manager-user-001:E88Z2exnb5u3BwM@ds231377.mlab.com:31377/task-manager-db`, `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds231377.mlab.com:31377/task-manager-db`
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
        () => { console.log('Database is connected') },
        err => { console.log('Can not connect to the database' + err)}
    );
    var version=process.env.version || "1.3"

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.get('/getversion', function(req,res){
        console.log('Version ' + version);
        res.status(200).json({version:version})
    });
    app.use('/task', taskRoute)
    
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });