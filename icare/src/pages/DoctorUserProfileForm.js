import React from 'react';
import {useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function DoctorUserProfilePage () {
    let navigate = useNavigate();

    const doctors ={
        name:"",
        email:"",
        phone_number:"",
        working_experience:"",
        hospital_id:{
            facility_name:"",
            address:"",
        },
        working_hours:{
            start_time:"",
            end_time:"",
        },
    };

    const [formValues, setFormValues]= useState(doctors);
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

        if (!values.name) {
            errors.name = "Name is required.";
        }
        if (!values.email) {
            errors.email = "Email address is required.";
        }else if (!emailregex.test(values.email)) {
          errors.email = "This is not a valid email format.";
        }

        if (!values.phone_number) {
            errors.phone_number = " Phone no. is required.";
        } else if (!phoneregex.test(values.phone_number)){
            errors.phone_number = "This is not a valid phone format.";
        }

        if (!values.working_experience) {
            errors.working_experience = "Please enter your working experience.";
          }
       
        if (!values.facility_name) {
            errors.facility_name = "Please enter your working hospital name.";
        }
        if (!values.address) {
            errors.address = "Please enter your working hospital address.";
        }
        if (!values.start_time) {
            errors.start_time = "Please enter your start working hours";
        }
        if (!values.end_time) {
            errors.end_time = "Please enter your end working hours";
        }
        
        return errors;
      };


    return (
    <div>
        <div className=' p-3 flex justify-start ml-20 space-x-5'>
            <button className="btn btn-primary" onClick={()=>{navigate(-1)}}>GO BACK</button>
        </div>

        <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-center space-x-1 form-control ">
                <div className=" ml-20 mr-10 flex space-y-2 w-1/3 form-control ">
                    <h1 className='text-xs text-black font-semibold block'>Please fill in this form to create account</h1>
                    <label className='text-xl text-black font-semibold block'>Name</label>
                    <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                    type='text' name="name" onChange={handleChange}/>
                    <p className= 'text-red-500  font-medium text-xs'>{formErrors.name}</p>

                    <label className='text-xl text-black font-semibold block'>Email</label>
                    <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                    type='email' name="email" onChange={handleChange}/>
                    <p className= 'text-red-500  font-medium text-xs'>{formErrors.email}</p>

                    <label className='text-xl text-black font-semibold block'>Mobile Phone</label>
                    <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                    type='tel' name="phone_number"  onChange={handleChange}/>
                    <p className= 'text-red-500  font-medium text-xs'>{formErrors.phone_number}</p>

                    <label className='text-xl text-black font-semibold block'>Working Experience</label>
                    <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                    type='text' name="doctorWorkingExperience" onChange={handleChange}/>
                    <p className= 'text-red-500  font-medium text-xs'>{formErrors.working_experience}</p>

                    <label className='text-xl text-black font-semibold block'>Working Hospital</label>
                    <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                    type='text' name="facility_name" onChange={handleChange}/>
                    <p className= 'text-red-500  font-medium text-xs'>{formErrors.facility_name}</p>

                    <label className='text-xl text-black font-semibold block'>Working Hospital Address</label>
                    <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                    type='text' name="address" onChange={handleChange}/>
                    <p className= 'text-red-500  font-medium text-xs'>{formErrors.address}</p>

                    <label className='text-xl text-black font-semibold block'>Working Hours</label>
                    <div className='text-xl mt-2 flex flex-row'>
                        <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                        type='time' name="start_time" onChange={handleChange}/> 
                       
                    <p className= ' text-black p-2 font-medium items-center text-xl'>to</p>
                        
                        <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                        type='time' name="end_time" onChange={handleChange}/></div>
                        <div className='flex flex-row'>
                            <div className= 'text-red-500 font-medium text-xs'>{formErrors.start_time}</div>
                            <div className= 'ml-28 text-red-500 font-medium text-xs'>{formErrors.end_time}</div>
                        </div>    
                </div>    
            </div> 
            <div className='flex justify-center mt-8'>
                <button type="submit" className="btn btn-primary">
                Submit</button>
            </div>

        </form>
    </div>
        


    )    

}