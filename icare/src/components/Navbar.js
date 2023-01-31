import React from 'react';
import {Routes, Route} from "react-router-dom";
import { a } from 'react-router-dom';
import Notification from '../pages/Notification';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import MedicationIcon from '@mui/icons-material/Medication';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { useLogout } from '../hooks/useLogout';

export default function Navbar(){
    // handling logout when the logout icon is clicked
    const { logout } = useLogout()

    const handleLogout = () =>{
        logout()
    }

    return(
        <div className='fixed top-0 left-0 h-screen w-16 
                        m-0 flex flex-col text-white bg-primary
                        shadow-lg'>
            {<NavbarIcon icon={<HomeIcon />} text="Home" linkRef="/LoginDashboard"/>}
            {<NavbarIcon icon={<CalendarMonthIcon />} text="Appointments" linkRef="/Appointment/Map"/>}
            {<NavbarIcon icon={<MedicationIcon />} text="Treatment" linkRef="/Treatment"/>}
            {<NavbarIcon icon={<NotificationsIcon />} text="Notifications" linkRef="/PatientNotification"/>}
            {<NavbarIcon icon={<AssignmentIndIcon/>} text="Profile" linkRef="/UserProfile"/>}
            {<button onClick={handleLogout}><NavbarIcon icon={<LogoutIcon />} text="Logout" linkRef="/LandingPage"/></button>}


            {/* <NavbarIcon icon={<HomeIcon />} text="Home"/>
            <NavbarIcon icon={<CalendarMonthIcon />} text="Appointments"/>
            <NavbarIcon icon={<MedicationIcon />} text="Treatment"/>
            <NavbarIcon icon={<NotificationsIcon />} text="Notifications"/>
            <NavbarIcon icon={<AssignmentIndIcon/>} text="Profile"/>
            <NavbarIcon icon={<LogoutIcon />} text="Logout"/> */}
        </div>
    );
};

const NavbarIcon = ({icon, text, linkRef}) => (
    <Link to={linkRef}>
        <div className='navbar--icon group'>
            {icon}
            <span className='navbar--text group-hover:scale-100'>
                {text}
            </span>
        </div>
    </Link>
);
