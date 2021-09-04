const router = require("express").Router();
const jwt = require("jsonwebtoken");
const Teacher = require('../models/Teacher');
const Student = require('../models/students');
const JWT_SECRET = 'dseiow985344he02-238hfsdy22@@@sdtjerltmdjdguot';
router.route("/login").post(async (req,res)=>{
   const {Username,password,type} = req.body;
   let user;

   if(type=="Teacher"){
       console.log(Username + " " + password)
      user = await Teacher.findOne({teacher_ID:Username,NIC:password}).lean();
      if(!user){
          return res.json({status : 'error', error: 'Invalid username/password'});

      }else{
          let token = jwt.sign({
                  id : user._id,
                  Name: user.firstName + user.lastName,
                  email : user.email,
                  type:'Teacher'
              },JWT_SECRET
          )
          return res.json({status : 'ok' , token : token})
      }
   }else{
       user = await Student.findOne({admissionNumber:Username,firstName:password}).lean();
       if(user){
           let token = jwt.sign({
                   id : user._id,
                   Name: user.firstName + " " + user.lastName,
                   email : user.email,
                   type:'Student'
               },JWT_SECRET
           )
           return res.json({status : 'ok' , token : token})
       }else{
           return res.json({status : 'error', error: 'Invalid username/password'});
       }
   }
});
module.exports = router;