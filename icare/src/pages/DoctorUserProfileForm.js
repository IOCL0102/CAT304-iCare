import React from 'react';
import {useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from 'react-router-dom';

const iconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '3 rem',
    }
}

export default function DoctorUserProfilePage () {
    let navigate = useNavigate();

    const DoctorInfo ={
        doctorProfilePic:"https://placeimg.com/160/160/any",
        doctorName:"",
        doctorEmail:"",
        doctorPhone:"",
        doctorWorkingExperience:"",
        doctorWorkingHospital:"",
        doctorWorkingHospitalAddress:"",
        doctorWorkingHoursStart:"",
        doctorWorkingHoursEnd:"",
    };

    const [formValues, setFormValues]= useState(DoctorInfo);
    const [formErrors, setFormErrors]= useState({});
    const [isSubmit, setIsSubmit]= useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
    
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
    
      const validate = (values) => {
        const errors = {};
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const phoneregex = /^\d{10}$/;

        if (!values.doctorName) {
            errors.doctorName = "Name is required.";
        }
        if (!values.doctorEmail) {
            errors.doctorEmail = "Email address is required.";
        }else if (!emailregex.test(values.doctorEmail)) {
          errors.doctorEmail = "This is not a valid email format.";
        }

        if (!values.doctorPhone) {
            errors.doctorPhone = " Phone no. is required.";
        } else if (!phoneregex.test(values.doctorPhone)){
            errors.doctorPhone = "This is not a valid phone format.";
        }

        if (!values.doctorWorkingExperience) {
            errors.doctorWorkingExperience = "Please enter your working experience.";
          }
       
        if (!values.doctorWorkingHospital) {
            errors.doctorWorkingHospital = "Please enter your working hospital name.";
        }
        if (!values.doctorWorkingHospitalAddress) {
            errors.doctorWorkingHospitalAddress = "Please enter your working hospital address.";
        }
        if (!values.doctorWorkingHoursStart) {
            errors.doctorWorkingHoursStart = "Please enter your start working hours";
        }
        if (!values.doctorWorkingHoursEnd) {
            errors.doctorWorkingHoursEnd = "Please enter your end working hours";
        }
        
        return errors;
      };


    return (
    <div>
        <div className=' p-3 flex justify-start ml-20 space-x-5'>
            <button type="button" onClick={()=>{navigate("/doctorprofileview")} }class="w-11 h-11 flex-wrap justify-center text-sm text-white bg-primary rounded-lg  ">
                {<ArrowBackIosIcon sx={iconStyle}/>}
            </button> 
        </div>

        <form onSubmit={handleSubmit}>
            <img src={DoctorInfo.doctorProfilePic} alt="" class="absolute ml-48 w-30 h-30 rounded-lg"/>
            <div className="flex flex-row justify-center space-x-1 form-control ">
                <div className=" ml-20 mr-10 flex space-y-2 w-1/3 form-control ">
                    <h1 className='text-xs text-black font-semibold block'>Please fill in this form to create account</h1>
                    <label className='text-xl text-black font-semibold block'>Name</label>
                    <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                    type='text' name="doctorName" onChange={handleChange}/>
                    <p className= 'text-red-500  font-medium text-xs'>{formErrors.doctorName}</p>

                    <label className='text-xl text-black font-semibold block'>Email</label>
                    <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                    type='email' name="doctorEmail" onChange={handleChange}/>
                    <p className= 'text-red-500  font-medium text-xs'>{formErrors.doctorEmail}</p>

                    <label className='text-xl text-black font-semibold block'>Mobile Phone</label>
                    <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                    type='tel' name="doctorPhone"  onChange={handleChange}/>
                    <p className= 'text-red-500  font-medium text-xs'>{formErrors.doctorPhone}</p>

                    <label className='text-xl text-black font-semibold block'>Working Experience</label>
                    <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                    type='text' name="doctorWorkingExperience" onChange={handleChange}/>
                    <p className= 'text-red-500  font-medium text-xs'>{formErrors.doctorWorkingExperience}</p>

                    <label className='text-xl text-black font-semibold block'>Working Hospital</label>
                    <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                    type='text' name="doctorWorkingHospital" onChange={handleChange}/>
                    <p className= 'text-red-500  font-medium text-xs'>{formErrors.doctorWorkingHospital}</p>

                    <label className='text-xl text-black font-semibold block'>Working Hospital Address</label>
                    <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                    type='text' name="doctorWorkingHospitalAddress" onChange={handleChange}/>
                    <p className= 'text-red-500  font-medium text-xs'>{formErrors.doctorWorkingHospitalAddress}</p>

                    <label className='text-xl text-black font-semibold block'>Working Hours</label>
                    <div className='text-xl mt-2 flex flex-row'>
                        <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                        type='time' name="doctorWorkingHoursStart" onChange={handleChange}/> 
                       
                    <p className= ' text-black p-2 font-medium items-center text-xl'>to</p>
                        
                        <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                        type='time' name="doctorWorkingHoursEnd" onChange={handleChange}/></div>
                        <div className='flex flex-row'>
                            <div className= 'text-red-500 font-medium text-xs'>{formErrors.doctorWorkingHoursStart}</div>
                            <div className= 'ml-28 text-red-500 font-medium text-xs'>{formErrors.doctorWorkingHoursEnd}</div>
                        </div>
                         
                   
                </div>      
            </div> 
            <div className='flex justify-center mt-8'>
                <button type="submit" className="flex justify-center text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Submit</button>
            </div>

        </form>
    </div>
        


    )    

}