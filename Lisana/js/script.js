import Observable from './modules/observers/observable.js';
import Observer from './modules/observers/observer.js';
import accordionTaskCreation from './modules/views/tasks_creation_animation/accordions/accordion_task_creation.js'
import accordionStatus from './modules/views/tasks_creation_animation/accordions/accordion_status.js';
import accordionPriority from './modules/views/tasks_creation_animation/accordions/accordion_priority.js';
import observerCreateTask from './modules/observers/observer_create_task.js';
import observerDrawTasks from './modules/observers/observer_draw_tasks.js';
import observerPopUpMenu from './modules/observers/observer_pop_up.js';
import observerCreateSubTask from './modules/observers/observer_create_subtask.js';

$(document).ready(function () {
    accordionTaskCreation();
    accordionStatus();
    accordionPriority();
    let observable = new Observable();
    observable.addObserver = new Observer(observerCreateTask);
    observable.addObserver = new Observer(observerDrawTasks);
    observable.addObserver = new Observer(observerPopUpMenu);
    observable.addObserver = new Observer(observerCreateSubTask);
    observable.sendMessage('');
    console.log(observable);
});