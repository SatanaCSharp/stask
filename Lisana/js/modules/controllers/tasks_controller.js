import TaskListView from '../views/task_list_view.js';
import Task from '../models/task.js';
import Setup from '../setups/setup.js';
import TaskProvider from '../providers/tasks_provider.js';
import SubTask from '../models/sub_task.js';
import SubTaskListView from '../views/sub_task_list_view.js';

export default class TasksController {
    constructor() {
        this.taskListView = new TaskListView();
        this.subTaskListView = new SubTaskListView();
        this.__taskProvider = new TaskProvider();
    }

    createTask() {
        let id = localStorage.length + 1;
        this.__taskProvider.saveTask(new Task(new Setup(id)), id);
    }

    createSubTask(id) {
        let task = new Task(this.__taskProvider.getTaskById(id));
        let setup = new Setup(id);
        setup.setParentId = id;
        let subTask = new SubTask(setup);
        this.__taskProvider.deleteTaskById = id;
        this.__taskProvider.addSubTask(task, subTask);
        this.__taskProvider.saveTask(task, id);
    }
}
