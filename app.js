const express =require('express');
const app =express();
const mongoose = require('mongoose');
//const Players = require('./db/player')
// Coaches =require('./db/coache');
const path =require('path');
const playersRouter = require('./routes/players');
const userRouter=require('./routes/home');
const authSign =require('./routes/authSign');
const authLog =require('./routes/authLog');
const passport= require('passport');
//const loginRouter = require('./routes/auth');
app.use(express.json());
app.use(express.static(path.join(__dirname,'assets')));
app.use(express.static(path.join(__dirname,'images')));
app.use('/Players',playersRouter);
/*app.use('/',userRouter);*/
app.use('/SignUp',authSign);
app.use('/LogIn',authLog);
app.set('view engine','ejs');
app.set('views','views');
mongoose.connect('mongodb://localhost/arsenal')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


app.get('/',(req,res)=>{

 res.render('index');

});
app.get('/AboutUs',(req,res)=>{

    res.render('aboutUs');
   
   });
/*app.post ('/players',async(req,res)=>{

     let player = new Players({
      
         name:req.body.name,
         age:req.body.age,
         position:req.body.position,
         number:req.body.number
     });

    player= await player.save();
    res.send(player);


});
app.post ('/coaches',async(req,res)=>{

    let coache = new Coaches({
     
        name:req.body.name,
        age:req.body.age,
        position:req.body.position
       
    });

    coache= await coache.save();
   res.send(coache);


})

*/
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
