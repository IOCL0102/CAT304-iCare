import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Appointment from "../pages/Appointment";
import Navbar from "./Navbar";

export default function LocationMap() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const [facilities, setFacilities] = useState(FacilityItems);
  //const { user } = useAuthContext();

  async function getHospitals() {
    await getLocation();
    console.log(latitude, longitude)
    const coordinates = {latitude: latitude, longitude: longitude}
    // const response = await fetch('/api/hospitals/bynearest', {
    //     method: 'POST',
    //     body: JSON.stringify(coordinates),
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${user.token}`
    //     }
    // })
    // const json = await response.json()
    // console.log(json)
  }

  useEffect(() => {
    getHospitals();
  }, []);

  const getLocation = () => {
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

const Card = ({ facilityName, facilityDistance, fee }) => {
    // const handleclick = () => {
    //     //pass necessary data to appointment page
    //     return (
    //         <Appointment />
    //     )
    //   }

    return (
        <div className="bg-primary rounded-full h-20 my-5 flex">
            <div className="text-white">
                <h2 className="ml-10">{facilityName}</h2>
                <p className="ml-10">{facilityDistance} km away</p>
                <p className="ml-10">Estimated Fee: RM{fee}</p>
            </div>
            <div className="bg-white rounded-lg h-8 content-center ml-48 mt-5">
                <Link to="/Appointment/Details" className="ml-5 text-center justify-center text-primary">Make Appointment</Link>
                {/* <button onClick={ handleclick } className="ml-5 text-center justify-center text-primary">Make Appointment</button> */}
            </div>
        </div>
    );
}

const CardList = ({ items }) => {
    return (
        <div>
            {items.map((item) => {
                return <Card key={item.id} facilityName={item.name} facilityDistance={item.distance} fee={item.fee} />;
            })}
        </div>
    );
};

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