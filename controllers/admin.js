const User = require('../models/user')

exports.postAddUser = async (req,res,next) => {
    try{ 
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const data = await User.create({
            name : name,
            email: email,
            phone: phone
        })
        res.json({userData: data});

        
    }catch(err){
        res.json({Err: err})

    }
}

exports.getDetails =async (req,res,next)=> {
    try{
        const data = await User.findAll()
        res.json({userData: data})

    }catch(err){
        res.json({Err: err})
    }


}


exports.getEditUser = (req,res,next) => { 

};


exports.postEditUser = (req,res,next) => { 

};


exports.postDeleteUser = async (req,res,next) => { 
    try{
        
        const userId=req.params.userId
        const resp= await User.destroy({where: {id : userId}})
        res.status(204).json({resp});
        
        console.log("user deleted");


    }catch(err){
        console.log("ERR: BE_controller_admin.js postdeleteUser")
        res.json({Err: err})
    }

};