const express = require('express');
const app = express();
const testRoutes = express.Router();



// Require Product model in our routes module
let TestsUser = require('../models/testsUser');



//method for find all tests byUser
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

//method for find test by ID
testRoutes.route('/testUserById/').get(function(req, res) {
    console.log(req.query);
    let test = new TestsUser(req.query);
    console.log(test);
    TestsUser.findById(test._id,
        function(err, tests) {
            if (err) {
                console.log(err);
            } else {
                console.log('return-->' + tests);
                res.json(tests);
            }
        });
});

//method for update test by ID
testRoutes.route('/updateTestByID/').put(function(req, res) {
    /*     console.log("request body" + JSON.stringify(req.body));
        console.log("request params" + JSON.stringify(req.params));
        console.log("request query" + JSON.stringify(req.query)); */

    let test = new TestsUser(req.body);

    console.log("TESTS" + JSON.stringify(test));
    TestsUser.findByIdAndUpdate(test._id, { $set: test }, { new: true },
        function(err, data) {
            if (err) {
                console.log(err);
                return next(err);

            } else {
                console.log('return: ok');
                res.json(data);
            }
        });
});



module.exports = testRoutes;