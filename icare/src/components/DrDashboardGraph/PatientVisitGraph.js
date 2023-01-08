import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

export default function PatientVisitByGender(){

    const data = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat" ],
        datasets: [{
            data: [1,10,3,10,5,8,2],
            backgroundColor: "transparent",
            borderColor: "#67BD8C",
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.4
        }]
    };
    const options = {
        maintainAspectRatio : false,
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 0,
                ticks: {
                    stepSize: 2,
                    callback: (value) => value + 'K'
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    };

    return (
        <>
            <Line data={data} options={options} />
        </>
    );
};