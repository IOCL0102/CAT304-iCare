import React from "react";
import Navbar from "../components/Navbar";
import iCare from "../images/iCare.png"

export default function LoginDashboard() {

    
    return(
        <div className="ml-20">
            <Navbar />
            <div className="flex flex-nowrap">
                <span className="w-3/5">
                    <h1 className="text-5xl text-black font-bold m-10">Welcome back John!</h1>
                </span>
                <span className="mx-auto w-full">
                    <form className="m-10 items-stretch">   
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative content-center">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block ml-20 w-auto h-12 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 placeholder:pl-10" placeholder="Search Hospitals and Pharmacies" required/>
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 self-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </span>
            </div>
            <div>
                <span>
                    <div className="border-solid flex flex-shrink-0 flex-nowrap w-1/2 mb-20">
                        <div className="text-3xl text-black font-semibold">
                            <h2 className="m-10">Your Profile</h2>
                            <span className="flex flex-shrink-0">
                                <img src= {iCare} className="rounded-full w-72 flex-shrink-0"/>
                                <span className="text-xl text-black font-semibold m-5">
                                    <h2>Name:</h2>
                                    <h2>Age:</h2>
                                    <h2>I/C:</h2>
                                    <h2>Birth Date:</h2>
                                    <h2>Phone No:</h2>
                                    <h2>Email Address:</h2>
                                    <h2>Address:</h2>
                                    <h2>Weight:</h2>
                                    <h2>Height:</h2>
                                    <h2>Allergies:</h2>
                                </span>
                            </span>
                            
                        </div>                        
                    </div>
                    <div>
                        <div className="bg-white ">
                            <span className="flex flex-nowrap items-stretch">
                                <h2 className="m-10 text-3xl text-black font-semibold">Past Medical Records</h2>
                                <button className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 self-center">View All</button>
                            </span>
                        </div>
                    </div>
                </span>
                <span>
                    <div>
                        {/* calendar */}
                    </div>
                    <div>
                        <div className="flex flex-nowrap items-stretch">
                            <h2 className="m-10 text-3xl text-black font-semibold">Upcoming Appointments</h2>
                            <button className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 self-center">View All</button>
                        </div>
                        <div>
                            {/* Appointment Cards */}
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}