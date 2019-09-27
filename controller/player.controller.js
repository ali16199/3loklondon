const express =require('express');
let dbModel = require('../db/player');
const {g, p} = require('../db/player');

exports.getPlayers= async (req,res,next)=>{
    
    
  let p =  await g() ;
    
     res.render('players',{

        players:p
     });
   
     
   
    }