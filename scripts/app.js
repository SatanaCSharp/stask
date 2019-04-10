import renderCharts from './modules/renderCharts.js'
import setupChart from './modules/setups/charts'
import setupSignals from './modules/setups/charts/signals';

$(document).ready(function () {
    $(document).on('click', '.btn-draw-charts', function () {
        renderCharts(setupChart(setupSignals()));
    });
});
