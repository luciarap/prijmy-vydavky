var element = document.getElementById("mojGraf1").getContext('2d');
var mojGraf1 = new Chart(element, {
    type: 'bar',
    data: {
        labels: ['1.1. 2020','10.1. 2020', '20.1. 2020', '30.1. 2020'],
        datasets: [{
            label: ["Príjem"],
            data: [12, 35, 650, 120],
            backgroundColor: [
                'rgba(213,185,178)',
                'rgba(213,185,178)',
                'rgba(213,185,178)',
                'rgba(213,185,178)'
            ],
            borderColor: [
                'rgba(213,185,178)',
                'rgba(213,185,178)',
                'rgba(213,185,178)',
                'rgba(213,185,178)'
            ],
            borderWidth: 1
        }]

    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
})

var element = document.getElementById("mojGraf2").getContext('2d');
var mojGraf2 = new Chart(element, {
    type: 'bar',
    data: {
        labels: ['2.1. 2020','8.1. 2020', '14.1. 2020', '23.1. 2020','29.1. 2020', '31.1. 2020'],
        datasets: [{
            label: ["Výdavky"],
            data: [31, 8.25, 15.43, 3.40, 5, 123.10],
            backgroundColor: [
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)'
            ],
            borderColor: [
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)'
            ],
            borderWidth: 1
        }]

    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
})

var element = document.getElementById("mojGraf3").getContext('2d');
var mojGraf1 = new Chart(element, {
    type: 'bar',
    data: {
        labels: ['1.1. 2020','10.1. 2020', '20.1. 2020', '30.1. 2020'],
        datasets: [{
            label: ["Príjem"],
            data: [12, 35, 650, 120],
            backgroundColor: [
                'rgba(213,185,178)',
                'rgba(213,185,178)',
                'rgba(213,185,178)',
                'rgba(213,185,178)'
            ],
            borderColor: [
                'rgba(213,185,178)',
                'rgba(213,185,178)',
                'rgba(213,185,178)',
                'rgba(213,185,178)'
            ],
            borderWidth: 1
        }]

    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
})

var element = document.getElementById("mojGraf4").getContext('2d');
var mojGraf2 = new Chart(element, {
    type: 'bar',
    data: {
        labels: ['2.1. 2020','8.1. 2020', '14.1. 2020', '23.1. 2020','29.1. 2020', '31.1. 2020'],
        datasets: [{
            label: ["Výdavky"],
            data: [31, 8.25, 15.43, 3.40, 5, 123.10],
            backgroundColor: [
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)'
            ],
            borderColor: [
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)',
                'rgba(162,103,105)'
            ],
            borderWidth: 1
        }]

    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
})