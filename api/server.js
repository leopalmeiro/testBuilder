const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./db');

// const routing
const loginRoute = require('./routes/login.route');
const testRoute = require('./routes/test.route');

//mongoConfiguration
mongoose.Promise = global.Promise;
mongoose.connect(config.db, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true, parameterLimit: 1000000 }));
app.use(cors());

//define Login service
app.use('/login', loginRoute);

//define test service
app.use('/test', testRoute);


const port = process.env.PORT || 4000;

const server = app.listen(port, function() {
    console.log('Listening on port ' + port);
});