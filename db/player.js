const mongoose = require('mongoose');

const player = mongoose.model('player', new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    age: {
      type: String,
    },
    position: {
      type: String,
      required: true,
    },
    number:{

        type: String,
        required: true,

    },
    image:String
  }));
   
  
   
   
 let getAll= async()=>{
  try{
    return await player.find();
  }
  catch(ex){}
}



exports.g = getAll;
exports.p= player;
  
  