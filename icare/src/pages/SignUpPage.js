import React from "react";
import icare from "../images/iCare.png"
import stethoscope from "../images/stethoscope.png"
import {useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function SignUpPage (){
    let navigate = useNavigate();

    const signUpInfo ={
        userName: "",
        userEmail: "",
        userPassword: "",
        userConfirmPassword: "",
        userAccountType: "",
        userTermNCondition: "",
       };
    
        const [formValues, setFormValues]= useState(signUpInfo);
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
            if (Object.keys(formErrors).length === 0) {
                navigate("/doctorprofileform");
              }

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
        
            if (!values.userEmail) {
                errors.userEmail = "Email address is required.";
            } else if (!emailregex.test(values.userEmail)) {
                errors.userEmail = "This is not a valid email format.";
            }

            if (!values.userName) {
                errors.userName = "Please enter your name.";
            } 
    
            if (!values.userPassword) {
                errors.userPassword = "Please enter your password.";
            } 
            
            if (!values.userConfirmPassword ) {
                errors.userConfirmPassword = "Please select account type.";
            } else if (values.userPassword !=values.userConfirmPassword){
                errors.userConfirmPassword = "Password not match.";
            }

            if (!values.userAccountType) {
                errors.userAccountType = "Please select your account type.";
            }

            if (!values.userTermNCondition ) {
                errors.userTermNCondition = "Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy.";
            }
            return errors;
         };
    return(
    <div> 
        <a href="#" className="flex items-center mb-6 text-5xl font-bold text-gray-900">
        <img className="items-end m-10 mt-10" src={icare} width="80px"/> 
        iCare </a>
        <div className="flex flex-col items-center justify-start px-6 py-8 mx-auto md:h-screen lg:py-0">
            <img src={stethoscope} alt="" class="pt-72 absolute inset-0 w-auto h-auto object-cover rounded-lg"/>
            
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-600 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Sign Up</h1>
                <h2 className="text-0.5xl font-light leading-tight tracking-tight text-gray-900 md:text-1xl">
                    Please fill in this form to create account</h2>

                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                        <input type="name" name="userName" className="bg-gray-50 border border-gray-300 
                        text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="John Doe" required=""
                         onChange={handleChange} />
                         <p className= 'text-red-500  font-medium text-xs'>{formErrors.userName}</p>
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" name="userEmail" className="bg-gray-50 border border-gray-300
                        text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="name@company.com" required=""
                        onChange={handleChange} />
                        <p className= 'text-red-500  font-medium text-xs'>{formErrors.userEmail}</p>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" name="userPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300
                         text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""  onChange={handleChange} />
                          <p className= 'text-red-500  font-medium text-xs'>{formErrors.userPassword}</p>
                    </div>
                    <div>
                        <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                        <input type="password" name="userConfirmPassword"  placeholder="••••••••" className="bg-gray-50 border border-gray-300
                         text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required="" onChange={handleChange}/>
                         <p className= 'text-red-500  font-medium text-xs'>{formErrors.userConfirmPassword}</p>
                    </div>

                    <div>
                        <label for="account-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select account type</label>
                        <div class="w-full flex space-x-3">
                            <label class="text-sm font-semibold text-white my-1 flex items-center mr-4 px-5 py-2.5 bg-primary rounded-lg">
                            <input type="radio" name="userAccountType" class="mr-2 w-4 h-4" onChange={handleChange} />
                            <span>Doctor / Pharmacist</span>
                            </label>
                            <label class="text-sm font-semibold text-white my-1 flex items-center mr-4 px-5 py-2.5 bg-primary rounded-lg">
                            <input type="radio" name="userAccountType" class="mr-2 w-4 h-4" onChange={handleChange}/>
                            <span>Normal user</span>
                            </label>
                        </div>   
                            <p className= 'text-red-500  font-medium text-xs'>{formErrors.userAccountType}</p>
                    </div>
                    
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded 
                          bg-gray-50 " name ="userTermNCondition" required="" onChange={handleChange}/>
                          
                        </div>
                        <div className="ml-3 text-sm">
                          <label for="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline " href="#">Terms and Conditions</a></label>
                          <p className= 'text-red-500  font-medium text-xs'>{formErrors.userTermNCondition}</p>
                        </div>
                    </div>
                        <button type="submit"  className="w-full text-white bg-primary hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Create an account </button>
                        <p className="text-sm font-light text-gray-500">
                        Already have an account? <a href="/" className="font-medium text-primary hover:underline">Login here</a>
                        </p>
                </form>           
            </div>
        </div>
    </div>
    </div>
 )
}