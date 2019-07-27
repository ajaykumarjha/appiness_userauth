const userRole = require('./userRole.model');

module.exports = {
    //Not using this api
    async create(req, reply) {
        try {
            const isExist = await userRole.findOne({role:"admin"});
            if(isExist){
                return reply.response({response_data:"admin already exists",response_code:200})
            }
            else{
                const userrole = new userRole(req.payload);
                const saved=await userrole.save();
                return reply.response({response_data:'Role has been saved successfully.',response_code:200});
            }
        }
        catch(err){
            if(err.code==11000){
                return reply.response({response_data:"role already exists.try with other email.",response_code:500})
            }
            return reply.response({response_data:"Error occur",response_code:500})
        }
    }
       
}

