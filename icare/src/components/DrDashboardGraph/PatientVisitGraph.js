import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
);

export default function PatientVisitByGender({maleVisitWeekly, femaleVisitWeekly}){

    const data = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat" ],
        datasets: [{
            label: "Male",
            data: maleVisitWeekly,
            backgroundColor: "transparent",
            borderColor:  "#8fb2eb",
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.4
        },
        {
            label: "Female",
            data: femaleVisitWeekly,
            backgroundColor: "transparent",
            borderColor: "#eb988f",
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.4
        }]
    };
    const options = {
        maintainAspectRatio : false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: true
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
                    // callback: (value) => value + 'K'
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    };

    return (
        <>
            <h1 className='text-lg font-semibold mb-5'>Patient Visit by Gender</h1>
            <div>
            <Line data={data} options={options} />
            </div>
        </>
    );
};