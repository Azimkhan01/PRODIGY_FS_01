const {register} = require("../database/registeredUser");
const bcrypt = require("bcrypt");

const handleRegisteredUser = async (req,res)=>{
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    
let findDetails =await  register.find({email});






if(findDetails =="" || !findDetails || findDetails == null)
{
    const saltRounds = 10;
    const myPlaintextPassword = password;
    bcrypt.hash(myPlaintextPassword, saltRounds,async  function(err, hash) {
        let addUser = await register.create({username:username,email:email,password:hash});
        if(addUser)
            {
               res.render("register",{
                   error:"Registered"
               })
            }
    });
 
 
}
else{
    res.render("register",{
        error:"Email already registered"
    });
}
}

module.exports = {handleRegisteredUser};