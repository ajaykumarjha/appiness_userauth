var mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserRoleSchema = new Schema({
    role:{
        type: String
    }, 
    userId:{
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt:{
        type: Number,
        default:Date.now()
    },
    updatedAt:{
        type: Number,
        default:Date.now()
    },
    },{
    versionKey: false 
});
module.exports = mongoose.model('UserRole', UserRoleSchema);