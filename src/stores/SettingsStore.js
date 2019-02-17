import {observable, action, computed} from 'mobx';

class MainStore {
    @observable tags = [];

    @action addTag = (name, remindTime) => {
        this.tags.push({
            name: name,
            remindTime: remindTime, // time in minutes to remind them - Optional Future Implementation: Variable Options For # of Reminds and timing    
        })
    }
}

export default new MainStore();