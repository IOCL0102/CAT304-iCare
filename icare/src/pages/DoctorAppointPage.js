import PatientList from '../components/DrAppointmentComp/PatientList';
import { PatientDetailSummary } from '../components/DrAppointmentComp/PatientList';
import AppointmentReq from '../components/DrAppointmentComp/AppointmentReq';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
                    <PatientList />
                </div>
            </div>

            <div className='col-span-1'>
                <div className='rounded-3xl bg-white m-5 ml-2 px-5 pt-2 pb-3 drop-shadow-xl '>
                    <AppointmentReq setPopUpFunc={setIsShowPopOut} setPopUpContent={setPopOutContent} />
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
                            <div className="mask mask-circle h-2/4 self-center shrink-0 mb-5 mx-5">
                                <img src={popOutContent.profilePic} className='object-fill' />
                            </div>
                            <h1 className='text-center text-xl font-semibold'>{popOutContent.name}</h1>
                            <h2 className='text-center text-base font-light text-gray-500'>{popOutContent.gender} - {popOutContent.age} Years old</h2>
                        </div>

                        <div className='bg-white m-5 p-5 border-2 border-sky-400 rounded-3xl'>
                            <PatientDetailSummary consultationData = {popOutContent} />
                        </div>
                    </div>

                    <div className='flex flex-row justify-center bg-blue-300/80 py-3'>
                        <h1 className='inline mr-10 text-xl font-bold'>Date : {popOutContent.date}</h1>
                        <h1 className='inline text-xl font-bold'>Time : {popOutContent.time}</h1>
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

