import React from 'react';
import {useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DocNavbar from '../components/doctorNavbar';
import {useNavigate} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const iconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '3 rem',
    }
}

export default function DoctorProfileViewPage () {
    let navigate = useNavigate();
    const [doctor, setDoctor] = useState(null);
    const { user } = useAuthContext();
    useEffect(() => {
        const fetchDoctor = async () => {
            const response = await fetch('/api/profile/', {
                headers: {'Authorization': `Bearer ${user.token}`},
            });
            const json = await response.json();
            console.log('able to fetch json: ', json)
            if (response.ok) {
                setDoctor(json);
                console.log('able to set Doctor: ', doctor)
            }
        };
        if (user) {
            fetchDoctor();
        }
    }, []);

    const DoctorInfo ={
        doctorProfilePic:"https://placeimg.com/160/160/any",
        doctorName:"Dr.Kim",
        doctorEmail:"kim@gmail.com",
        doctorPhone:"012-3456789",
        doctorWorkingExperience:"xxxxxx",
        doctorWorkingHospital:"xxxx",
        doctorWorkingHospitalAddress:"xxx",
        doctorWorkingHoursStart:"09:00 AM",
        doctorWorkingHoursEnd:"08:00 PM",
    };

    return (
    <div>
        <DocNavbar></DocNavbar>

        {/*============================ BACK BUTTON TO DASHBOARD============================ */}
        <div className=' p-3 flex justify-start ml-20 space-x-5'>
            <button type="button" onClick={()=>{navigate("/viewpatientlist")} }className="w-11 h-11 flex-wrap justify-center text-sm text-white bg-primary rounded-lg  ">
                {<ArrowBackIosIcon sx={iconStyle}/>}
            </button> 
        </div>
        <div className="mt-5" >
            <img src={DoctorInfo.doctorProfilePic} alt="" className="absolute ml-48 w-30 h-30 rounded-lg"/>
            <div className="flex flex-row justify-center space-x-1 form-control ">
                <div className=" ml-20 mr-10 flex space-y-2 w-1/3 form-control ">
                    <p className='text-xl text-black font-semibold block'>Name: {DoctorInfo.doctorName}</p>
                    <p className='text-xl text-black font-semibold block'>Email: {DoctorInfo.doctorEmail}</p>
                    <p className='text-xl text-black font-semibold block'>Phone: {DoctorInfo.doctorPhone}</p>
                    <p className='text-xl text-black font-semibold block'>Working Experience: {DoctorInfo.doctorWorkingExperience}</p>
                    <p className='text-xl text-black font-semibold block'>Working Hospital: {DoctorInfo.doctorWorkingHospital}</p>
                    <p className='text-xl text-black font-semibold block'>Working Hospital Address: {DoctorInfo.doctorWorkingHospitalAddress}</p>
                    <p className='text-xl text-black font-semibold block'>Working hours start at: {DoctorInfo.doctorWorkingHoursStart}</p>
                    <p className='text-xl text-black font-semibold block'>Working hours end at: {DoctorInfo.doctorWorkingHoursEnd}</p>
                </div>
            </div>
            <div className=' mt-20 flex justify-center'>
            <button type="button" onClick={()=>{navigate("/doctorprofileform")} }className="w-32 h-9 ml-20 mr-40 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary">
                    Update profile</button>
        </div>  
        </div>
    </div>
        


    )    

}