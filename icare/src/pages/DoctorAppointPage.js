import PatientList from '../components/DrAppointmentComp/PatientList';
import { PatientDetailSummary } from '../components/DrAppointmentComp/PatientList';
import AppointmentReq from '../components/DrAppointmentComp/AppointmentReq';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// GET ALL Requests
var appointmentRequestTable = [ 
    {
        _id: 1,
        date: "1 Sept 2022",
        time_slot:{
            start_time: 4
        },
        patient_id:{
            name: "Simon Alix",
            gender: "Male",
            age: "35",
            photo: "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
            last_checked:{
                doctor_name: "Everly",
                date: new Date(),
                observation: "High fever and cough at normal hemoglobin levels. ",
                prescription: []
            }
        },

        description: "Daily check up because I feel like my chest feel pain",
        //lastChecked: "Dr Everly on 21 April 2021 Prescription #2J983KT0",
    },
    {
        _id: 2,
        date: "1 Sept 2022",
        time_slot:{
            start_time: 4
        },
        patient_id:{
            name: "Simon Alix",
            gender: "Male",
            age: "35",
            photo: "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
            last_checked:{
                doctor_name: "Everly",
                date: new Date(),
                observation: "High fever and cough at normal hemoglobin levels. ",
                prescription: []
            }
        },

        description: "Daily check up because I feel like ",
        //lastChecked: "Dr Everly on 21 April 2021 Prescription #2J983KT0",
    },
];

const patientLists = [
    {
        _id: "63d014458cf30f2fa2a0a6b7",
        start_datetime: new Date(),
        title: "Normal Doctor Appointment",
        observation: "High fever and cough at normal hemoglobin levels.",
        treatment: " ",
        patient_id: {
            _id: "63d0081c455e7b28062fff1e",
            photo: "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
            name: "Tom Cata",
            gender: "female",
            age: 34,
            last_checked: {
                appointment_id: "63d53fc0d4c27cce07753f8b",
                doctor_name: "Chong Zhan Hang",
                date: new Date(),
                observation: "High blood sugar level",
                treatment: "Complete blood test and take insulin injection",
                prescription: `Paracetmol - 2 times a day
                                Dizopam - Day and Night before mealw
                                Wikoryl`,
            },
        },
    },
    {
        _id: "63d014458cf30f2fa2a0a6b2",
        start_datetime: new Date(),
        title: "Normal Doctor Appointment",
        observation: "High fever and cough at normal hemoglobin levels.",
        treatment: " ",
        patient_id: {
            _id: "63d0081c455e7b28062fff1e",
            photo: "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
            name: "Tom Cat",
            gender: "male",
            age: 34,
            last_checked: {
                appointment_id: "63d53fc0d4c27cce07753f8b",
                doctor_name: "Chong Zhan Hang",
                date: new Date(),
                observation: "High blood sugar level",
                treatment: "Complete blood test and take insulin injection",
                prescription: [],
            },
        },
    },
    {
        _id: "63d014458cf30f2fa2a0a611",
        start_datetime: new Date(),
        title: "Normal Doctor Appointment",
        observation: "High fever and cough at normal hemoglobin levels.",
        treatment: " ",
        patient_id: {
            _id: "63d0081c455e7b28062fff1e",
            photo: "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
            name: "Tom Cata",
            gender: "female",
            age: 34,
            last_checked: {
                appointment_id: "63d53fc0d4c27cce07753f8b",
                doctor_name: "Chong Zhan Hang",
                date: new Date(),
                observation: "High blood sugar level",
                treatment: "Complete blood test and take insulin injection",
                prescription: `Paracetmol - 2 times a day
                                Dizopam - Day and Night before mealw
                                Wikoryl`,
            },
        },
    },
];


export default function DoctorAppointPage(){
    const navigate = useNavigate();
    const [isShowPopOut, setIsShowPopOut] = useState(false);
    const [popOutContent, setPopOutContent] = useState({});

    return(
        <div className='grid ml-16 grid-cols-3'  >

            { isShowPopOut ? <PopUpContent /> : <></> }

            <div className='col-span-2 ml-5 mt-5'>
                <button className='btn btn-primary' onClick={()=>{navigate('/Appointments/EditAppointments')}}> Edit appointment availability</button>
            </div>

            <div className='col-span-1 bg-green-500'>
                <h1>notification icon and profile pic</h1>
            </div>

            <div className='col-span-2'>
                <div className='bg-white rounded-3xl m-5 px-5 pt-2 pb-5 drop-shadow-xl '>
                    <PatientList patientListTable={patientLists}/>
                </div>
            </div>

            <div className='col-span-1'>
                <div className='rounded-3xl bg-white m-5 ml-2 px-5 pt-2 pb-3 drop-shadow-xl '>
                    <AppointmentReq appointmentRequestTable={appointmentRequestTable} setPopUpFunc={setIsShowPopOut} setPopUpContent={setPopOutContent} />
                </div>
            </div>

        </div>
    );

    function PopUpContent(){
        return(
            <div className='fixed z-10 bg-black/10 inset-0 ml-16 flex justify-center items-center '>
                <div className='flex flex-col z-20 bg-sky-100/90 h-3/4 w-3/4 rounded-3xl'>
   
                    <div className='flex flex-row p-5 ' >
                        <div className='flex flex-col justify-center justify-items-center'>
                            <div className="mask mask-circle h-20 self-center shrink-0 mb-5 mx-5">
                    
                                <div className="avatar">
                                    <div className="w-24">
                                        <img src={popOutContent.patient_id.photo} />
                                    </div>
                                </div>
                            </div>
                            
                            <h1 className='text-center text-xl font-semibold'>{popOutContent.patient_id.name}</h1>
                            <h2 className='text-center text-base font-light text-gray-500'>{popOutContent.patient_id.gender} - {popOutContent.patient_id.age} Years old</h2>
                        </div>

                        <div className='bg-white m-5 p-5 border-2 border-sky-400 rounded-3xl'>
                            <PatientDetailSummary consultationData = {popOutContent} />
                        </div>
                    </div>

                    <div className='flex flex-row justify-center bg-blue-300/80 py-3'>
                        <h1 className='inline mr-10 text-xl font-bold'>Date : {popOutContent.date}</h1>
                        <h1 className='inline text-xl font-bold'>Time : {popOutContent.time_slot.start_time.toString().padStart(2, '0')}:00</h1>
                    </div>

                    <h1 className='text-center text-semibold text-xl mt-5 inline'> Are you sure you want to  
                    <h1 className={popOutContent.btnClicked=="accept"? "text-green-600 inline font-bold" : "text-red-500 inline font-bold"}> {popOutContent.btnClicked.toUpperCase()}</h1> the appointment request?</h1>

                    <div className='flex flex-row justify-center'>
                        <button className="btn bg-green-500 cursor-pointer m-5 mr-20
                        hover:scale-105 hover:bg-green-600 " onClick={()=>{setIsShowPopOut(true)}}>Yes</button>
                        <button className="btn bg-red-500 cursor-pointer m-5 mr-20
                        hover:scale-105 hover:bg-red-600" onClick={()=>{setIsShowPopOut(false)}}>No</button>
                    </div>
                </div>
            </div>
        );
    };
}

