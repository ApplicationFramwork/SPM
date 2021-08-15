const router = require("express").Router();
const Attendance = require("../models/attendance");

//Add new attendance
router.route("/mark").post((req, res) => {
    const {StudentId,status,className} = req.body;
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const date = year + "/" + month + "/" + day;
    const newAttendance = new Attendance({
        StudentId,
        date,
        status,
        className
    });
    newAttendance.save().then(() =>{
        res.status(200).send({status: "Attendance Added!"});
    })
})

//view all attendance
router.route("/").get((req, res) => {
    Attendance.find().then((Attendance) =>{
        res.json(Attendance);
    }).catch((err)=>{
        console.log(err);
    })
})

//Search Attendance by ClassName
router.route("/:className").get((req, res) => {
    let className = req.params.className;
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const date = year + "/" + month + "/" + day;

    Attendance.find({className:className, date:date}).then((Attendance) =>{
        res.json(Attendance);
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports = router;
