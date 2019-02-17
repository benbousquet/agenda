import {observable, action, computed} from 'mobx';
import moment from 'moment'

class MainStore {
    @observable events = [];
    /**
     * NAME
     * START DATE - INCLUDING TIME
     * END DATE - INCLUDING TIME
     * REMIND DATES
     * LOCATION
     * DESCRIPTION - OPTIONAL
     */

    @action addEvent = (event, tag) => {
        this.events.push({
            name: event.name,
            startDate: moment(),
            endDate: moment().set('minute', moment().get('minute') + tag.remindTime),
            remindDates: moment().set('minute', moment().get('minute') +  tag.remindTime - tag.remindDates),
            // location: event.location,
            description: event.description
        });
    }

    @computed get eventCount() {
        return this.events.length;
    }
}

export default new MainStore();