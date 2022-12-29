import React from "react";
import LPNavbar from "../components/LPNavbar";
import LPCard from "../components/LPCard";
import icare from "../images/iCare.png"
import LPHomeImg from "../images/LandingPage-Home-img.png"
import LPAboutImg from "../images/LandingPage-About-img.png"
import Register from "../images/Register.png"
import MedRem from "../images/Medicine-reminder.png"
import Services from "../images/Services.png"
import MedicationIcon from '@mui/icons-material/Medication';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const iconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '10rem',
    }
}


export default function LandingPage(){
    return(
        <div>
            <LPNavbar />

            <div className="landing-page-header pb-20 flex flex-nowrap">
                <span className="w-1/2 p-20 pt-10">
                    <h1 className="text-5xl font-bold m-10 text-primary">A Centralised Health Care Solution for Everyone</h1>
                    <p className="m-10 text-xl">One-stop shop for all the healthcare solutions you need within a click.</p>
                    <a className="btn bg-primary text-white m-10"><img src={Register}/>Schedule Now</a>
                </span>
                <span>
                    <img className="items-end m-20 mt-0"src={LPHomeImg} width='400px'/>
                </span>
            </div>

            <div className="landing-page-about-us flex flex-nowrap">
                <span className="w-3/4 p-20 pt-10">
                    <h1 className="text-5xl font-bold m-10 text-primary">About Us</h1>
                    <p className="m-10 text-xl">iCare is a digital healthcare platform, bringing easier and more 
                        affordable access to people with easy and cost-effective access to 
                        Malaysia’s top healthcare and other providers in the country.</p>
                    <p className="m-10 text-xl">We believe that the the future of healthcare is digital and together 
                        with our medical health providers will provide you with better 
                        health care service at more affordable cost.</p>
                </span>
                <span>
                    <img className="items-end m-20 mt-0 pr-10" src={LPAboutImg} width='400px'/>
                </span>
            </div>

            <div className="p-20">
                <div><h1 className="text-5xl font-bold m-10 text-primary">Our Services</h1></div>
                <div className="flex flex-nowrap justify-center my-20">
                     <LPCard
                        image = {<MedicationIcon sx={iconStyle}/>}
                        title = "Medicine Intake Reminder"
                    />
                    <LPCard 
                        image = {<MonitorHeartIcon sx={iconStyle}/>}
                        title = "Single click to search available healthcare service"
                    />
                    <LPCard 
                        image = {<CalendarTodayIcon sx={iconStyle}/>}
                        title = "Book medical appointment online" 
                    />
                </div>
                <div className="flex flex-nowrap">
                    <span>
                        <img className="p-10 w-max" src={MedRem} />
                    </span>
                    <span className="p-10">
                        <h1 className="text-5xl text-black font-bold mb-20" >Medicine Intake Reminder</h1>
                        <p className="text-xl my-5">You will never forget to take medicines ever again.</p>
                        <p className="text-xl">Your will receive notifications when it is time for you to take your medicines.</p>
                    </span>
                </div>
                <div className="flex flex-nowrap p-10 pt-36">
                    <span className="w-1/2">
                        <h1 className="text-5xl text-black font-bold mb-20">Find nearby clinics, hospital or pharmacies with just a simple click!</h1>
                        <p className="text-xl my-5">Display nearby opening clinics and available booking time together with the pricing details with services provided.</p>
                    </span>
                    <span>
                        <img className="p-10 w-max" src={Services}/>
                    </span>
                </div>
            </div>

            <div>
                <h1 className="text-5xl font-bold m-10 text-primary text-center">Testimonials by Patients</h1>
                <h4 className="m-10 text-xl text-center">Let our users tell you their experience in using our platform!</h4>
                <div className="flex mx-5 justify-center mb-32">
                    <div className="card w-96 bg-white shadow-xl mx-3">
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                            <span className="flex flex-nowrap">
                                <figure><img className="rounded-full w-16 h-16 mx-10 mb-2" src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
                                <div>
                                    <h3 className="font-bold text-primary text-base">Ali bin Mohamed</h3>
                                    <h5 className="text-sm">Product Designer</h5>
                                </div>
                            </span> 
                    </div>
                    <div className="card w-96 bg-white shadow-xl mx-3">
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                            <span className="flex flex-nowrap">
                                <figure><img className="rounded-full w-16 h-16 mx-10 mb-2" src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
                                <div>
                                    <h3 className="font-bold text-primary text-base">Ali bin Mohamed</h3>
                                    <h5 className="text-sm">Product Designer</h5>
                                </div>
                            </span> 
                    </div>
                    <div className="card w-96 bg-white shadow-xl mx-3">
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                            <span className="flex flex-nowrap">
                                <figure><img className="rounded-full w-16 h-16 mx-10 mb-2" src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
                                <div>
                                    <h3 className="font-bold text-primary text-base">Ali bin Mohamed</h3>
                                    <h5 className="text-sm">Product Designer</h5>
                                </div>
                            </span> 
                    </div>
                </div>
            </div>
                <footer className="footer p-10 bg-base-200 text-base-content">
                    <div>
                        <span className="flex">
                            <img className="w-16" src= {icare}/>
                            <h2 className="text-5xl mx-5">iCare</h2>
                        </span>
                        <p>There’s nothing in this story to make us think we are dreaming of good health.</p>
                    </div> 
                    <div>
                        <span className="footer-title">Contact Us</span> 
                        <a className="link link-hover">+60123456789</a> 
                        <a className="link link-hover">info@klinik24.com</a>
                    </div> 
                    <div className="footer footer-center p-4 bg-base-200 text-base-content ">
                        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                    </div>
                </footer>
        </div>
    );
}