import hiddenContent from '../hidden_content.js';
import showContent from '../show_content.js';
import hideContent from '../hide_content.js'

export default function () {
    hiddenContent({
        selectorHide: '.create-task__settings',
        selectorEventElement: '.create-task__title',
        activeClass: 'task__settings-hidden'
    });
    showContent({
        eventSelector: '.task__settings-hidden',
        replaceElement: '<i class="fas fa-angle-up"></i>',
        selectorShowContent: '.create-task__settings',
        selectorEventElement: '.create-task__title',
        classRemove: 'task__settings-hidden',
        classAdd: 'task__settings-shown'
    });
    hideContent({
        eventSelector: '.task__settings-shown',
        replaceElement: '<i class="fas fa-angle-down"></i>',
        selectorHideContent: '.create-task__settings',
        selectorEventElement: '.create-task__title',
        classRemove: 'task__settings-shown',
        classAdd: 'task__settings-hidden'
    });
}
