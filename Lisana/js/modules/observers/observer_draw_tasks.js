import TasksController from '../controllers/tasks_controller.js';

export default function () {
    let tasks = new TasksController();
    tasks.taskListView.drawTasks = tasks.__taskProvider.getTasks;
};