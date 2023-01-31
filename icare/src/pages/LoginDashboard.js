import React from "react";
import Navbar from "../components/Navbar";

export default function LoginDashboard() {  
    return(
        <div className="ml-20">
            <Navbar />
            <div className="flex flex-nowrap">
                <span className="w-3/5">
                    <h1 className="text-5xl text-black font-bold m-10">Welcome back Tom!</h1>
                </span>
                
            </div>
            <div>
                <span>
                    <div className="border-solid flex flex-shrink-0 flex-nowrap w-1/2 mb-20">
                        <div className="text-3xl text-black font-semibold">
                            <h2 className="m-10">Your Profile</h2>
                            <span className="flex flex-shrink-0">
                                <img src= "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png" className="rounded-full w-72 flex-shrink-0"/>
                                <span className="text-xl text-black font-semibold m-5 ml-16">
                                    <h2>Name: Tom Cat</h2>
                                    <h2>Age: 34</h2>
                                    <h2>I/C: 910101-07-2311</h2>
                                    <h2>Birth Date: 1/1//1991</h2>
                                    <h2>Phone No: 016-342323</h2>
                                    <h2>Email Address: tom@gmail.com</h2>
                                    <h2>Address: No. 48A, Jalan 10/118B, Desa Tun Razak, Kuala Lumpur, 56000</h2>
                                    <h2>Weight: 65kg</h2>
                                    <h2>Height: 172cm</h2>
                                    <h2>Allergies: "lactoce intolerance", "pollen"</h2>
                                </span>
                            </span>
                            
                        </div>                        
                    </div>
                    <div>
                        <div className="bg-white overflow-y-scroll overflow-x-hidden border-2 border-r-0 border-sky-200 rounded-2xl ">
                            <span className="items-stretch">
                                <h2 className="m-10 text-3xl text-black font-semibold">Past Medical Records</h2>
                                <div className="ml-40 mr-40 flex flex-col">
                                    <div className=" sm:-mx-6 lg:-mx-8">
                                        <div className="  py-4 inline-block min-w-full sm:px-6 lg:px-8">
                                            <div >
                                                <table class="min-w-full text-center">
                                                    <thead class="border-b bg-gray-800">
                                                        <tr>
                                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4 w-1/5">Date</th>
                                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">Medical Record</th>
                                                        </tr>
                                                    </thead >
                                                </table>
                                                <div> 
                                                    <tr className=" flex flex-row border-b ">
                                                    <td className="px-6 py-4 w-1/3 ml-20  whitespace-nowrap text-sm font-medium text-gray-900">2023-01-28</td>
                                                        <div className='flex flex-col space-y-1'>
                                                        <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Observation: High blood sugar level</td>
                                                        <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Treatment Given: Complete blood test and take insulin injection</td>
                                                        <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Presciption: paracetamol,amoxycilin </td>
                                                        </div>
                                                    </tr >
                                                    <tr className=" flex flex-row border-b ">
                                                    <td className="px-6 py-4 w-1/3 ml-20  whitespace-nowrap text-sm font-medium text-gray-900">2023-01-25</td>
                                                        <div className='flex flex-col space-y-1'>
                                                        <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Observation: Cough, Fever, fatigue</td>
                                                        <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Treatment Given: Taken X-ray, complete blood test and covid test</td>
                                                        <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Presciption: dizopam </td>
                                                        </div>
                                                    </tr >
                                                </div>  
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </span>
                <span>
                    <div className="overflow-y-scroll overflow-x-hidden border-2 border-r-0 border-sky-200 rounded-2xl mt-5">
                        <div className="flex flex-nowrap items-stretch ">
                            <h2 className="m-10 text-3xl text-black font-semibold">Upcoming Appointments</h2>
                            <button className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 self-center">View All</button>
                        </div>
                        <div className='py-3' style={{height: '35rem'}}>
                            {/* {patientLists.map((patientList)=>(
                                <PatientsBar key={patientList._id} data={patientList}/>
                            ))} */}

                            <div className='flex flex-row rounded-xl px-3 py-2 active:scale-105 cursor-pointer 
                            hover:bg-sky-100'>
                                <div className="mask mask-circle h-11 w-11 ml-2 mr-5 self-center shrink-0">
                                    <img src="https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png" className='object-fill' />
                                </div>

                                <div className='grow mr-5'>
                                    <h1 className='text-lg font-base '>Tom Cat</h1>
                                    <h3 className='text-sm p-2 pl-0'> Appointment with Dr Ooi </h3>
                                </div>

                                <div className="justify-end self-center shrink-0">
                                    <h3 className="font-base text-sm text-blue-600 bg-blue-200 rounded-2xl px-3 text-justify tracking-tight py-3">14 : 00</h3>
                                </div>
                            </div>
                            <div className='flex flex-row rounded-xl px-3 py-2 active:scale-105 cursor-pointer 
                            hover:bg-sky-100'>
                                <div className="mask mask-circle h-11 w-11 ml-2 mr-5 self-center shrink-0">
                                    <img src="https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png" className='object-fill' />
                                </div>

                                <div className='grow mr-5'>
                                    <h1 className='text-lg font-base '>Tom Cat</h1>
                                    <h3 className='text-sm p-2 pl-0'> Appointment with Dr Chong</h3>
                                </div>

                                <div className="justify-end self-center shrink-0">
                                    <h3 className="font-base text-sm text-blue-600 bg-blue-200 rounded-2xl px-3 text-justify tracking-tight py-3">16 : 00</h3>
                                </div>
                            </div>
                            <div className='flex flex-row rounded-xl px-3 py-2 active:scale-105 cursor-pointer 
                            hover:bg-sky-100'>
                                <div className="mask mask-circle h-11 w-11 ml-2 mr-5 self-center shrink-0">
                                    <img src="https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png" className='object-fill' />
                                </div>

                                <div className='grow mr-5'>
                                    <h1 className='text-lg font-base '>Tom Cat</h1>
                                    <h3 className='text-sm p-2 pl-0'> Appointment with Dr Liew</h3>
                                </div>

                                <div className="justify-end self-center shrink-0">
                                    <h3 className="font-base text-sm text-blue-600 bg-blue-200 rounded-2xl px-3 text-justify tracking-tight py-3">19 : 00</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}
