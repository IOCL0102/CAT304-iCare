import { useState, useEffect } from "react";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

/*
    useEffect(() => {
        {console.log("clicked")}
      return () => {
        isAppointmentBtnClicked ? (
            <div className='fixed z-10 bg-green-500/40 cursor-pointer inset-0' >
                <div className='z-20 ml-16'>
                    <h1>hihi</h1>
                </div>
                <button onClick={setAppointmentBtn(false)}></button>
            </div>
        )
        : <h1 className="bg-green-500">FALSEEEEE</h1>
      }
    }, [isAppointmentBtnClicked])
*/
const appointmentRequestTable = [ {
    id: 1,
    name: "Simon Alix",
    gender: "Male",
    age: "35",
    date: "1 Sept 2022",
    time: "04:00 PM",
    link: "#",
    appointPurpose: "Daily check up because I feel like my chest feel pain sometimes",
    timePassed: "5 minutes",
    profilePic: "https://placeimg.com/160/160/arch",
    lastChecked: "Dr Everly on 21 April 2021 Prescription #2J983KT0",
    observation: "High fever and cough at normal hemoglobin levels. ",
    prescription: `Paracetmol - 2 times a day
                    Dizopam - Day and Night before mealw
                    Wikoryl`,
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
    profilePic: "https://placeimg.com/160/160/any",
},
{
    id: 2,
    name: "Abu Bakar",
    date: "2 April 2022",
    time: "04:00 PM",
    link: "#",
    appointPurpose: "I am not feeling well so i plan to do the medical check up",
    timePassed: "1 day ago",
    profilePic: "https://placeimg.com/160/160/any",
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
];
appointmentRequestTable.push(...appointmentRequestTable);

export default function AppointmentReq({setPopUpFunc, setPopUpContent}){

    const [appointmentRequests, setAppointmentReq] = useState(appointmentRequestTable);
    
    return(
        <div className="flex flex-col pb-3">
            <h1 className="font-semibold text-2xl text-center my-5 ">Appointment Request</h1>
            <div className="flex flex-col gap-3 overflow-y-scroll" style={{height: '35rem'}}>
                {appointmentRequests.map((appointmentRequest)=>(
                        <AppointmentRequestBar key={appointmentRequest.id} data={appointmentRequest}/>
                ))}
                <div className='grow text-center my-5'>
                    <u className='text-base underline-offset-1 hover:cursor-pointer hover:text-blue-500'>view all</u>
                </div>
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
                    <h3 className="text-sm ">{data.appointPurpose.length > 20 ? data.appointPurpose.slice(0,25) + " ..." : data.appointPurpose}</h3>
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







