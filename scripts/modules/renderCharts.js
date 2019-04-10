export default function (setupChart) {
    new Chart(document.getElementById("chart").getContext('2d'), setupChart);
};

