const EventService = require('../services/event-service');
const UserAuth = require('./middlewares/auth');
const EventValidation = require('./middlewares/eventValidation');

module.exports = (app) => {
    const service = new EventService();

    app.post('/events', UserAuth, EventValidation, async (req, res, next) => {
        try {
            //getting user id from api header
            //change it as you want
            const { userId, fromDate, toDate } = req.body;
            const resp = await service.getEvent({ userId, fromDate, toDate });
            return res.json(resp);
        } catch (err) {
            next(err);
        }
    });
};
