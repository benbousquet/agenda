import {observable, action, computed} from 'mobx'; 
import moment from 'moment'

class MainStore {
    @observable events = [
        {
            name: "Walk The Dog",
            startDate: moment(),
            endDate: moment().set('minute', moment().get('minute') + 60),
            remindDates: moment().set('minute', moment().get('minute') +  60 - 10),
        },
        {
            name: "Doctors Appointment",
            startDate: moment(),
            endDate: moment().set('minute', moment().get('minute') + 7000),
            remindDates: moment().set('minute', moment().get('minute') +  60 - 10),
        }
    ];

    /**
     * NAME
     * START DATE - INCLUDING TIME
     * END DATE - INCLUDING TIME
     * REMIND DATES
     * LOCATION
     * DESCRIPTION - OPTIONAL
     */

    @observable tags = [
        {
            name: 'HW',
            remindTime: 10
        },
        {
            name: 'URGENT',
            remindTime: 30
        },
        {
            name: 'FAMILY',
            remindTime: 15
        },
        {
            name: 'HEALTH',
            remindTime: 60
        }
    ];

    @action addTag = (name, remindTime) => {
        this.tags.push({
            name: name,
            remindTime: remindTime, // time in minutes to remind them - Optional Future Implementation: Variable Options For # of Reminds and timing    
        })
    }

    @action addEvent = (event, tag) => {
        this.events.push({
            name: event.name,
            startDate: moment(),
            endDate: tag.remindDates,
            remindDates: tag.remindDates.subtract(tag.remindTime, 'minutes'),
            // location: event.location,
        });
        if (this.events.length > 1) {
            var min = 0
            for (var i = 0; i < this.events.length - 1; i++) {
                min = i
                for (var j = i + 1; j < this.events.length; j++) {
                    if (this.events[j].endDate.isBefore(this.events[min].endDate)) {
                        min = j
                    }
                }
                var temp = this.events[i]
                this.events[i] = this.events[min]
                this.events[min] = temp;
            }
        }
    }

    @computed get eventCount() {
        return this.events.length;
    }

}
export default new MainStore();