const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required().trim().min(1).max(200),
    country: Joi.string().required().trim().min(2).max(100),
    city: Joi.string().required().trim().min(1).max(100),
    coordinates: Joi.object({
        lat: Joi.number().required().min(-90).max(90),
        long: Joi.number().required().min(-180).max(180)
    }).required()
});

module.exports = {
    schema
}

