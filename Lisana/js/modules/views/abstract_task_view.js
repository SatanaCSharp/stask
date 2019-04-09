import TaskError from '../errors/task_error.js';

export default class AbstractTaskView {
    constructor() {
        if (this.constructor === AbstractTaskView) {
            throw new TaskError('Can not create an instance of AbstractTaskView');
        }
    }

    __drawMenu() {
        $('.project-name').append('<div class="pop-up-menu"></div>');
        $('.pop-up-menu')
            .append('<i class="far fa-edit"></i>')
            .append('<i class="fas fa-plus"></i>')
            .append('<i class="far fa-trash-alt"></i>')
            .append('<i class="fas fa-angle-up"></i>');
    }

    set drawTasks(setTasks) {
    }

    drawNewTask() {
    }

    set drawTasks(setTasks) {
    }

}