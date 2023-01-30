import React, { useCallback, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function Appointment() {
    const navigate = useNavigate()
    const { state } = useLocation()
    const { facility_name, doctors } = state || {};
    const [selectedValue, setSelectedValue] = useState(' ');
    const [selectedDoctorId, setSelectedDoctorId] = useState(" ");
    var today = new Date()
    const [date, setDate] = useState(today.toISOString().split('T')[0]);
    const [starttime, setStartime] = useState(0)
    const [description, setDescription] = useState(" ")
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { user } = useAuthContext()
    const createRequest = async (data) => {
        setIsLoading(true)
        setError(null)
        
        console.log(JSON.stringify(data))
        const response = await fetch('/api/requests', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
    
        if(!response.ok){
          setIsLoading(false)
          setError(json.error)
        }else{
          setIsLoading(false)
        }
      }

    
    const handleChange = (event) => {
        setSelectedValue(event.target.value)
        const selectedDoctor = doctors.find(doctor => doctor.name === event.target.value);
        setSelectedDoctorId(selectedDoctor._id);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            date: date,
            time_slot:{
                start_time: starttime,
                end_time: starttime+1
            },
            description: description,
            doctor_id: selectedDoctorId
        }
        
        if(user){
            await createRequest(data);
            alert('Request is submitted');
            navigate('/logindashboard')
        }

    };

    return(
        <div>
            <Navbar />
            <div className="ml-20">
                <h1 className='text-5xl text-primary font-bold pt-16 pl-10 mb-20'>Appointments</h1>
                <div>
                    <form onSubmit={handleSubmit} className = "pl-10">
                        <label>
                            <span className="text-2xl text-black font-semibold block">Location:</span>
                            <p className='bg-white border-2 rounded-lg border-gray-400 p-2 text-gray-700'>
                                {facility_name}
                            </p>
                        </label>
                        <label>
                            <span className="text-2xl text-black font-semibold block">Preferred Date:</span>
                            <input className='bg-white border-2 rounded-lg border-gray-400 mx-5' type="date" onChange={(e) => setDate(e.target.value)} value={date} required />
                        </label>
                        <label>
                            <span className="text-2xl text-black font-semibold block">Preferred Startime (24-hour):</span>
                            <input className='bg-white border-2 rounded-lg border-gray-400 mx-5' type="number" onChange={(e) => setStartime(e.target.value)} value={starttime} max="23" required />
                        </label>
                        <label>
                            <span className="text-2xl text-black font-semibold block">Purpose of Appointment:</span>
                            <input className='bg-white border-2 rounded-lg border-gray-400' type="text" onChange={(e) => setDescription(e.target.value)} value={description} required />
                        </label>
                        <label>
                            <span className="text-2xl text-black font-semibold block">Preferred Doctor:</span>
                            <select value={selectedValue} onChange={handleChange}>
                                {doctors.map(doctor => (
                                <option key={doctor._id} value={doctor.name}>
                                    {doctor.name}
                                </option>
                                ))}
                            </select>
                        </label>
                        <div>
                            <input type="submit" disabled={isLoading}></input>
                            {error && <div className="text-red-500">{error}</div>}
                        </div>
                    </form>
                </div>
            </div>

        </div>
        

    )
}