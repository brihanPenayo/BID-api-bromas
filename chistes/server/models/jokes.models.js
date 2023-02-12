const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: true,
    },
    punchline: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
},
    { timestamps: true });

module.exports.Jokes = mongoose.model('jokes', jokeSchema);