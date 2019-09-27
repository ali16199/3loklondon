const userModel =require('../db/users');

exports.postLogin=async(req,res)=>{

   await userModel.checkUser(req.body);
   res.redirect('/');
}
exports.postSignup=async(req,res)=>{
   
   await userModel.createNewUser(req.body);
res.redirect('/');
}
/*exports.Add=async(req,res)=>{

await userModel.insertUser(req.body);
res.render('index')
}
*/