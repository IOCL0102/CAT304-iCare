import React, { useCallback, useState } from "react";
import LocationMap from "../components/LocationMap";

export default function Appointment() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handleSave = async(e) =>{
        getLocation()
        return(
            <LocationMap 
                latitude={latitude}
                longitude={longitude}
            />
        )
    }

    const getLocation = useCallback(() => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates)
        } else {
            alert("Geolocation not supported");
        }
    }, [], );

    const getCoordinates = useCallback((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
    }, [], );

    return(
        <div>
            <div className="ml-20">
                <h1>Appointments</h1>
                <div>
                    <select>
                        <option disabled>Choose your desired facility</option>
                        <option>Hospitals/Clinics</option>
                        <option>Pharmacies</option>
                    </select>
                </div>
                <div>
                    <form onSubmit={ handleSave }>
                        <label>
                            <span>Location:</span>
                            <input type="text" required />
                        </label>
                        <label>
                            <span>Preferred Time:</span>
                            <input type="text" required />
                        </label>
                        <label>
                            <span>Purpose of Appointment:</span>
                            <input type="text" required />
                        </label>
                        <label>
                            <span>Preferred Doctor:</span>
                            <input type="text" required />
                        </label>
                        <input type="submit" />
                    </form>
                </div>
            </div>

        </div>
        

    )
}