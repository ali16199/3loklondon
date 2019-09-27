const express= require('express');
const router =express();
const bodyparser =require('body-parser');
const userController = require('../controller/user.controller');

router.get('/',(req,res)=>{
      
    
    res.render('signup');
   
   });

router.post('/',
   bodyparser.urlencoded({extended:true}),
   userController.postSignup
      );

module.exports=router;