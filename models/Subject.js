const mongoose = require('mongoose');

const schema = mongoose.schema;

const subjectSchema = new mongoose.Schema({

    subject_ID: {
        type: String,
        required: true
    },
    subject_Name: {
        type: String,
        required: true
    },
    allocated_Grade: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;