const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define collection and schema for product
let testsUser = new Schema({
    _id: {
        type: String
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    type: {
        type: String
    },
    status: {
        type: String
    },
    user: {
        type: String
    },
    imageType: {
        type: String
    },
    imageBase64: {
        type: String
    }
}, {
    collection: 'testsUser'
});


module.exports = mongoose.model('testsUser', testsUser);