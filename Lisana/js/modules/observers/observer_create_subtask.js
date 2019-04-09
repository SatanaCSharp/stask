import showContent from '../views/tasks_creation_animation/show_content.js';
import TasksController from '../controllers/tasks_controller.js';

export default function () {
    showContent({
        eventSelector: '.pop-up-menu .fa-plus',
        replaceElement: '<i class="fas fa-angle-up"></i>',
        selectorShowContent: '.create-task__settings',
        selectorEventElement: '.create-task__title',
        classRemove: 'task__settings-hidden',
        classAdd: 'task__settings-shown'
    });
    let parentId = null;
    let projectName = null;

    $(document).on('click', '.pop-up-menu .fa-plus', function (event) {
        parentId = $(this).parents('.task-list__body_items').attr('itemId');
        projectName = $(this).parents('.project-name').text();
        $('#project-name').val(projectName).attr('disabled', 'disabled');
        $('.register-task__button').addClass('register-sub-task__button').removeClass('register-task__button');
    });

    $(document).on('click', '.register-sub-task__button', function (event) {
        let tasks = new TasksController();
        tasks.createSubTask(parentId);
        tasks.subTaskListView.drawNewTask();
        $('.register-sub-task__button').addClass('register-task__button').removeClass('register-sub-task__button');
    });
};