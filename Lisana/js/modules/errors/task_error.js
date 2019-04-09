export default class TaskError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}