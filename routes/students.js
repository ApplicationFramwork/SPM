const router = require("express").Router();
let Students = require("../models/Students");
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
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

//add a new Student
router.route("/addStudents").post(upload.single('image'), (req, res) => {
    const image = req.file.filename;
    const admissionNumber = req.body.admissionNumber;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const section = req.body.section;
    const className = req.body.className;
    const gender = req.body.gender;
    const dateOfBirth = req.body.dateOfBirth;
    const mobileNumber = req.body.mobileNumber;
    const email = req.body.email;
    const address = req.body.address;
    const guardianName = req.body.guardianName;
    const guardianRelationship = req.body.guardianRelationship;
    const guardianMobileNumber = req.body.guardianMobileNumber;
    const guardianEmail = req.body.guardianEmail;

    const newStudent = new Students({
        image,
        admissionNumber,
        firstName,
        lastName,
        section,
        className,
        gender,
        dateOfBirth,
        mobileNumber,
        email,
        address,
        guardianName,
        guardianRelationship,
        guardianMobileNumber,
        guardianEmail
    })
    newStudent.save().then(() => {
        res.json("Student Added Successfully")
    }).catch((err) => {
        console.log(err);
    })
})
//get all students
router.route("/allStudents").get((req, res) => {
    Students.find().then((students => {
        res.json(students)
    })).catch((err) => {
        console.log(err)
    })
})
//delete Student
router.route("/delete/:id").delete(async (req, res) => {
    let studentId = req.params.id;
    await Students.findByIdAndDelete(studentId).then(() => {
        res.status(200).send({ status: "Student Deleted Successfully" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete ", studenterror: err.message });
    })
})

/////////////////////////////////////////////////////////////////////////////////////////////
// get student using section number
router.route("/getpStudentUsingSection/:SectionNumber").get((req, res) => {

    let SectionNumber = req.params.SectionNumber;

    Students.find({ section: SectionNumber }).then((Students) => {
        res.json(Students)
    }).catch((err) => {
        console.log(err);
    })
})

///maleesha
///////////////////////////////////////////////////////////////////////////////////////////////
router.route("/getStudentsByClassName/:className" +
    "").get(async (req, res) => {
        const className = req.params.className;
        Students.find({ className }).then((Students) => {
            res.json(Students)
        }).catch((err) => {
            console.log(err);
        })
    })
/////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;