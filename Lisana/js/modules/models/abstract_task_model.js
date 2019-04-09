import TaskError from '../errors/task_error.js';

export default class AbstractTaskModel {
    constructor(setup) {
        if (this.constructor === AbstractTaskModel) {
            throw new TaskError('Can not create an instance of AbstractTaskModel');
        }
        this.setId = setup;
        this.setProjectName = setup;
        this.setTaskName = setup;
        this.setDescription = setup;
        this.setEstimation = setup;
        this.setStatus = setup;
        this.setPriority = setup;
    }

    set setId(setup) {
        if (setup.id !== undefined && setup.id !== "") {
            this.id = setup.id;
        } else {
            throw new TaskError('Can not set undefined id of a project');
        }
    }

    set setProjectName(setup) {
        if (setup.projectName !== undefined && setup.projectName !== "") {
            this.projectName = setup.projectName;
        } else {
            throw new TaskError('Can not set undefined name of a project');
        }
    }

    set setTaskName(setup) {
        if (setup.taskName !== undefined && setup.taskName !== "") {
            this.taskName = setup.taskName;
        } else {
            throw new TaskError('Can not set undefined task`s name of a project');
        }
    }


    set setDescription(setup) {
        if (setup.description !== undefined && setup.description !== "") {
            this.description = setup.description;
        } else {
            throw new TaskError('Can not set undefined task`s description of a project');
        }
    }


    set setEstimation(setup) {
        if (setup.estimation !== undefined && setup.estimation !== "") {
            this.estimation = setup.estimation;
        } else {
            throw new TaskError('Can not set undefined task`s estimation of a project');
        }
    }

    set setStatus(setup) {
        if (setup.status !== undefined) {
            this.status = setup.status;
        } else {
            throw new TaskError('Can not set undefined task`s status of a project');
        }
    }

    set setPriority(setup) {
        if (setup.priority !== undefined) {
            this.priority = setup.priority;
        } else {
            throw new TaskError('Can not set undefined task`s priority of a project');
        }
    }

}
