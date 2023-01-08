import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function AppointmentReq(){
    
    const [appointmentRequests, setAppointmentReq] = useState([
        {
            id: 1,
            name: "Simon Alix",
            date: "1 Sept 2022",
            time: "04:00 PM",
            link: "#",
            appointPurpose: "Daily check up because I feel like my chest feel pain sometimes",
            timePassed: "5 minutes",
            profilePic: "https://placeimg.com/160/160/arch",
        },
        {
            id: 4,
            name: "Chirstine",
            date: "3 Apr 2022",
            time: "04:00 PM",
            link: "#",
            appointPurpose: "I am not feeling well so i plan to do the medical check up",
            timePassed: "58 minutes ago",
            profilePic: "https://placeimg.com/160/160/arch",
        },
        {
            id: 5,
            name: "Chirstine",
            date: "3 April 2022",
            time: "04:00 PM",
            link: "#",
            appointPurpose: "I am not feeling well so i plan to do the medical check up",
            timePassed: "2 hours ago",
            profilePic: "https://placeimg.com/160/160/arch",
        },
        {
            id: 2,
            name: "Abu Bakar",
            date: "2 April 2022",
            time: "04:00 PM",
            link: "#",
            appointPurpose: "I am not feeling well so i plan to do the medical check up",
            timePassed: "1 day ago",
            profilePic: "https://placeimg.com/160/160/arch",
        },
        {
            id: 3,
            name: "Chirstine",
            date: "3 April 2022",
            time: "04:00 PM",
            link: "#",
            appointPurpose: "I am not feeling well so i plan to do the medical check up",
            timePassed: "2 days ago",
            profilePic: "https://placeimg.com/160/160/arch",
        },
    ]);

    return(
        <div className="flex flex-col ">
            <h1 className="font-semibold text-2xl text-center my-5">Appointment Request</h1>
            <div className="flex flex-col gap-3">
                {appointmentRequests.map((appointmentRequest)=>(
                        <AppointmentRequestBar key={appointmentRequest.id} data={appointmentRequest}/>
                ))}
                <div className='grow text-center my-5'>
                    <u className='text-base underline-offset-1 hover:cursor-pointer hover:text-blue-500'>view all</u>
                </div>
            </div>

            
        </div>
    );
};

const AppointmentRequestBar = ({data}) => {
    return(
        <div className='flex flex-row bg-sky-100 rounded-xl px-3 py-2'>
            <div className="mask mask-circle h-11 w-11 ml-2 mr-5 self-center shrink-0">
                <img src={data.profilePic} className='object-fill' />
            </div>

            <div className='grow mr-5'>
                <h1 className='text-lg font-base '> {data.name}</h1>
                <h3 className="font-base text-sm text-blue-600 bg-blue-200 rounded-2xl px-3 text-justify tracking-tight">{data.date} | {data.time} </h3>
                <h3 className="text-sm ">{data.appointPurpose.length > 20 ? data.appointPurpose.slice(0,50) + " ..." : data.appointPurpose}</h3>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row gap-3 grow justify-end ">
                    <CheckIcon fontSize="large" className="text-white bg-green-500 rounded-full cursor-pointer self-center"/>
                    <ClearIcon fontSize="large" className="text-white bg-red-500 rounded-full cursor-pointer self-center"/>
                </div>
           
                <h3 className="text-xs text-end mt-2">{data.timePassed}</h3>
            </div>
        </div>
    );
};

