import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio : false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Patient visit',
      data: [102,2500,3580,2396,5000,1020,7658],
      backgroundColor: '#C5D8FF',
    }
  ],
};

export default function AvgPatientVisitGraph(){
    
    return(
        <>
            <h1 className='text-lg font-semibold'>Average Patient Visit</h1> 
            <div className='h-48'>
              <Bar data={data} options={options}  />
            </div>
        </>

    );
}