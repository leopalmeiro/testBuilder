const express = require('express');
const app = express();
const testRoutes = express.Router();



// Require Product model in our routes module
let TestsUser = require('../models/testsUser');



//method for find tests byUser
testRoutes.route('/testUser/').get(function(req, res) {
    console.log(req.query);
    let test = new TestsUser(req.query);
    console.log(test);
    TestsUser.find(test,
        function(err, tests) {
            if (err) {
                console.log(err);
            } else {
                console.log('return-->' + tests);
                res.json(tests);
            }
        });
});

//method for find tests by ID
testRoutes.route('/testUserById/').get(function(req, res) {
    console.log(req.query);

    let test = req.query;
    console.log(test);
    TestsUser.findById(test,
        function(err, tests) {
            if (err) {
                console.log(err);
            } else {
                console.log('return-->' + tests);
                res.json(tests);
            }
        });
});


module.exports = testRoutes;