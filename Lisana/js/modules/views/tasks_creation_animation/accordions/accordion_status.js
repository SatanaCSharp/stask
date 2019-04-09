import hiddenContent from '../hidden_content.js';
import showContent from '../show_content.js';
import hideContent from '../hide_content.js'
import selectFromDropDown from '../select_from_drop_down.js';

export default function () {
    hiddenContent({
        selectorHide: '.drop-down-statuses__select-status',
        selectorEventElement: '.drop-down-statuses__selected-status',
        activeClass: 'statuses-hidden'
    });
    showContent({
        eventSelector: '.statuses-hidden',
        replaceElement: '<i class="fas fa-angle-up"></i>',
        selectorShowContent: '.drop-down-statuses__select-status',
        selectorEventElement: '.drop-down-statuses__selected-status',
        classRemove: 'statuses-hidden',
        classAdd: 'statuses-shown'
    });
    hideContent({
        eventSelector: '.statuses-shown',
        replaceElement: '<i class="fas fa-angle-down"></i>',
        selectorHideContent: '.drop-down-statuses__select-status',
        selectorEventElement: '.drop-down-statuses__selected-status',
        classRemove: 'statuses-shown',
        classAdd: 'statuses-hidden'
    });
    selectFromDropDown({
        eventSelector: '.statuses__status',
        targetSelector: '.target-status',
        hideTargetSelector: '.drop-down-statuses__select-status',
        replacingSelector: '.drop-down-statuses__selected-status',

    });
}
