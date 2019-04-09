import setupI7 from './setupI7.js';
import setupI6 from './setupI6.js';
import setupM1 from './setupM1.js';
import setupM2 from './setupM2.js';

const labels = ["0", "1", "2", "3", "4", "5"];
export default {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            setupI7,
            setupI6,
            setupM1,
            setupM2
        ]
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
};