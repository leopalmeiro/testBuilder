const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define collection and schema for product
let testsUser = new Schema({
    _id: {
        type: Schema.Types.ObjectId
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
    },
    questions: [{
        questionsId: {
            type: Number
        },
        questionText: {
            type: String
        },

        order: {
            type: Number
        },
        imageType: {
            type: String
        },

        imageBase64: {
            type: String
        },
        audioType: {
            type: String
        },
        audioBase64: {
            type: String
        },
        isAnswered: {
            type: Boolean
        },
        answers: [{
            answerId: {
                type: Number
            },

            answer: {
                type: String
            },
            isCorrect: {
                type: Boolean
            },
            isSelected: {
                type: Boolean
            }

        }],

    }],
}, {
    collection: 'testsUser'
});


module.exports = mongoose.model('testsUser', testsUser);