import React from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Link } from 'react-router-dom';

export default function DocNavbar(){
    return(
        <div className='fixed top-0 left-0 min-h-full w-16 z-50
                        m-0 flex flex-col text-white bg-primary
                        shadow-lg '>
            <NavbarIcon icon={<DashboardIcon />} text="Dashboard"/>
            <NavbarIcon icon={<CalendarMonthIcon />} text="Appointments"/>
            <NavbarIcon icon={<PermContactCalendarIcon />} text="Patients"/>
            <NavbarIcon icon={<NotificationsIcon />} text="Notifications"/>
            <NavbarIcon icon={<LogoutIcon />} text="Logout"/>
        </div>
    );
};

const NavbarIcon = ({icon, text}) => (
    <Link to= {"/" + text}>
        <div className='navbar--icon group'>
                {icon}
                <span className='navbar--text group-hover:scale-100 z-50'>
                    {text}
                </span>
        </div>
    </Link>
);
