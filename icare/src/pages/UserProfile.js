import React from 'react';
import { useState } from 'react';
import Notification from './Notification';
import Navbar from '../components/Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Oxygen from '../images/Oxygen Cylinder_1.png'
import FAK from '../images/first aid kit_1.png'
const Create = () => {
    const[title, setTitle] = useState('hello')
}

const IconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '20rem',
    }
}

export default function UserProfile(){
    return(
        <div className='ml-20 h-max'>
            <Navbar />
            <h1 className='text-5xl text-primary font-bold pt-16 pl-10 mb-20'>User Profile</h1>
            <div className='flex m-0'>
                <span className='text-center w-2/5 mt-32'>
                    <AccountCircleIcon sx={IconStyle}/>
                    <div>
                        <h2 className='text-5xl text-black font-semibold text-center mt-10'>Hello Tom Cat!</h2>
                    </div>
                    <div>
                        <img src={FAK} />
                    </div>
                </span>
                <span>
                    <h2 className='text-5xl text-black font-semibold mb-20'>Edit Your Profile Here</h2>
                    <form>
                        <label className='text-2xl text-black font-semibold block'>Name</label>
                        <input className='bg-white border-2 rounded-lg border-gray-400' type='text' placeholder="Tom Cat"/>
                        <label className='text-2xl text-black font-semibold block'>IC Number</label>
                        <input className='bg-white border-2 rounded-lg border-gray-400' type='text' placeholder="910101-07-2311"/>
                        <label className='text-2xl text-black font-semibold block'>Email</label>
                        <input className='bg-white border-2 rounded-lg border-gray-400' type='text' placeholder="tom@gmail.com"/>
                        <label className='text-2xl text-black font-semibold block'>Mobile Phone</label>
                        <input className='bg-white border-2 rounded-lg border-gray-400' type='text' placeholder="016-342323"/>
                        <label className='text-2xl text-black font-semibold block'>Gender</label>
                        <select className='bg-white border-2 rounded-lg border-gray-400'>
                            <option placeholder="Male">Male</option>
                            <option placeholder="Female">Female</option>
                        </select>
                        <label className='text-2xl text-black font-semibold block'>Birthdate</label>
                        <input className='bg-white border-2 rounded-lg border-gray-400' type="date"/>
                        <label className='text-2xl text-black font-semibold block'>Address</label>
                        <textarea className='w-full bg-white border-2 rounded-lg border-gray-400'></textarea>
                        <label className='text-2xl text-black font-semibold block'>Height</label>
                        <input className='bg-white border-2 rounded-lg border-gray-400' type='text' placeholder="65kg" />
                        <label className='text-2xl text-black font-semibold block'>Weight</label>
                        <input className='bg-white border-2 rounded-lg border-gray-400' type='text' placeholder="172cm" />
                        <label className='text-2xl text-black font-semibold block'>Allergies</label>
                        <textarea className='w-full bg-white border-2 rounded-lg border-gray-400'></textarea>
                        <button className="btn btn-wide bg-primary my-10 text-white">Save</button>
                    </form>
                </span>
                <span>
                    <img src={Oxygen} />
                </span>
            </div>
        </div>

    );
}