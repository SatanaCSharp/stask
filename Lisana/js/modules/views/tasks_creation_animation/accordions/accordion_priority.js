import hiddenContent from '../hidden_content.js';
import showContent from '../show_content.js';
import hideContent from '../hide_content.js'
import selectFromDropDown from '../select_from_drop_down.js';

export default function () {
    hiddenContent({
        selectorHide: '.drop-down-priority__select-priority',
        selectorEventElement: '.drop-down-priority__selected-priority',
        activeClass: 'priorities-hidden'
    });

    showContent({
        eventSelector: '.priorities-hidden',
        replaceElement: '<i class="fas fa-angle-up"></i>',
        selectorShowContent: '.drop-down-priority__select-priority',
        selectorEventElement: '.drop-down-priority__selected-priority',
        classRemove: 'priorities-hidden',
        classAdd: 'priorities-shown'
    });
    hideContent({
        eventSelector: '.priorities-shown',
        replaceElement: '<i class="fas fa-angle-down"></i>',
        selectorHideContent: '.drop-down-priority__select-priority',
        selectorEventElement: '.drop-down-priority__selected-priority',
        classRemove: 'priorities-shown',
        classAdd: 'priorities-hidden'
    });
    selectFromDropDown({
        eventSelector: '.priorities__priority',
        targetSelector: '.target-priority',
        hideTargetSelector: '.drop-down-priority__select-priority',
        replacingSelector: '.drop-down-priority__selected-priority',

    });
}
