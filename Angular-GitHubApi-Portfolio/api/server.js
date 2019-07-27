const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

    const taskRoute = require('./routes/task.route');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
        () => { console.log('Database is connected') },
        err => { console.log('Can not connect to the database' + err)}
    );
    var version=process.env.version || "1.3"

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use(express.static(path.join(__dirname,'../dist/angularGithubPortfolio')));

    app.get('/getversion', function(req,res){
        console.log('Version ' + version);
        res.status(200).json({version:version})
    });
    app.use('/task', taskRoute)
    
    app.use('/',function(req,res){
        res.sendFile(path.join(__dirname,'../dist/angularGithubPortfolio','index.html'))
    });
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });