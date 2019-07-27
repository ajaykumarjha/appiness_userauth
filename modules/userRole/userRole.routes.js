const UserController = require('./user.controller');
const Joi = require('joi');
module.exports = [
    //Not using this endpoint
    {
        path: '/userroless/signup',
        method: 'POST',
        config: {
            handler: UserController.create,
            validate: {
                payload: Joi.object().keys({
                    role            : Joi.string().required(),
                    userId          : Joi.string().required()
                }),
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover()
                },
            },
            description: 'user role can create new account(not used)',
            tags: ['api','user'],
            notes: 'Returns a user role response',
            auth: false
        }
    }
];
