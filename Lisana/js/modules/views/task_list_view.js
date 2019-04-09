import AbstractTaskView from './abstract_task_view.js';

export default class TaskListView extends AbstractTaskView {
    constructor() {
        super();
    }

    __drawTaskFields(task, id) {
        $(`#task-${id}`)
            .append(`<li class="task-list__body_items_item project-name">${task.projectName}</li>`)
            .append(`<li class="task-list__body_items_item name">${task.taskName}</li>`)
            .append(`<li class="task-list__body_items_item description">${task.description}</li>`)
            .append(`<li class="task-list__body_items_item status">${task.status}</li>`)
            .append(`<li class="task-list__body_items_item estimation">${task.estimation}h</li>`)
            .append(`<li class="task-list__body_items_item priority">${task.priority}</li>`)
            .append(`<li class="task-list__body_items_item progress">20%</li>`);
    }


    set drawTasks(setTasks) {
        setTasks.forEach((task) => {
            $('.task-list__body')
                .prepend(`<ul id="task-${task.id}" itemid="${task.id}" class="task-list__body_items"></ul>`);
            this.__drawTaskFields(task, task.id);
        });
        this.__drawMenu();
    }

    drawNewTask() {
        let task = JSON.parse(localStorage.getItem(`${localStorage.length}`));
        $('.task-list__body')
            .prepend(`<ul id="task-${task.id}" itemid="${task.id}" class="task-list__body_items"></ul>`);
        this.__drawTaskFields(task, task.id);
    }
}