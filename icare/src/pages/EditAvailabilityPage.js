import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Calendar from "../components/Calender";
import { format } from 'date-fns'

const todayAvailabilities = [
    { 
        start_time : 6,
        end_time : 9
    },
    { 
        start_time : 10,
        end_time : 12
    },
    { 
        start_time : 18,
        end_time : 19
    },
    { 
        start_time : 15,
        end_time : 17
    },

];

const highlightDaysTable = [
    new Date("2023-01-14"),
    new Date("2023-02-28"),
    new Date("2023-01-30")
]

// todayAvailabilities.push(...todayAvailabilities);


export default function EditAvailabilityPage(){
    const navigate = useNavigate();
    const [selectedFrom, setSelectedFrom] = useState('From');
    const [selectedTo, setSelectedTo] = useState("To");
    const [currentDaySchedules, setCurrentDaySchedules] = useState(todayAvailabilities.sort((a, b) => a.start_time - b.start_time));

    const [highlightedDays, setHighlightedDays] = useState(highlightDaysTable);
    const {Calender, currentSelectionDate} = Calendar({highlightedDays});
  

    useEffect(()=>{
        // call API to get the schedule time for currentSelectionDate       - getTodaySchedulesTime(currentSelectionDate);
    }, [currentSelectionDate]);

    return(
        <div className="ml-24 flex flex-col pt-5">
            <div className="flex flex-row">
                <button className="btn btn-primary" onClick={()=>{navigate(-1)}}>GO BACK</button>
                <div className="flex justify-end grow">
                    notification
                </div>
            </div>
            <div className="flex flex-row gap-5 pt-5 h-screen">
                
                <div className="drop-shadow-xl">{Calender}</div>
                <div className="flex flex-col bg-white p-5 drop-shadow-xl mr-0 ">
                    <h1 className="font-semibold text-2xl m-5 ">Availability for Scheduling</h1>
                    <h1 className="font-semibold text-lg m-5 mb-2"> Selected date : <p className="text-3xl inline">{format(currentSelectionDate, "dd MMM yyyy")}</p></h1>
                    <h1 className="font-semibold text-lg m-5 mb-2">Current availability : </h1>
                    <div className="m-5 overflow-y-scroll overflow-x-hidden" >
                        {currentDaySchedules.length > 0 ? 
                            currentDaySchedules.map((currentDaySchedule, index)=>
                                <AvailabilityBar key={index} schedule={currentDaySchedule}/>
                            )
                            : <h1 className="flex justify-center items-center font-base text-2xl rounded-xl bg-green-100 p-5"> --- EMPTY --- </h1>
                        }
                    </div> 
                </div>
                <div className="bg-white rounded-xl drop-shadow-xl flex flex-col justify-center items-center">
                    {/* h-full w-full */}
                    <div className="flex flex-col justify-center items-center bg-sky-200 p-5 m-5 rounded-2xl">
                        <h1 className="font-semibold text-xl mb-5"> Add availability</h1>
                        <TimeSelectionBar setSelectedFrom={setSelectedFrom} setSelectedTo={setSelectedTo}/>
                        <button className="btn btn-primary btn-sm rounded-full" disabled={selectedFrom==="From" || selectedTo==="To"}
                                onClick={()=>{
                                    currentDaySchedules.push({ 
                                        start_time : selectedFrom.split(':')[0],
                                        end_time : selectedTo.split(':')[0]});
                                    currentDaySchedules.sort((a, b) => a.start_time - b.start_time);
                                    setCurrentDaySchedules([...currentDaySchedules]);
                                    setSelectedFrom("From");
                                }}>Confirm</button>
                    </div>
                    <button className="btn btn-primary btn-lg rounded-full mt-5"
                            onClick={()=>{/* UPDATE AVAILABILITY ( SEND TO SERVER ) */}}>Update</button>

                </div>
            </div>
        </div>

    );


    function AvailabilityBar({schedule}) {
        const removeAvailability = () => {
            setCurrentDaySchedules(currentDaySchedules.filter(s => s !== schedule));
        }
        return(
            <div className="bg-primary flex flex-row rounded-lg my-3">
                <h2 className="grow self-center text-lg mx-7 text-white tracking-normal">
                {schedule.start_time.toString().padStart(2, '0')} : 00 - {schedule.end_time.toString().padStart(2, '0')} : 00
                </h2>
                <button className="btn btn-primary hover:bg-red-500" onClick={removeAvailability}>REMOVE</button>
                
            </div>
        );
    }

    function TimeSelectionBar({setSelectedFrom, setSelectedTo}) {
        const selectionsForFrom = __excludeFromSelectedTime(currentDaySchedules);
        const selectionsForTo = __excludeToSelectedTime(currentDaySchedules);
        return(
            <>
                <select className="select w-full max-w-xs" value={selectedFrom} onChange={e => {setSelectedFrom(e.target.value);setSelectedTo("To")}}>
                    <option disabled selected >From</option>
                    {selectionsForFrom.map((selectionForFrom)=>
                        <option>{selectionForFrom.toString().padStart(2, '0')}:00</option>
                    )}
                </select>
    
                <select className="select w-full max-w-xs m-5" value={selectedTo} disabled={selectedFrom === 'From'} onChange={e => setSelectedTo(e.target.value)}>
                    <option disabled selected>To</option>
                    {selectionsForTo.map((selectionForTo)=>
                        <option>{selectionForTo.toString().padStart(2, '0')}:00</option>
                    )}
                </select>
            </>
        );
    }

    // UTILITIES FUNCTION

    function __excludeFromSelectedTime(todayAvailabilities){
        var dateList = [];
        for (let hour = 0; hour <= 22; hour++) {

            let include = true;
            for(let i = 0; i < todayAvailabilities.length; i++){
                if(hour >= todayAvailabilities[i].start_time && hour < todayAvailabilities[i].end_time){
                    include = false;
                    break;
                }
            }
            if(include){
                dateList.push(hour);
            }
        }
        return dateList;     
    }

    function __excludeToSelectedTime(todayAvailabilities){
        var dateList = [];
        let selectedFromDate = parseInt(selectedFrom.split(':')[0]);

        let earliestTime = 23;
        for (let i = 0; i < todayAvailabilities.length; i++) {
            if (todayAvailabilities[i].start_time >= selectedFromDate) {
                if (todayAvailabilities[i].start_time < earliestTime) {
                    earliestTime = todayAvailabilities[i].start_time;
                }
            }
        }

        for(let i = selectedFromDate; i <= earliestTime; i= i + 1 ){
            dateList.push(i);
            if(i === earliestTime){
                break;
            }
        }
        dateList.shift();
        return dateList;
    }


}




