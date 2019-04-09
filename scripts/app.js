import chart from './modules/chart.js'

$(document).ready(function () {
    $(document).on('click', '.btn-draw-grafiks', function () {
        chart();
    });
});
