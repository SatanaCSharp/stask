import AbstractTaskModel from './abstract_task_model.js';

export default class Task extends AbstractTaskModel {
    constructor(setup) {
        super(setup);
        this.setSubTasks = new Set();
        this.setSetSubTasks = setup;
    }

    set setSetSubTasks(setup) {
        if (setup.setSubTasks !== undefined) {
            this.setSubTasks = new Set(setup.setSubTasks);
        }
    }
}