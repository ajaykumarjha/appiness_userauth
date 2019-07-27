const UserController = require('./user.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/users/signup',
        method: 'POST',
        config: {
            handler: UserController.create,
            validate: {
                payload: Joi.object().keys({
                    firstName       : Joi.string().required(),
                    lastName        : Joi.string().required(),
                    email           : Joi.string().lowercase().email().required(),
                    password        : Joi.string().required(),
                    mobileNumber    : Joi.string().required(),
                    DOB             : Joi.string().required(),
                    role            : Joi.string().required()
                }),
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover()
                },
            },
            description: 'user can create new Account(not used)',
            tags: ['api','user'],
            notes: 'Returns a signup response',
            auth: false
        }
    }
];
