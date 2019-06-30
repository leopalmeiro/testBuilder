const express = require('express');
const app = express();
const loginRoutes = express.Router();


// Require Product model in our routes module
let Login = require('../models/login');


// Defined get data FindAll
loginRoutes.route('/findAll').get(function(req, res) {
    Login.find(function(err, logins) {
        if (err) {
            console.log(err);
        } else {
            res.json(logins);
        }
    });
});


// Defined get data findByUser
loginRoutes.route('/findOne/').get(function(req, res) {
    console.log(req.query);
    let login = new Login(req.query);
    console.log(login);
    Login.findOne(login, function(err, logins) {
        if (err) {
            console.log(err);
        } else {
            console.log('return-->' + logins);
            res.json(logins);

        }
    });
});

module.exports = loginRoutes;