import React from 'react';
import Appointments from '../images/Appointments.png'
import Home from '../images/Home.png'
import Logout from '../images/Logout.png'
import Notifications from '../images/Notifications.png'
import Patient from '../images/Patient.png'
import Treatment from '../images/Treatment.png';

export default function Navbar(){
    return(
        <div className='fixed top-0 left-0 h-screen w-16 
                        m-0 flex flex-col text-white bg-primary
                        shadow-lg'>
            <NavbarIcon icon={Home} text="Home"/>
            <NavbarIcon icon={Appointments} text="Appointments"/>
            <NavbarIcon icon={Treatment} text="Treatment"/>
            <NavbarIcon icon={Notifications} text="Notifications"/>
            <NavbarIcon icon={Logout} text="Logout"/>
        </div>
    );
};

const NavbarIcon = ({icon, text}) => (
    <div className='navbar--icon group'>
        <img src={icon} />
        <span className='navbar--text group-hover:scale-100'>
            {text}
        </span>
    </div>
);
