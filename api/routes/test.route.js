const express = require('express');
const app = express();
const testRoutes = express.Router();



// Require Product model in our routes module
let TestsUser = require('../models/testsUser');


// Defined get data FindAll
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


module.exports = testRoutes;