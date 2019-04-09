import AbstractTaskModel from './abstract_task_model.js';
import TaskError from '../errors/task_error.js';

export default class SubTask extends AbstractTaskModel {
    constructor(setup) {
        super(setup);
        this.setParentId = setup;
    }

    set setParentId(setup) {
        if (setup.parentId !== undefined) {
            this.parentId = setup.parentId;
        } else {
            throw new TaskError('Can not set undefined parent id of a project');
        }
    }

    get getParentId() {
        return this.parentId;
    }

}