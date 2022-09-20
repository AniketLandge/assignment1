const Joi = require('joi');

module.exports = async (req, res, next) => {
    try {
        const data = req.body;
        const schema = Joi.object().keys({
            userId: Joi.string().required(),
            fromDate: Joi.string().required(),
            toDate: Joi.string().required(),
        });
        const result = schema.validate(data);
        if (result.error) {
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                data: data,
            });
        } else {
            next();
        }
    } catch (error) {
        console.log('error in event validation file', error);
    }
};
