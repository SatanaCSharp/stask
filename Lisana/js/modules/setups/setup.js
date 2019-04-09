export default class Setup {
    constructor(id) {
        this.id = id;
        this.projectName = $('#project-name').val();
        this.taskName = $('#task-name').val();
        this.description = $('#task-description').val();
        this.estimation = $('#task-estimation').val();
        this.status = $('.target-status').text();
        this.priority = $('.target-priority').text();
    }

    set setParentId(parentId) {
        this.parentId = parentId;
    }
}