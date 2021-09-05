const mongoose = require('mongoose');

const MarksSchema = new mongoose.Schema({
    StudentId :{
        type: String,
        required:true
    },
    Name : {
        type : String,
        required: true,
    },
    Grade : {
        type : String,
        required : true
    },
    Term : {
        type : String,
        required : true
    },
    status :{
        type : String,
        required : true
    },
    Marks : {marks:[]}
});

const Marks = mongoose.model("attendance",MarksSchema);

module.exports = Marks;