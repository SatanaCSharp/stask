export default class Observable {
    constructor() {
        this.setObservers = new Set();
    }

    sendMessage(message) {
        this.setObservers.forEach((observer) => {
            observer.notify(message);
        });
    }

    set addObserver(observer) {
        this.setObservers.add(observer);
    }
}