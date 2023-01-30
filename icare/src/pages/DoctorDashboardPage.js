import DoctorActivityGraph from '../components/DrDashboardGraph/DoctorActivityGraph'
import PatientVisitByGender from '../components/DrDashboardGraph/PatientVisitGraph';
import AvgPatientVisitGraph from '../components/DrDashboardGraph/AvgPatientVisitGraph';
import Calendar from '../components/Calender';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns'
import { useAuthContext } from '../hooks/useAuthContext';


const doctorInfo = {
    name: "ALi baba",
};

// GET All appointments
const highlightDaysTable = [
    {start_datetime: new Date("2023-02-15")},
    {start_datetime: new Date("2023-02-28")},
    {start_datetime: new Date("2023-01-30")}
]

// request table
const upComingSchedulesTable = [
    {
        _id: 1,
        date: "1 April 2022",
        time_slot:{
            start_time: "04:00 PM",
        },
        patient_id:{
            name: "Simon Alix",
            photo: "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
        },
        profilePic: "https://placeimg.com/160/160/arch",
    },
]

const doctorPatientStatistics = {
        visitForToday : 104,
        totalPatient : 5082,
        newPatient : 64,
        scheduleAvgByQuarter : [1,10,3,10,5,8,2],
        maleVisitWeekly: [1,10,3,10,5,8,2],
        femaleVisitWeekly: [2,3,7,2,8,11,33],
    }


export default function DoctorDashboardPage(){
    var tempHighightDays = []
    highlightDaysTable.map((obj)=>{
        tempHighightDays.push(obj.start_datetime);
    })
    const navigate = useNavigate()
    const [upComingSchedules, setSchedules] = useState(upComingSchedulesTable);
    const [statisticData, setStatisticData] = useState(doctorPatientStatistics);
    const [highlightedDays, setHighlightedDays] = useState(tempHighightDays);
    const {_, Calender} = Calendar({highlightedDays});
    const [doctor, setDoctor] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)
    const { user } = useAuthContext();
    const [appointments, setAppointments] = useState(null)

    const fetchDoctor = async () => {
        // starting the fetch request
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/profile/', {
            headers: {'Authorization': `Bearer ${user.token}`},
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }else{
            // setDoctor({...doctor, json});
            setDoctor(json)

            setIsLoading(false)
        }
        
    };

    const fetchAppointments = async () => {
        // starting the fetch request
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/appointments/', {
            headers: {'Authorization': `Bearer ${user.token}`},
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }else{
            setAppointments(json)
            const today = new Date();
            const filteredAppointments = appointments.filter(appointment => {
                const appointmentDate = new Date(appointment.start_datetime);
                return appointmentDate >= today;
            });
            console.log('Before filtered',appointments)
            console.log('after filtered',filteredAppointments)
            setSchedules(filteredAppointments)
            setIsLoading(false)
        }
        
    };

    // synchronous
    useEffect(() => {
        if(user){
            fetchDoctor()
            // fetchAppointments()
            // Promise.all([fetchDoctor(),fetchAppointments()])
            //     .then(([doctorData, appointmentData]) => {
            //     // handle success
            //   })
            //     .catch(error => {
            //     // handle error
            //   });
        } 
    }, []);

    if (isLoading) {
        return (
            <div>
                {/* Add loading commponent here */}
                <p> Loading .. </p>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        )
    }

    if (!doctor){
        return (
            <div>
                <p> Doctor details unable to fetched </p>
            </div>
        )
    }


    return(
        <div className="grid grid-rows-7 grid-cols-3 ml-16">
            {/*============================ WELCOME BACK ============================ */}
                <div className="col-start-1 col-end-3 row-span-1">
                    <div className="mt-8 ml-5">
                    <h2 className="font-base text-4xl inline"> Welcome back </h2>
                    <h1 className="text-primary font-bold text-6xl inline"> Dr {doctor.name.split(" ")[0]} !</h1>
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
                            <h1 className='font-bold text-7xl mt-3'>{statisticData.visitForToday}</h1>
                        </div>
                    
                        <div className='bg-white/70 inline-block rounded-xl mx-5 p-4 drop-shadow-xl w-52'>
                            <h2 className='text-primary font-base text-xl'>Total Patients</h2>
                            <h3 className='font-light text-sm'>Jan {format(new Date(), "yyyy")} to {format(new Date(), "MMM yyyy")}</h3>
                            <h1 className='text-3xl mt-2 font-semibold'>{statisticData.totalPatient}</h1>
                        </div>

                        <div className='bg-white/70 inline-block rounded-xl m-5 p-4  drop-shadow-xl w-52'>
                            <h2 className='text-primary font-base text-lg '>New Patients</h2>
                            <h3 className='font-light text-sm'>Compared to Last Month</h3>
                            <h1 className='text-3xl mt-2 font-semibold'>{statisticData.newPatient}</h1>
                        </div>
                  
                    </div>
                </div>

          
                {/*============================ GRAPH SECTION ============================ */}
                <div className="col-start-1 col-end-3 row-start-4 row-end-7">
                    <div className='m-10 grid grid-cols-4 grid-rows-2'>  
                        <div className='col-start-1 col-end-3 row-start-1 row-span-4 bg-white rounded-xl p-5 mx-5 drop-shadow-xl'>
                            <DoctorActivityGraph scheduleAvgByQuarter={statisticData.scheduleAvgByQuarter}/>
                        </div>

                        <div className='col-start-3 col-end-5 row-span-2 bg-white rounded-xl p-5 m-2 drop-shadow-xl'>
                            <PatientVisitByGender maleVisitWeekly={statisticData.maleVisitWeekly} femaleVisitWeekly={statisticData.femaleVisitWeekly} />
                        </div>

                        <div className='col-start-3 col-end-5 row-span-2 bg-white rounded-xl p-5 m-2 drop-shadow-xl'>
                            <AvgPatientVisitGraph/>
                        </div>   
                    </div>
                </div>

            {/*============================ CALENDER SECTION ============================ */}
            <div className="col-start-3 col-end-4 row-start-2 row-end-7 bg-white m-7 p-2 rounded-xl drop-shadow-xl">
                <h2 className='text-2xl font-semibold m-5 pl-5'>CALENDAR</h2> 
                <div className='flex justify-center drop-shadow-xl'>
                    {Calender}
                </div>

                <div className='flex flex-row m-5 p-2 gap-5'>
                    <h2 className='text-xl font-semibold'>Upcoming</h2> 
                    <div className='grow text-right pr-5'>
                        <u className='text-base underline-offset-1 hover:cursor-pointer hover:text-blue-500' onClick={()=>{navigate('/Appointments')}}>view all</u>
                    </div>
                </div>

                <div className='flex flex-col p-2 m-5 rounded-xl gap-3'>
                    {upComingSchedules.map((schedule, index)=>(
                        <ScheduleBar key={index} schedule={schedule} />
                    ))}
                </div>
            </div>    
        </div>
    );
}

const ScheduleBar = ({schedule}) => {
    return(
        <div className='flex flex-row bg-sky-100 rounded-xl px-3 py-2'>
            <div className="mask mask-circle h-11 w-11 ml-2 mr-5">
                <img src={schedule.patient_id.photo} className='object-fill' />
            </div>
        
            <div className='grow'>
                <h1 className=''> Schedule with {schedule.patient_id.name}</h1>
                <h3 className='font-light text-sm text-gray-500'>{schedule.date} | {schedule.time_slot.start_time} </h3>
            </div>
        </div>
    );
}


