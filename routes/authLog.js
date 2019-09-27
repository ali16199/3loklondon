const express= require('express');
const router =express();
const bodyparser =require('body-parser');
const userController = require('../controller/user.controller');

router.get('/',(req,res)=>{
      
    
    res.render('login');
   
   });

router.post('/',
   bodyparser.urlencoded({extended:true}),
   userController.postLogin
      );

module.exports=router;