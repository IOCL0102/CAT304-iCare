import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import MedicationIcon from '@mui/icons-material/Medication';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export default function Navbar(){
    return(
        <div className='fixed top-0 left-0 h-screen w-16 
                        m-0 flex flex-col text-white bg-primary
                        shadow-lg'>
            <NavbarIcon icon={<HomeIcon />} text="Home"/>
            <NavbarIcon icon={<CalendarMonthIcon />} text="Appointments"/>
            <NavbarIcon icon={<MedicationIcon />} text="Treatment"/>
            <NavbarIcon icon={<NotificationsIcon />} text="Notifications"/>
            <NavbarIcon icon={<AssignmentIndIcon/>} text="Profile"/>
            <NavbarIcon icon={<LogoutIcon />} text="Logout"/>
        </div>
    );
};

const NavbarIcon = ({icon, text}) => (
    <div className='navbar--icon group'>
        {icon}
        <span className='navbar--text group-hover:scale-100'>
            {text}
        </span>
    </div>
);
