const mongoose = require('mongoose');

const schema = mongoose.schema;

const teacherSchema = new mongoose.Schema({

    teacher_ID: {
        type: String,
        required: true
    },
    teacher_Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    NIC: {
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
    },
    allocated_Subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Subject'
    }]

})

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;