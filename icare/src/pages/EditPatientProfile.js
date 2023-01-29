import React from 'react';
import DocNavbar from '../components/doctorNavbar';
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from 'react-router-dom';

const iconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '3 rem',
    }
}

export default function EditPatientProfile () {
    let navigate = useNavigate();
    const initialPatientInfo ={
        patientName:"",
        patientBirthdate:"",
        patientAge:"",
        patientIC:"",
        patientGender:"",
        patientHeight:"",
        patientWeight:"",
        patientEmail:"",
        patientPhone:"",
        patientAddress:"",
        patientMedicalAllergies:"",
    };

    const [formValues, setFormValues]= useState(initialPatientInfo);
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
        const icregex = /^[0-9]{6}-[0-9]{2}-[0-9]{4}$/;

        if (!values.patientName) {
            errors.patientName = "Patient name is required.";
        }
        if (!values.patientBirthdate) {
            errors.patientBirthdate = "Patient birthdate is required.";
        } 
        if (!values.patientAge) {
            errors.patientAge = "Patient age is required.";
        } else if (values.patientAge <0 || values.patientAge>110){
            errors.patientAge = "Please enter a valid age for patient";
        }
        if (!values.patientIC) {
          errors.patientIC = "Patient Ic no. is required.";
        } else if (!icregex.test(values.patientIC)){
            errors.patientIC = "This is not a valid IC no. format.";
        }
        if (!values.patientGender) {
            errors.patientGender = "Patient gender is required.";
          }
        if (!values.patientPhone) {
            errors.patientPhone = "Patient Phone no. is required.";
        } else if (!phoneregex.test(values.patientPhone)){
            errors.patientPhone = "This is not a valid phone format.";
        }
        if (!values.patientAddress) {
            errors.patientAddress = "Patient address is required.";
        }
        if (!values.patientMedicalAllergies) {
            errors.patientMedicalAllergies = "Please enter any medical allergies of the patient.";
        }
        if (!values.patientEmail) {
            errors.patientEmail = "Patient email address is required.";
        }else if (!emailregex.test(values.patientEmail)) {
          errors.patientEmail = "This is not a valid email format.";
        }
        return errors;
      };

    return (
    <div>
        <DocNavbar/>
        <div className=' p-3 flex justify-start ml-20 space-x-5'>
            <button type="button" onClick={()=>{navigate("/viewpatientList")} } class="w-11 h-11 flex-wrap justify-center text-sm text-white bg-primary rounded-lg  ">
                {<ArrowBackIosIcon sx={iconStyle}/>}
            </button> 
             <h1 className='p-2 text-2xl text-black font-semibold block'>Adding New Patient</h1>
        </div>

        <form onSubmit={handleSubmit}>
            <div className=" mt-15 ml-20 mr-10 flex flex-row space-x-1 form-control ">
                <div className=" ml-20 mr-10 flex space-y-1 w-1/3 form-control ">
                    <label className='text-xl text-black font-semibold block'>Name</label>
                    <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                    type='text' name="patientName" onChange={handleChange}/>
                    <p className= 'text-red-500'>{formErrors.patientName}</p>
                </div>
                
            
            <div className=" w-1/2 ml-20 mr-64  flex-row place-items-stretch  form-control ">
                <div className=" ml-20 mr-10  space-y-1 w-1/3 form-control ">
                    <label className='text-xl text-black font-semibold block'>Birthdate</label>
                    <input className='bg-white border-2 width-3 rounded-lg border-gray-400' 
                    type='date' name="patientBirthdate" onChange={handleChange} />
                    <p className= 'text-red-500'>{formErrors.patientBirthdate}</p>
                </div>

                <div className=" ml-20 mr-10  space-y-1 w-1/3 form-control">
                    <label className='text-xl text-black font-semibold block'>Age</label>
                    <input className='bg-white border-2 rounded-lg border-gray-400' 
                    type='number' min="0" max="110" name="patientAge" onChange={handleChange}/>
                    <p className= 'text-red-500'>{formErrors.patientAge}</p>
                </div>
            </div> 
            </div>  
        
            <div className=" mt-8 ml-20 mr-10 flex flex-row space-x-5 form-control ">
                    <div className=" ml-20 mr-10 flex space-y-1 w-1/3 form-control ">
                        <label className='text-xl text-black font-semibold block'>IC No.</label>
                        <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                        type='text' name="patientIC" onChange={handleChange}/>
                        <p className= 'text-red-500'>{formErrors.patientIC}</p>
                    </div>
                
                <div className="  ml-18 mr-10 pl-16 flex space-y-1 form-control">
                        <label className='text-xl text-black font-semibold block'>Gender</label>
                        <select className='bg-white border box-content h-9 w-20 rounded-lg  border-black '
                        name="patientGender" onChange={handleChange}>
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                        </select> 
                        <p className= 'text-red-500'>{formErrors.patientGender}</p>
                </div> 

                <div className="  ml-20 mr-10 flex flex-row  form-control">
                    <div className=" ml-20 mr-10  space-y-1 w-1/5 form-control">
                            <label className='text-xl text-black font-semibold block'>Height(cm)</label>
                            <input className='bg-white border-2 rounded-lg border-gray-400' 
                            type='number' min="0" max="200" name="patientHeight" onChange={handleChange}/>
                            
                    </div>

                    <div className=" ml-20 mr-10  space-y-1 w-1/5 form-control">
                            <label className='text-xl text-black font-semibold block'>Weight(kg)</label>
                            <input className='bg-white border-2 rounded-lg border-gray-400' 
                            type='number' min="0" max="110" name="patientWeight" onChange={handleChange}/>
                            
                    </div>
                </div>
            </div>
            

            <div className=" mt-8 ml-20 mr-10 flex flex-row form-control ">
                <div className=" ml-20 mr-10 flex space-y-1 w-1/3 form-control ">
                    <label className='text-xl text-black font-semibold block'>Phone No.</label>
                    <input className='bg-white border-2 rounded-lg border-gray-400' 
                    type='text' name="patientPhone" onChange={handleChange}/>
                    <p className= 'text-red-500'>{formErrors.patientPhone}</p>
                    
                </div>

                <div className=" ml-20 mr-10 flex space-y-1 w-1/3 form-control">
                    <label className='text-xl text-black font-semibold block'>Email Address</label>
                    <input className='bg-white border-2 rounded-lg border-gray-400' 
                    type='text' name="patientEmail" onChange={handleChange}/>
                    <p className= 'text-red-500'>{formErrors.patientEmail}</p>
                </div>
            </div> 

            <div className=" mt-8 ml-20 mr-10 flex flex-row form-control ">
                <div className=" ml-20 mr-10 flex space-y-1 w-1/3 form-control ">
                    <label className='text-xl text-black font-semibold block'>Address</label>
                    <input className='bg-white border-2 h-12 rounded-lg border-gray-400' 
                    type='text' name="patientAddress" onChange={handleChange}/>
                    <p className= 'text-red-500'>{formErrors.patientAddress}</p>
                </div>
                <div className=" ml-20 mr-10 flex space-y-1 w-1/3 form-control">
                    <label className='text-xl text-black font-semibold block'>Medical Allergies</label>
                    <input className='bg-white border-2 h-12 rounded-lg border-gray-400' 
                    type='text' name="patientMedicalAllergies" onChange={handleChange}/>
                    <p className= 'text-red-500'>{formErrors.patientMedicalAllergies}</p>
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