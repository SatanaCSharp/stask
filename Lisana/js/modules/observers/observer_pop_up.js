export default function () {
    $('.project-name .pop-up-menu').hide();
    $(document).on('click', '.project-name', function (event) {
        $(`#${event.currentTarget.parentNode.id} .pop-up-menu`).slideDown();
    });
    $(document).on('click', '.project-name .pop-up-menu i', function (event) {
        $('.project-name .pop-up-menu').slideUp();
        event.stopPropagation();
    });
};