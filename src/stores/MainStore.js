import {observable, action, computed} from 'mobx';

class MainStore {
    @observable events = [];

    @action addEvent = (event) => {
        this.events.push(event);
    }

    @computed get eventCount() {
        return this.events.length;
    }
}

export default new MainStore();