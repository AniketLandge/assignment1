const eventsList = require('../data/data');

class EventService {
    async getEvent({ userId, fromDate, toDate }) {
        try {
            const eventsListReplica = eventsList;
            const userEventsList = eventsListReplica.filter((events) => {
                let eventDate = new Date(events.date);
                const start = new Date(fromDate);
                const end = new Date(toDate);
                if (
                    events.user_id == userId &&
                    eventDate >= start &&
                    eventDate <= end
                ) {
                    console.log('✅ date is between the 2 dates');
                    return events;
                }
            });
            return userEventsList;
        } catch (error) {
            console.log('error in getEvent function', error);
        }
    }
}

module.exports = EventService;
