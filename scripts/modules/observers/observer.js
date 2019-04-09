export default class Observer {
    constructor(behavior) {
        this.setNotify = behavior;
    }

    set setNotify(behavior) {
        this.notify = (message) => {
            behavior(message);
        };
    }
}
