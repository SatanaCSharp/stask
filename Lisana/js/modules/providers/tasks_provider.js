export default class TaskProvider {
    constructor() {
        this.setTasks = new Set();
    }

    __pullTasks() {
        for (let i = 1; i <= localStorage.length; i++) {
            this.setTasks.add(JSON.parse(localStorage.getItem(`${i}`)));
        }
    }

    get getTasks() {
        this.__pullTasks();
        return this.setTasks;
    }

    getTaskById(id) {
        return JSON.parse(localStorage.getItem(`${id}`));
    }

    deleteTaskById(id) {
        localStorage.removeItem(`${id}`);
    }


    addSubTask(task, subTask) {
        task.setSubTasks.add(subTask);
    }

    getSubTasks(task) {
        return task.setSubTasks;
    }
    saveTask(task, id) {
        localStorage.setItem(`${id}`, JSON.stringify(task));
    }
}