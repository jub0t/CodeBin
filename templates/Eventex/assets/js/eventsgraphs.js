const check = new Chart(document.getElementById("check"), {
    type: "line",
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "",
                borderColor: "#3182CE",
                data: [200 , 400, 300, 500, 400, 500, 600,0],
                backgroundColor: "rgb(49,130,206,0.1)",
                pointBackgroundColor: "#3182CE",
                borderWidth: "3",
                pointBorderWidth: "4",
                pointHoverRadius: "6",
                pointHoverBorderWidth: "8",
                pointHoverBorderColor: "rgb(49,130,206,0.1)",
            },
        ],
    },
    options: {
        legend: {
            position: false,
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    display:false,
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    display:false,
                },
            ],
        },
    },
});
