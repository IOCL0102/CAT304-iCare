import React from 'react';
import DocNavbar from '../components/doctorNavbar';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const iconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '3 rem',
    }
}

export default function AddNewPatient () {
    return (
    <div>
        <DocNavbar/>
        <div className=' p-3 flex justify-start ml-20 space-x-5'>
            <button type="button" class="w-11 h-11 flex-wrap justify-center text-sm text-white bg-primary rounded-lg  ">
                {<ArrowBackIosIcon sx={iconStyle}/>}
            </button> 
             <h1 className='p-2 text-2xl text-black font-semibold block'>Adding New Patient</h1>
        </div>

        <div className=" mt-15 ml-20 mr-10 flex flex-row space-x-1 form-control ">
            <div className="bg-blue-500 ml-20 mr-10 flex space-y-1 w-1/3 form-control ">
                <label className='text-xl text-black font-semibold block'>Name</label>
                <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' type='text' placeholder="John Coe"/>
            </div>
            
            <div className="bg-red-400 w-1/2 ml-20 mr-64  flex-row place-items-stretch  form-control ">
                <div className=" ml-20 mr-10  space-y-1 w-1/3 form-control ">
                    <label className='text-xl text-black font-semibold block'>Birthdate</label>
                    <input className='bg-white border-2 width-3 rounded-lg border-gray-400' type='date' />
                </div>

                <div className=" ml-20 mr-10  space-y-1 w-1/3 form-control">
                    <label className='text-xl text-black font-semibold block'>Age</label>
                    <input className='bg-white border-2 rounded-lg border-gray-400' type='number' min="0" max="110"/>
                </div>

                

            </div> 
        </div>  
        
        <div className=" mt-8 ml-20 mr-10 flex flex-row space-x-5 form-control ">
            <div className="bg-yellow-500 ml-20 mr-10 flex space-y-1 w-1/3 form-control ">
                <label className='text-xl text-black font-semibold block'>IC No.</label>
                <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' type='text' placeholder="0561590-08-0598"/>
            </div>
            
            <div className=" bg-red-500 ml-18 mr-10 pl-16 flex space-y-1 form-control">
                    <label className='text-xl text-black font-semibold block'>Gender</label>
                    <select className='bg-white border box-content h-9 w-20 rounded-lg  border-black'> 
                    <option>Male</option>
                    <option>Female</option>
                    </select> 
            
            </div> 
            <div className=" bg-blue-500 ml-20 mr-10 flex flex-row  form-control">
            <div className=" ml-20 mr-10  space-y-1 w-1/5 form-control">
                    <label className='text-xl text-black font-semibold block'>Height(cm)</label>
                    <input className='bg-white border-2 rounded-lg border-gray-400' type='number' min="0" max="110"/>
            </div>

            <div className=" ml-20 mr-10  space-y-1 w-1/5 form-control">
                    <label className='text-xl text-black font-semibold block'>Weight(kg)</label>
                    <input className='bg-white border-2 rounded-lg border-gray-400' type='number' min="0" max="110"/>
            </div>
            </div>
            </div>
            

        <div className=" mt-8 ml-20 mr-10 flex flex-row form-control ">
            <div className=" ml-20 mr-10 flex space-y-1 w-1/3 form-control ">
                <label className='text-xl text-black font-semibold block'>Phone No.</label>
                <input className='bg-white border-2 rounded-lg border-gray-400' type='text' placeholder="010-8526597"/>
            </div>
            <div className=" ml-20 mr-10 flex space-y-1 w-1/3 form-control">
                <label className='text-xl text-black font-semibold block'>Email Address</label>
                <input className='bg-white border-2 rounded-lg border-gray-400' type='text' placeholder="icare@gmail.com"/>
            </div>
        </div> 

         <div className=" mt-8 ml-20 mr-10 flex flex-row form-control ">
            <div className=" ml-20 mr-10 flex space-y-1 w-1/3 form-control ">
                <label className='text-xl text-black font-semibold block'>Address</label>
                <input className='bg-white border-2 h-12 rounded-lg border-gray-400' type='text' placeholder="kampung"/>
            </div>
            <div className=" ml-20 mr-10 flex space-y-1 w-1/3 form-control">
                <label className='text-xl text-black font-semibold block'>Medical Allergies</label>
                <input className='bg-white border-2 h-12 rounded-lg border-gray-400' type='text' placeholder="peanut allergy"/>
            </div>
        </div>    
            <div className='flex justify-center mt-8'>
            <button type="submit" className="flex justify-center text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Submit</button>

            </div>
    </div>
        


    )    

}