import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const iconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '3rem',
    }
}

export default function Notification(){
    const [noti, setNoti] = useState(notiItems)
    return(
        <div className='ml-20 mr-10 h-screen'>
            <Navbar />
            <h1 className='text-5xl text-primary font-bold pt-16 pl-10 mb-20'>Notifications</h1>
            {/* pull all notification here */}
            <div>
                <NotificationList items = {noti} />
            </div>
            
        </div>
    );
}

const NotificationsComponent = ({ notificationTitle, notificationBody}) => {
    return(
        <div className="bg-primary rounded-full flex h-20 my-5">
            <span className="mx-10 mt-4">
                {<NotificationsIcon sx={iconStyle}/>}
            </span>
            <span className="mt-2">
                    <div>
                        <h2 className="text-white font-bold text-xl">{notificationTitle}</h2>
                    </div>
                    <div>
                        <p className="text-white text-lg">{notificationBody}</p>
                    </div>
                </span>
        </div>
    )
}

const NotificationList = ({items}) => {
    return(
        <div>
            {items.map((item) => {
                return <NotificationsComponent key={item.id} notificationTitle={item.notificationTitle} notificationBody = {item.notificationBody}/>;
            })}
        </div>
    )
}

const notiItems = [
    {
        id: 1, 
        notificationTitle: "Welcome to iCare!",
        notificationBody: "You have successfully created an account"
    },
]