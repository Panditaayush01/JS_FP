const mongoose = require('mongoose');

// Our schema
const SermonSchema = new mongoose.Schema({
    sermon: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateOfPublish: {
        type: Date,
        default: new Date(),
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Sermon', SermonSchema);