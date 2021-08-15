const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LectureSlideSchema = new Schema({

    subject_ID: {
        type: String,
        required: true
    },
    Lesson_Topic: {
        type: String,
        required: true
    },
    Lesson_Description: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    }
})

const lectureslides = mongoose.model("LectureSlides", LectureSlideSchema);

module.exports = lectureslides;