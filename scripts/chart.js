var lebels = ["0", "1", "2", "3", "4", "5"];

function boolData() {
    var boolArray = [];
    for (var i = 0; i <= 5; i++) {
        boolArray.push(Math.round(Math.random(0, 1)));
    }
    return boolArray;
}

var I7 = boolData();

var elementI7 = document.getElementById("I7").getContext('2d');
var grafikI7 = new Chart(elementI7, {
    type: 'bar',
    data: {
        labels: lebels,
        datasets: [{
            label: 'I7 - diagram of changes',
            data: I7,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
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
});

var I6 = boolData();

var elementI6 = document.getElementById("I6").getContext('2d');
var grafikI6 = new Chart(elementI6, {
    type: 'bar',
    data: {
        labels: lebels,
        datasets: [{
            label: 'I6 - diagram of changes',
            data: I6,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
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
});

function determineM2(I7, I6) {
    var array = [];
    for (var i = 0; i < I7.length; i++) {
        if (I7[i] && I6[i]) {
            array.push(1);
        } else {
            array.push(0);
        }
    }
    return array;
}


var elementM2 = document.getElementById("M2").getContext('2d');
var grafikM2 = new Chart(elementM2, {
    type: 'bar',
    data: {
        labels: lebels,
        datasets: [{
            label: 'M2 - diagram of changes',
            data: determineM2(I7,I6),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
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
});

function determineM1(I7, I6) {
    var array = [];
    for (var i = 0; i < I7.length; i++) {
        if (I7[i] || I6[i]) {
            array.push(1);
        } else {
            array.push(0);
        }
    }
    return array;
}

var elementM1 = document.getElementById("M1").getContext('2d');
var grafikM1 = new Chart(elementM1, {
    type: 'bar',
    data: {
        labels: lebels,
        datasets: [{
            label: 'M1 - diagram of changes',
            data: determineM1(I7,I6),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
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
});