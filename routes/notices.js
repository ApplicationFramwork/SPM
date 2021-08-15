const router = require("express").Router();
let Notices = require("../models/Notices");
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads');
    },
    filename:function(req,file,cb){

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
    storage : storage
})

//add a new Notice
router.route("/addNotices").post(upload.single('image'),(req,res)=>{
    const image = req.file.filename;
    const title = req.body.title;
    const description = req.body.description;
    const newNotice = new Notices({
        image,
        title,
        description,
    })
    newNotice.save().then(() =>{
        res.json("Notice Added Successfully")
    }).catch((err)=>{
        console.log(err);
    })
})
//get all Notices
router.route("/allNotices").get((req,res)=>{
    Notices.find().then((notices =>{
        res.json(notices)
    })).catch((err)=>{
        console.log(err)
    })
})
//update notices
router.route("/updateNotice/:id").put(upload.single('image'),async (req, res)=>{
    let noticeId = req.params.id;
    const {image,title, description} = req.body;
    const updateNotice = {
        image,
        title,
        description
    }
    const update = await Notices.findByIdAndUpdate(noticeId, updateNotice ).then(()=> {
        res.status(200).send({status: "Notice Updated Successfully"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})
//delete Notices
router.route("/delete/:id").delete(async (req, res)=>{
    let noticeId= req.params.id;
    await Notices.findByIdAndDelete(noticeId).then(()=>{
        res.status(200).send({status: "Notice Deleted Successfully"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete ", noticeerror: err.message});
    })
})

module.exports = router;