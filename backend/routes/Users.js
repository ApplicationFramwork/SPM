const router = require("express").Router();
const jwt = require("jsonwebtoken");
const Teacher = require('../models/Teacher');
const Student = require('../models/students');
const JWT_SECRET = 'dseiow985344he02-238hfsdy22@@@sdtjerltmdjdguot';
router.route("/login").post(async (req,res)=>{
   const {username,password,type} = req.body;
   let user;
   let token;

   if(type=="Teacher"){
      user = await Teacher.findOne({teacher_ID:username,NIC:password}).lean();
      if(user){
          token = jwt.sign({
                id : user._id,
              Name: user.firstName + user.lastName,
              email : user.email,
              type:'Teacher'
          },JWT_SECRET
          )
      }else{
          return res.json({status : 'error', error: 'Invalid username/password'});
      }
   }else{
       user = await Student.findOne({admissionNumber:username,firstName:password}).lean();
       if(user){
           token = jwt.sign({
                   id : user._id,
                   Name: user.firstName + " " + user.lastName,
                   email : user.email,
                   type:'Student'
               },JWT_SECRET
           )
       }else{
           return res.json({status : 'error', error: 'Invalid username/password'});
       }
   }

   if(token){
       return res.json({status : 'ok' , token : token})
   }


});
module.exports = router;