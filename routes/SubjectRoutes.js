const router = require("express").Router();
const Subject = require("../models/Subject");

//add new subject
router.route("/add").post((req, res) => {

    const { subject_ID, subject_Name, allocated_Grade, description } = req.body;

    const newSubject = new Subject({
        subject_ID,
        subject_Name,
        allocated_Grade,
        description
    })

    newSubject.save().then(() => {
        res.json("Subject Added")
    }).catch((err) => {
        console.log(err);
    })
})

//get all subjects details
router.route("/GetAllSubjects").get((req, res) => {
    Subject.find().then((events => {
        res.json(events)
    })).catch((err) => {
        console.log(err)
    })
})

//get subjects details using subject id
router.route("/GetSubject/:id").get((req, res) => {

    let subjectID = req.params.id;
    Subject.findById(subjectID).then((subject) => {
        res.json(subject)
    }).catch((err) => {
        console.log(err);
    })

})

//delete the Subject
router.route("/Delete/:id").delete(async (req, res) => {

    let subjectID = req.params.id;

    await Subject.findByIdAndDelete(subjectID)
        .then(() => {
            res.status(200).send({ status: "Subject Deleted" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with deleting data" })
        })
})

module.exports = router;