import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

export default function LocationMap({latitude, longitude}) {
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         setLatitude(position.coords.latitude);
    //         setLongitude(position.coords.longitude);
    //     })
    // }, [])

    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, }); 
    if(!isLoaded) return <div>Map is still loading...</div>
    return(
        <div>
            <Map lati={latitude} long={longitude}/>
        </div>
    )
}


function Map({lati, long}) {
    const center = useMemo(() => ({ lat: {lati}, lng: {long} }), [])
    return(
        <div>
            <GoogleMap zoom={10} center = {center} mapContainerClassName="map-container"></GoogleMap>
            {/* Update center props */}
            <Marker position={{lat: {lati}, lng: {long}}}/>
            {/* Update position props */}            
        </div>
    )
}