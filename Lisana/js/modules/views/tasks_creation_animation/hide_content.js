export default function (setup) {
    $(document).on('click', setup.eventSelector, function () {
        $(this.lastElementChild).replaceWith(setup.replaceElement);
        $(setup.selectorHideContent).slideUp();
        $(setup.selectorEventElement)
            .removeClass(setup.classRemove)
            .addClass(setup.classAdd);
    });
}
