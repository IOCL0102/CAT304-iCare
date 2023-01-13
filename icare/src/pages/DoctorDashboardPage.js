import DoctorActivityGraph from '../components/DrDashboardGraph/DoctorActivityGraph'
import PatientVisitByGender from '../components/DrDashboardGraph/PatientVisitGraph';
import AvgPatientVisitGraph from '../components/DrDashboardGraph/AvgPatientVisitGraph';
import { useState } from 'react';

export default function DoctorDashboardPage(){

    const [upComingSchedules, setSchedules] = useState([
        {
            id: 1,
            name: "Simon Alix",
            date: "1 April 2022",
            time: "04:00 PM",
            link: "#",
            profilePic: "https://placeimg.com/160/160/arch",
        },
        {
            id: 2,
            name: "Abu Bakar",
            date: "2 April 2022",
            time: "04:00 PM",
            link: "#",
            profilePic: "https://placeimg.com/160/160/arch",
        },
        {
            id: 3,
            name: "Chirstine",
            date: "3 April 2022",
            time: "04:00 PM",
            link: "#",
            profilePic: "https://placeimg.com/160/160/arch",
        },
        {
            id: 4,
            name: "Chirstine",
            date: "3 April 2022",
            time: "04:00 PM",
            link: "#",
            profilePic: "https://placeimg.com/160/160/arch",
        },
        {
            id: 5,
            name: "Chirstine",
            date: "3 April 2022",
            time: "04:00 PM",
            link: "#",
            profilePic: "https://placeimg.com/160/160/arch",
        },
    ]);


    return(
        <div className="grid grid-rows-7 grid-cols-3 ml-16">
            {/*============================ WELCOME BACK ============================ */}
                <div className="col-start-1 col-end-3 row-span-1">
                    <div className="mt-8 ml-5">
                    <h2 className="font-base text-4xl inline"> Welcome back </h2>
                    <h1 className="text-primary font-bold text-6xl inline"> Dr Kim !</h1>
                    </div>
                </div>
            {/*============================ NOTIFICATION ============================ */}
                <div className="bg-green-500">                 
                    notification icon and profile pic
                </div>
            {/*======================= VISIT AND PATIENT ANALYTICS INFORMATION ======================= */}
                <div className="col-start-1 col-end-3 row-span-2"> 
                    <div className='bg-red-100 m-5 rounded-xl 
                    bg-gradient-to-r from-blue-300 to-blue-500'>

                        <div className='mt-5 mx-5 p-5'>
                            <h2 className='font-base text-2xl'>Visits for Today</h2>
                            <h1 className='font-bold text-7xl mt-3'>104</h1>
                        </div>
                    
                        <div className='bg-white/70 inline-block rounded-xl mx-5 p-4 drop-shadow-xl w-52'>
                            <h2 className='text-primary font-base text-xl'>Total Patients</h2>
                            <h3 className='font-light text-sm'>Jan2023 to Apr2023</h3>
                            <h1 className='text-3xl mt-2 font-semibold'>5082</h1>
                        </div>

                        <div className='bg-white/70 inline-block rounded-xl m-5 p-4  drop-shadow-xl w-52'>
                            <h2 className='text-primary font-base text-lg '>New Patients</h2>
                            <h3 className='font-light text-sm'>Compared to Last Month</h3>
                            <h1 className='text-3xl mt-2 font-semibold'>64</h1>
                        </div>
                  
                    </div>
                </div>

          
                {/*============================ GRAPH SECTION ============================ */}
                <div className="col-start-1 col-end-3 row-start-4 row-end-7">
                    <div className='m-10 grid grid-cols-4 grid-rows-2'>  
                        <div className='col-start-1 col-end-3 row-start-1 row-span-4 bg-white rounded-xl p-5 mx-5 drop-shadow-xl'>
                            <DoctorActivityGraph/>
                        </div>

                        <div className='col-start-3 col-end-5 row-span-2 bg-white rounded-xl p-5 m-2 drop-shadow-xl'>
                            <PatientVisitByGender/>
                        </div>

                        <div className='col-start-3 col-end-5 row-span-2 bg-white rounded-xl p-5 m-2 drop-shadow-xl'>
                            <AvgPatientVisitGraph/>
                        </div>   
                    </div>
                </div>

            {/*============================ CALENDER SECTION ============================ */}
            <div className="col-start-3 col-end-4 row-start-2 row-end-7 bg-white m-5 p-2 rounded-xl">
                <h2 className='text-xl font-semibold m-5 mb-72 px-2'>Calender</h2> 

                <div className='flex flex-row m-5 p-2 gap-5'>
                    <h2 className='text-xl font-semibold'>Upcoming</h2> 
                    <div className='grow text-right pr-5'>
                        <u className='text-base underline-offset-1 hover:cursor-pointer hover:text-blue-500'>view all</u>
                    </div>
                </div>

                <div className='flex flex-col p-2 m-5 rounded-xl gap-3'>

                    {upComingSchedules.map((schedule)=>(

                        <div className='flex flex-row bg-sky-100 rounded-xl px-3 py-2'>
                            <div className="mask mask-circle h-11 w-11 ml-2 mr-5">
                                <img src={schedule.profilePic} className='object-fill' />
                            </div>
                        
                            <div className='grow'>
                                <h1 className=''> Schedule with {schedule.name}</h1>
                                <h3 className='font-light text-sm text-gray-500'>{schedule.date} | {schedule.time} </h3>
                            </div>
                        </div>
                    ))}
            
                </div>
            </div>    
        </div>
    );
}


