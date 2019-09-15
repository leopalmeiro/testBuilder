const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define collection and schema for product
let login = new Schema({
    _id: {
        type: String
    },
    user: {
        type: String
    },
    pass: {
        type: String
    }
}, {
    collection: 'logins'
});


module.exports = mongoose.model('logins', login);