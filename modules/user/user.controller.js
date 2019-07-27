const User = require('./user.model');
const UserRole = require('../userRole/userRole.model')
const UtilService = require('../../services/util.service');


module.exports = {
    async create(req, reply) {
        try {
            const doesEmailExist = await User.findOne({email:req.payload.email.toLowerCase()});
            const doesAdminExist = await User.findOne({role:'admin'});
            req.payload.role = req.payload.role.toLowerCase();
            //checks for duplicate email
            if(doesEmailExist != null){
                return reply.response({response_data:"Email already exists",response_code:400})
            }
            //make sure there may have only one admin
            if(doesAdminExist != null && req.payload.role != 'admin'){
                //if role except admin
                const user = new User(req.payload);
                //encrypting the password
                user.password = await UtilService.hashPassword(user.password);
                const saved=await user.save();
                //creates role instance and associating created user id
                const userRolePayload = new UserRole({role:req.payload.role,userId:saved._id})
                const roleRes = await userRolePayload.save();
                return reply.response({response_data:'User has been successfully registered.',response_code:200});
            }
            else if(doesAdminExist && req.payload.role == 'admin'){
                //if admin already exists and client requests to create admin
                return reply.response({response_data:"Admin already exists",response_code:200})
            }
            else{
                //first entry must be admin
                req.payload.role='admin'
                const user = new User(req.payload);
                user.password = await UtilService.hashPassword(user.password);
                //creates user instances along with userrole
                const saved=await user.save();
                const userRolePayload = new UserRole({role:'admin',userId:saved._id})
                const roleRes = await userRolePayload.save();
                return reply.response({response_data:'Admin has been successfully registered.',response_code:200});
            }
        }
        catch(err){
            if(err.code==11000){
                return reply.response({response_data:"email already exists.try with other email.",response_code:500})
            }
            return reply.response({response_data:"Error occur",response_code:500})
        }
    }
       
}

