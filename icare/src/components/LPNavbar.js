import React from "react"
import iCare from "../images/iCare.png"
import Register from "../images/Register.png"

export default function LPNavbar (){
    return(
        <div className="navbar bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Our Services</a></li>
                        <li><a>Testimonial</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className="mx-5" src={iCare} width="50px" />iCare</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Our Services</a></li>
                <li><a>Testimonial</a></li>
                </ul>
            </div>
            <div className="navbar-end mt-3">
                <a className="btn bg-primary text-white rounded-full border-none"><img src={Register}/>Register</a>
                <a className="btn bg-secondary text-white mx-5 rounded-full border-none"><img src={Register}/>Login</a>
            </div>
        </div>
    ); 
}