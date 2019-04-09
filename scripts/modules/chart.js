import setupChart from './setups/charts/setupChart.js'
export default function () {
    return new Chart(document.getElementById("chart").getContext('2d'), setupChart);
};

