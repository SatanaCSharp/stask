import TasksController from '../controllers/tasks_controller.js';

export default function () {
    $(document).on('click', '.register-task__button', function () {
        let tasks = new TasksController();
        tasks.createTask();
        tasks.taskListView.drawNewTask();
        $('input').val('');
    });
};