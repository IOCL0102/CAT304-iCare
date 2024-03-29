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


export default function DoctorActivityGraph({scheduleAvgByQuarter}){

    const data = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat" ],
        datasets: [{
            data: scheduleAvgByQuarter,
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
                    callback: (value) => value 
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    };

    return (
        <>
            <div className='mb-5'>
                <h1 className='font-bold text-3xl'>Activity Graph</h1>
                <h2 className='font-light text-sm text-gray-400'>Schedule average taken by quarter</h2>
            </div>    
            <div className='h-96'>
            <Line data={data} options={options} />
            </div>
        </>
    );
};