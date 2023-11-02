import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ historicalData }) {
    // Extract TLR and Score data from historicalData
    const tlrData = historicalData.map((data) => data.TLR_22);
    const scoreData = historicalData.map((data) => data.Score_22);

    // Create the dataset for the Line Chart
    const chartData = {
        labels: tlrData,
        datasets: [
            {
                label: "Score vs TLR",
                data: scoreData,
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",
            },
        ],
    };

    const options = {
        scales: {
            x: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "TLR (Teaching, Learning, and Resources)",
                    },
                },
            ],
            y: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Score",
                    },
                },
            ],
        },
    };

    return <Line data={chartData} options={options} />;
}

export default LineChart;
