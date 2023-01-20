import React from 'react';
import DocNavbar from '../components/doctorNavbar';
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const iconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '3 rem',
    }
}

export default function patientprofileMedicalRecord () {
    const PatientInfo ={
        patientName:"Raiden Shogen",
        patientBirthdate:"25/8/2020",
        patientAge:"25",
        patientIC:"000199-08-0888", 
        patientGender:"Male",
        patientHeight:"152",
        patientWeight:"52",
        patientEmail:"dwdq@gmail.com",
        patientPhone:"0125887958",
        patientAddress:"xxx",
        patientMedicalAllergies:"xxx",
        patientProfilePic:"https://placeimg.com/160/160/any",
    };

    const PatientMedicalRecordTable =[
        {
            patientName: "Raiden Shogen",
            patientRecordID:1,
            patientRecordDate:"01/12/2022",
            patientRecordObservation:"Cough, Fever..... ",
            patientRecordTreatmentGiven:"Taken X-ray, done blood test and bla bla bla",
            patientRecordPrescription:"Amoxicillin 250mg 1 tabs bla bla bla",
        },
        {
            patientName: "Raiden Shogen",
            patientRecordID:2,
            patientRecordDate:"11/12/2022",
            patientRecordObservation:"Cddough, Fever..... ",
            patientRecordTreatmentGiven:"Taddken X-ray, done blood test and bla bla bla",
            patientRecordPrescription:"Amoxiddcillin 250mg 1 tabs bla bla bla",
        },
        {
            patientName: "Raiden Shogen",
            patientRecordID:3,
            patientRecordDate:"23/01/2023",
            patientRecordObservation:"Coeeugh, Fever..... ",
            patientRecordTreatmentGiven:"Teeaken X-ray, done blood test and bla bla bla",
            patientRecordPrescription:"Amoxicieellin 250mg 1 tabs bla bla bla",
        },
        
    ];

    const PatientMedicalIntakeInstructionTable =[
        {
            patientName: "Raiden Shogen",
            patientRecordID:1,
            patientMedicalIntakeDate:"01/12/2022",
            patientMedicalIntakeInstruction:["Dizopam - Day and Night before meal","Amoxycillin - Day and night after meal","Paracetamol - 2 times a day"],
        },
        
    ];

    const [patientMedicalRecordInfo, setpatientMedicalRecordInfo] = useState(PatientMedicalRecordTable); 
    const [patientMedicalIntakeInfo, setpatientMedicalIntakeInfo] = useState(PatientMedicalIntakeInstructionTable); 

    const displayMedicalRecordInfo = PatientMedicalRecordTable.map((patientMedicalRecordInfo) => {
        return (
            <div>   
                <tr className="bg-yellow-500 flex flex-row border-b ">
                <td className="px-6 py-4 w-1/3 ml-20  whitespace-nowrap text-sm font-medium text-gray-900">{patientMedicalRecordInfo.patientRecordDate}</td>
                    <div className='flex flex-col space-y-1'>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Observation: {patientMedicalRecordInfo.patientRecordObservation}</td>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Treatment Given: {patientMedicalRecordInfo.patientRecordTreatmentGiven}</td>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Presciption: {patientMedicalRecordInfo.patientRecordPrescription}</td>
                    </div>
                </tr >
            </div> 
        );
      });''

      const displayMedicalIntakeInfo = PatientMedicalIntakeInstructionTable.map((patientMedicalIntakeInfo) => {
        return (
            <div>   
                <tr className="bg-yellow-500 flex flex-row border-b ">
                <td className="px-6 py-4 w-1/3 ml-20  whitespace-nowrap text-sm font-medium text-gray-900">{patientMedicalIntakeInfo.patientMedicalIntakeDate}</td>
                    <div className='flex flex-col'>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">    
                            <li>{patientMedicalIntakeInfo.patientMedicalIntakeInstruction[0]}</li>
                            <li>{patientMedicalIntakeInfo.patientMedicalIntakeInstruction[1]}</li>
                            <li>{patientMedicalIntakeInfo.patientMedicalIntakeInstruction[2]}</li>

                        </td>
                    </div>
                </tr >
            </div> 
           
        );
      });

    return (
    <div>
        <DocNavbar/>
        <div className=' p-3 flex justify-start ml-20 space-x-5'>
            <button type="button" class="w-11 h-11 flex-wrap justify-center text-sm text-white bg-primary rounded-lg  ">
                {<ArrowBackIosIcon sx={iconStyle}/>}
            </button> 
        </div>

        <img src={PatientInfo.patientProfilePic} alt="" class="p-2 absolute ml-48 mt-8 w-48 h-48 rounded-lg"/>
        <div className='bg-blue-500 ml-96 flex flex-col space-y-1 '>   
            <p className='bg-red-500 w-1/3 ml-28 text-3xl text-black font-semibold block'>{PatientInfo.patientName}</p>
            <p className='bg-red-500 w-1/3 ml-28 text-base text-black font-normal block'>Birthdate: {PatientInfo.patientBirthdate}</p>
            <p className='bg-red-500 w-1/3 ml-28 text-base text-black font-normal block'>Age: {PatientInfo.patientAge}</p>  
            <p className='bg-red-500 w-1/3 ml-28 text-base text-black font-normal block'>I/C: {PatientInfo.patientIC}</p>
            <p className='bg-red-500 w-1/3 ml-28 text-base text-black font-normal block'>Gender: {PatientInfo.patientGender}</p>
            <p className='bg-red-500 w-1/3 ml-28 text-base text-black font-normal block'>Height(cm): {PatientInfo.patientHeight}</p>
            <p className='bg-red-500 w-1/3 ml-28 text-base text-black font-normal block'>Weight(kg): {PatientInfo.patientWeight}</p>
            <p className='bg-red-500 w-1/3 ml-28 text-base text-black font-normal block'>Email Address: {PatientInfo.patientEmail}</p>  
            <p className='bg-red-500 w-1/3 ml-28 text-base text-black font-normal block'>Phone No.: {PatientInfo.patientPhone}</p>
            <p className='bg-red-500 w-1/3 ml-28 text-base text-black font-normal block'>Medical Allergies: {PatientInfo.patientMedicalAllergies}</p>  
        </div>

        <div className="ml-40 mr-40 flex flex-col">
            <div className="bg-yellow-500 sm:-mx-6 lg:-mx-8">
                <div className=" bg-green-500 py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className=" bg-purple-500 ">
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

        <div className="ml-40 mr-40 flex flex-col">
            <div className="bg-yellow-500 sm:-mx-6 lg:-mx-8">
                <div className=" bg-green-500 py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className=" bg-purple-500 ">
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
        
    </div>
   
        


    )    

}