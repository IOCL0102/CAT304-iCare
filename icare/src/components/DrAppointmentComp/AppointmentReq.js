import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function AppointmentReq({appointmentRequestTable, setPopUpFunc, setPopUpContent}){

    const [appointmentRequests, setAppointmentReq] = useState(appointmentRequestTable);
    
    return(
        <div className="flex flex-col ">
            <h1 className="font-semibold text-2xl text-center my-5 ">Appointment Request</h1>
            <div className="flex flex-col gap-3 overflow-y-scroll mb-5 p-3" style={{height: '35rem'}}>
                {appointmentRequests.map((appointmentRequest)=>(
                        <AppointmentRequestBar key={appointmentRequest.id} data={appointmentRequest}/>
                ))}
            </div>            
        </div> 
    );


    function AppointmentRequestBar({data}){
        return(
            <div className='flex flex-row bg-sky-100 rounded-xl px-3 py-2'>
                <div className="mask mask-circle h-11 w-11 ml-2 mr-5 self-center shrink-0">
                    <img src={data.profilePic} className='object-fill' />
                </div>

                <div className='grow mr-5'>
                    <h1 className='text-lg font-base '> {data.name}</h1>
                    <h3 className="font-base text-sm text-blue-600 bg-blue-200 rounded-2xl px-3 text-justify tracking-tight">{data.date} | {data.time} </h3>
                    <h3 className="text-sm ">{data.appointPurpose.length > 50 ? data.appointPurpose.slice(0,47) + " ..." : data.appointPurpose}</h3>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-row gap-3 grow justify-end ">
                        <CheckIcon fontSize="large" onClick={()=>{setPopUpFunc(true); data.btnClicked="accept"; setPopUpContent(data)}} className="text-white bg-green-500 rounded-full cursor-pointer self-center hover:scale-110"/>
                        <ClearIcon fontSize="large" onClick={()=>{setPopUpFunc(true); data.btnClicked="reject"; setPopUpContent(data)}} className="text-white bg-red-500 rounded-full cursor-pointer self-center hover:scale-110"/>
                    </div>
            
                    <h3 className="text-xs text-end mt-2 opacity-70">{data.timePassed}</h3>
                </div>
            </div>
        );
    };
};







