import React from 'react';
import DocNavbar from '../components/doctorNavbar';
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from 'react-router-dom';

const iconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '3 rem',
    }
}

export default function PatientProfileMedicalRecord () {
    let navigate = useNavigate();
    const patients ={
        name:"Raiden Shogen",
        birth_date:"25/8/2020",
        age:"25",
        ic_number:"000199-08-0888", 
        gender:"Male",
        height:"152",
        weight:"52",
        email:"dwdq@gmail.com",
        phone_number:"0125887958",
        address:"xxx",
        allergies:"xxx",
        photo:"https://placeimg.com/160/160/any",
        appointment:[
            {
                date:"01/12/2022",
                observation:"Cough, Fever..... ",
                treatment:"Taken X-ray, done blood test and bla bla bla",
                prescription:"Amoxicillin 250mg 1 tabs bla bla bla",
            },
            {
                date:"01/12/2022",
                observation:"Cough, Fever..... ",
                treatment:"Taken X-ray, done blood test and bla bla bla",
                prescription:"Amoxicillin 250mg 1 tabs bla bla bla",
            },
            {
                date:"01/12/2022",
                observation:"Cough, Fever..... ",
                treatment:"Taken X-ray, done blood test and bla bla bla",
                prescription:"Amoxicillin 250mg 1 tabs bla bla bla",
            },
        ],
        prescription:[
            {
                date:"01/12/2022",
                name: "paracetamol",
                intake_per_Day:3,
                meal_period:"after",
                duration_in_days:7,
            },
            {
                date:"01/12/2022",
                name: "padjdfracetamol",
                intake_per_Day:3,
                meal_period:"before",
                duration_in_days:7,
            },
        ]
    };

    const last_checked =[
        {
            date:"01/12/2022",
            observation:"Cough, Fever..... ",
            treatment:"Taken X-ray, done blood test and bla bla bla",
            prescription:"Amoxicillin 250mg 1 tabs bla bla bla",
        },
        {
            date:"01/12/2022",
            observation:"Cough, Fever..... ",
            treatment:"Taken X-ray, done blood test and bla bla bla",
            prescription:"Amoxicillin 250mg 1 tabs bla bla bla",
        },
        {
            date:"01/12/2022",
            observation:"Cough, Fever..... ",
            treatment:"Taken X-ray, done blood test and bla bla bla",
            prescription:"Amoxicillin 250mg 1 tabs bla bla bla",
        },
        
    ];

    const prescription =[
        {
            date:"01/12/2022",
            name: "paracetamol",
            intake_per_Day:3,
            meal_period:"after",
            duration_in_days:7,
        },
        {
            date:"01/12/2022",
            name: "padjdfracetamol",
            intake_per_Day:3,
            meal_period:"before",
            duration_in_days:7,
        },
        
    ];

    const [patientInfo, setpatientInfo] = useState(patients); 
    

    const displayMedicalRecordInfo = patients.map((patientInfo) => {
        return (
            <div>   
                <tr className=" flex flex-row border-b ">
                <td className="px-6 py-4 w-1/3 ml-20  whitespace-nowrap text-sm font-medium text-gray-900">{patientInfo.last_checked.date}</td>
                    <div className='flex flex-col space-y-1'>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Observation: {patientInfo.last_checked.observation}</td>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Treatment Given: {patientInfo.last_checked.treatment}</td>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Presciption: {patientInfo.last_checked.prescription}</td>
                    </div>
                </tr >
            </div> 
        );
      });

      const displayMedicalIntakeInfo = patients.map((patientInfo) => {
        return (
            <div>   
                <tr className=" flex flex-row border-b ">
                <td className="px-6 py-4 w-1/3 ml-20  whitespace-nowrap text-sm font-medium text-gray-900">{patientInfo.prescription.date}</td>
                    <div className='flex flex-col space-y-1'>
                    
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Medicine Name:{patientInfo.prescription.name}</td>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Intake/day:{patientInfo.prescription.intake_per_Day}</td>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Meal period:{patientInfo.prescription.meal_period}</td>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Duration(days):{patientInfo.prescription.duration_in_days}</td>
                            
                        
                    </div>
                </tr >
            </div> 
        );
      });

    return (
    <div>
        <DocNavbar/>
        <div className=' p-3 flex justify-start ml-20 space-x-5'>
            <button type="button"  onClick={()=>{navigate("/viewpatientlist")}} class="w-11 h-11 flex-wrap justify-center text-sm text-white bg-primary rounded-lg  ">
                {<ArrowBackIosIcon sx={iconStyle}/>}
            </button> 
        </div>
        <div className=' flex justify-end'>
            <button type="button" class="w-32 h-9 ml-20 mr-40 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary">
                    Edit profile</button>
        </div>  

        <img src={patients.photo} alt="" class="p-2 absolute ml-48 mt-8 w-48 h-48 rounded-lg"/>
        <div className=' ml-96 flex flex-col space-y-1 '>   
            <p className=' w-1/3 ml-28 text-3xl text-black font-semibold block'>{patients.name}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Birthdate: {patients.birth_date}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Age: {patients.age}</p>  
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>I/C: {patients.ic_number}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Gender: {patients.gender}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Height(cm): {patients.height}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Weight(kg): {patients.weight}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Email Address: {patients.email}</p>  
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Phone No.: {patients.phone_number}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Medical Allergies: {patients.allergies}</p>  
        </div>

        <div className=' flex justify-end'>
            <button type="button" class="w-32 h-9 ml-20 mr-40 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary">
                    Edit Record</button>
        </div>  

        <div className="ml-40 mr-40 flex flex-col">
            <div className=" sm:-mx-6 lg:-mx-8">
                <div className="  py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div >
                        <table class="min-w-full text-center">
                            <thead class="border-b bg-gray-800">
                                <tr>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 w-1/5">Date</th>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4">Medical Record</th>
                                </tr>
                            </thead >
                        </table>
                        {displayMedicalRecordInfo} 
                    </div>  
                </div>
            </div>
        </div>
        <div className= 'flex justify-start'>
            <button type="button" class="w-32 h-9 ml-40 mr-40 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary">
                    Add new record</button>
        </div>  

        <div className=' flex justify-end'>
            <button type="button" class="w-32 h-9 ml-20 mr-40 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary">
                    Edit Instuction</button>
        </div>  

        <div className="ml-40 mr-40 flex flex-col">
            <div className=" sm:-mx-6 lg:-mx-8">
                <div className=" py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div >
                        <table class="min-w-full text-center">
                            <thead class="border-b bg-gray-800">
                                <tr>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 w-1/5">Date</th>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4">Medical Intake Instruction</th>
                                </tr>
                            </thead >
                        </table>
                        {displayMedicalIntakeInfo} 
                    </div>  
                </div>
            </div>
        </div>   

        <div className=' flex justify-start p-3'>
            <button type="button" class=" w-48 h-10 ml-40 mr-40 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary">
                    Add new medical instruction</button>
        </div>  
        
    </div>
   
        


    )    

}