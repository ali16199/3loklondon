const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 /* name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },*/
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  }
});

const User = mongoose.model('User', userSchema);

exports.createNewUser = async(n)=>{

  try{

  const notvaild= await User.findOne({email:n.email});
  if(!notvaild){
  
  const user = new User({

    email : n.email,
    password :String( n.password)
   
    
        });
        console.log(user);
     return  await user.save();
   }
  
}
 
  catch(ex){
    
    
    console.log("aready taken");
    return new Promise ((resolve,reject)=>{

        reject("email used");
    }
   )
    
  }
}

exports.checkUser = async(n)=>{
  
  const user= await User.findOne({email:n.email});
  console.log(user);
  console.log(n);
  try{
    if(!user){
    return new Promise ((resolve,reject)=>{
      console.log(n);
      reject("email or password wrong");
  });  
  }
 
  
  if(!String.toString(n.password)==user.password){
 console.log(n);
    return new Promise ((resolve,reject)=>{
      console.log('wp')
      reject("email or password wrong");
  });  
}
  /*return new Promise ((resolve,reject)=>{
    console.log('ok');
    
    resolve("Welcome :) ");

  });*/
  }
  catch(ex){
    console.log(ex);
  }
}
   
  

 



exports.User = User; 