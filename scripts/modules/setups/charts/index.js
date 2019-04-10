export default function (setups) {
    return {
        type: 'bar',
        data: {
            labels: ["0", "1", "2", "3", "4", "5"],
            datasets: setups
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
} ;