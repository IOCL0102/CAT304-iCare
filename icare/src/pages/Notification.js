import React from "react";
import Navbar from "../components/Navbar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const iconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '3rem',
        
    }
}

export default function Notification(){
    return(
        <div className='ml-20 mr-10 h-screen'>
            <Navbar />
            <h1 className='text-5xl text-primary font-bold pt-16 pl-10 mb-20'>Notifications</h1>
            {/* pull all notification here */}
            <div className="bg-primary rounded-full flex h-20 my-5">
                <span className="mx-10 mt-4">
                    {<NotificationsIcon sx={iconStyle}/>}
                </span>
                <span className="mt-2">
                    <div>
                        <h2 className="text-white font-bold text-xl">Title</h2>
                    </div>
                    <div>
                        <p className="text-white text-lg">Time to take your medicines! Your paracetamol is due at 12pm or before lunch</p>
                    </div>
                </span>
                <span className="mt-3 content-end">
                    <button className="bg-white text-primary rounded-full border-2 border-black font-bold m-2 w-32 h-10">Mark As Read</button>
                </span>
            </div>

            <div className="bg-secondary rounded-full flex h-20 my-5">
                <span className="mx-10 mt-4">
                    {<NotificationsNoneIcon sx={iconStyle}/>}
                </span>
                <span className="mt-2">
                    <div>
                        <h2 className="text-black font-bold text-xl">Title</h2>
                    </div>
                    <div>
                        <p className="text-black text-lg">Time to take your medicines! Your paracetamol is due at 12pm or before lunch</p>
                    </div>
                </span>
                {/* <span className="mt-3 content-end">
                    <button className="bg-white text-seconda rounded-full border-2 border-black font-bold m-2 w-32 h-10">Mark As Read</button>
                </span> */}
            </div>
        </div>
    );
}