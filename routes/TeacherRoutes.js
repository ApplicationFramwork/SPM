const router = require("express").Router();
const Teacher = require("../models/Teacher");
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/teachers');
    },
    filename: function (req, file, cb) {

        console.log(file.originalname);
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        const fileExt = path.extname(file.originalname);
        const fileText = Date.now() + "-" + file.originalname + "-" + dd + "-" + mm + "-" + yyyy + fileExt;
        cb(null, fileText);
    }
})

var upload = multer({
    storage: storage
})

//add new Teacher
router.route("/add").post(upload.single('profile_Picture'), (req, res) => {

    const { teacher_ID, teacher_Name, email, NIC, allocated_Grade, description } = req.body;
    const profile_Picture = req.file.filename;

    const newTeacher = new Teacher({
        teacher_ID,
        teacher_Name,
        email,
        NIC,
        profile_Picture,
        allocated_Grade,
        description
    })

    newTeacher.save().then(() => {
        console.log("Teacher Added")
        res.json("Teacher Added")
    }).catch((err) => {
        console.log(err);
    })
})

//get all Teacher details
router.route("/GetAllTeacaher").get((req, res) => {
    Teacher.find({}).populate('subject', 'subject_ID subject_Name allocated_Grade description')
        .then((events => {
            res.json(events)
        })).catch((err) => {
            console.log(err)
        })
})

//get subjects details using subject id
router.route("/GetTeacher/:id").get((req, res) => {

    let teacherID = req.params.id;
    Teacher.findById(teacherID).populate('subject', 'subject_ID subject_Name allocated_Grade description')
        .then((subject) => {
            res.json(subject)
        }).catch((err) => {
            console.log(err);
        })

})

//delete the Subject
router.route("/Delete/:id").delete(async (req, res) => {

    let teacherID = req.params.id;

    await Teacher.findByIdAndDelete(teacherID)
        .then(() => {
            res.status(200).send({ status: "Teacher Deleted" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with deleting data" })
        })
})

module.exports = router;