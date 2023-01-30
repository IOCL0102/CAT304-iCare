import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Appointment from "../pages/Appointment";
import Navbar from "./Navbar";

export default function LocationMap() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { user } = useAuthContext()
  const [facilities, setFacilities] = useState([]);
  const getHospitals = async () => {
    setIsLoading(true)
    setError(null)
    await getLocation();
    const coordinates = {latitude: latitude, longitude: longitude}
    const response = await fetch('/api/hospitals/bynearest', {
        method: 'POST',
        body: JSON.stringify(coordinates),
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
      setFacilities(json)
      setIsLoading(false)
    }
  }

  useEffect(() => {

    if(user){
      getHospitals();
    }
  }, [latitude]);
  // I don't know why adding longitude into dependency works, just go with it

  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("Geolocation not supported by this browser.");
    }
  };
  
  const getCoordinates = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };
  
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyCbVwvTxr8bTZjB05w3BPzcV6glviKNB-o"
  });
  if(!isLoaded) return <div>Map is still loading...</div>

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

  if (!facilities){
    return (
        <div>
            <p> Hospital details unable to fetched </p>
        </div>
    )
  }

  return (
    <div className="flex flex-nowrap">
        <div className="w-1/2 ml-16">
            <GoogleMap
                zoom={14}
                center={{ lat: latitude, lng: longitude }}
                mapContainerClassName="map-container"
            >
            <Marker position={{ lat: latitude, lng: longitude }} />
            </GoogleMap>
        </div>
        <Navbar />
        <div className="w-1/2 pl-10">
            <h2 className="text-3xl text-primary font-bold pt-16 mb-20">List of Hospitals and Clinics Nearby</h2>
            <CardList items={facilities} />
        </div>
    </div>
  );
}

const CardList = ({ items }) => {
  // console.log(items)
    return (
        <div>
            {items && items.map((item) => {
                return <Card key={item._id} facility_name={item.facility_name} distance={Math.ceil(item.distance*100)/100} doctors={item.doctors} />;
            })}
        </div>
    );
};

const Card = ({facility_name, distance, doctors}) => {
  // const handleclick = () => {
  //     //pass necessary data to appointment page
  //     return (
  //         <Appointment />
  //     )
  //   }
  const navigate = useNavigate()

  const passProps = async(event) =>{
    event.preventDefault();

    navigate('/Appointment/Details', {state: { facility_name, doctors }})
  }

  return (
      <div className="bg-primary rounded-full h-20 my-5 flex">
          <div className="text-white grow ml-10 pt-1">
              <h2>{facility_name}</h2>
              <p>{distance} km away</p>
          </div>
          <div className="bg-white rounded-full content-center my-2 ml-2 mr-5 flex flex-wrap">
              <Link
                to="/Appointment/Details"
                className="px-5 py-2 text-center justify-end text-primary"
                onClick={passProps}
              >
                Make Appointment
              </Link>
              {/* <button 
                className="px-5 py-2 text-center justify-end text-primary"
                onClick={() => <Appointment facility_name={facility_name} doctors={doctors}/>}
                > Make Appointment</button> */}
              {/* <button onClick={ handleclick } className="ml-5 text-center justify-center text-primary">Make Appointment</button> */}
          </div>
      </div>
  );
}

const FacilityItems = [
    {
        id: 1,
        name: "Penang General Hospital",
        distance: 3.0,
        fee: 80
    },
    {
        id: 2,
        name: "Penang General Hospital",
        distance: 3.0,
        fee: 80
    },
    {
        id: 3,
        name: "Penang General Hospital",
        distance: 3.0,
        fee: 80
    }
];