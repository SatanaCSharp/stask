export default function (setup) {
    $(document).on('click', setup.eventSelector, function (event) {
        $(setup.targetSelector).text(event.currentTarget.innerText);
        $(setup.hideTargetSelector).slideUp();
        $(setup.replacingSelector + ' i')
            .replaceWith('<i class="fas fa-angle-down"></i>');
    });
}

