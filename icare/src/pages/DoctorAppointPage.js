import PatientList from '../components/DrAppointmentComp/PatientList';
import AppointmentReq from '../components/DrAppointmentComp/AppointmentReq';
import { useState } from 'react';
// bg-slate-100
// style={{gridTemplateColumns: 'repeat(autofill, minmax(250px, 1fr))' }}

export default function DoctorAppointPage(){
    return(
        <div className='grid ml-16 grid-cols-3'  >


            <div className='col-span-2'>
                <div className='bg-white rounded-3xl m-5 px-5 pt-2 pb-7 drop-shadow-xl '>
                    <PatientList />
                </div>
            </div>

            <div className='col-span-1'>
                <div className='rounded-3xl bg-white m-5 ml-2 px-5 py-2 drop-shadow-xl'>
                    <AppointmentReq />
                </div>
            </div>

            <div className='col-span-2 bg-green-500'>
            <AppointmentReq />
            </div>

            <div className='col-span-1 bg-red-500'>
            <AppointmentReq />
            </div>

        </div>
    );
}