import React from "react";
import icare from "../images/iCare.png"
import pill from "../images/pills.png"
import {useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from "../hooks/useAuthContext";

export default function LoginPage() {
    let navigate = useNavigate();
    const { login, error, isLoading } = useLogin()
    const { user } = useAuthContext();

   const loginInfo ={
    userEmail: "",
    userPassword: "",
    userAccountType: "",
   };

    const [formValues, setFormValues]= useState(loginInfo);
    const [formErrors, setFormErrors]= useState({});
    const [isSubmit, setIsSubmit]= useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        // login: interact with server
        await login(formValues.userEmail, formValues.userPassword, formValues.userAccountType)
        setIsSubmit(true);

        // after login successfull
        // only go to dashboards based on usertype
        if(!error && Object.keys(formErrors).length === 0){
            // console.log(`Should navigate to another to ${user.type} page for ${user.email}`)
            switch(user.type){
                case 'doctor':
                    // doctor dashboard
                    navigate("/Dashboard")
                    break;
                case 'patient':
                    // patient dashboard
                    navigate("/LoginDashboard")
                    break;
                default:
                    console.log(`Invalid type: ${user.type}`)
                    break;
            }
        }
      };
    
      // can remove the useffect
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

        if (!values.userPassword) {
            errors.userPassword = "Please enter your password.";
        } 
        
        if (!values.userAccountType ) {
            errors.userAccountType = "Please select account type.";
        }
        return errors;
     };

    return (
        <div>
            <a href="#" className=" flex items-center mb-6 text-5xl font-bold text-gray-900">
            <img className="items-end m-10 mt-10" src={icare} width="80px"/> 
            iCare
            </a>
            {/* image blocking the input field selection */}
            {/* <img className=" pt-36 pl-8 absolute inset-0 w-auto h-auto object-cover rounded-lg -z-1" src={pill} width="80px"/>  */}
            
            <div className=" flex flex-col items-center pl-72 justify-start px-6 py-8  mx-auto md:h-screen lg:py-0">
                <div className="flex items-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-3 md:space-y-3 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Login</h1>
                <h2 className="text-0.5xl font-light leading-tight tracking-tight text-gray-900 md:text-1xl">
                    Login with the data you entered during your registration</h2>
            
                <form onSubmit={handleSubmit}>
                <label className="  block mb-2 text-sm font-medium text-gray-900">Select account type</label>
                        <div className="w-full flex space-x-3">
                            <label className="text-sm font-semibold text-white my-1 flex items-center mr-4 px-5 py-2.5 bg-primary rounded-lg">
                            <input type="radio" className="mr-2 w-4 h-4" value="doctor" name="userAccountType"  onChange={handleChange}/>
                            <span>Doctor</span>
                            </label>
                            
                            <label className="text-sm font-semibold text-white my-1 flex items-center mr-4 px-5 py-2.5 bg-primary rounded-lg">
                            <input type="radio" className="mr-2 w-4 h-4" value="patient" name="userAccountType" onChange={handleChange}/>
                            <span>Patient</span>
                            </label>
                            
                        </div>   
                        <p className= 'text-red-500  font-medium text-xs'>{formErrors.userAccountType}</p>
                        <div className="space-y-3 mt-1" >
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" name="userEmail" onChange={handleChange} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" 
                            placeholder="name@company.com" required=""/>
                            <p className= 'text-red-500  font-medium text-xs'>{formErrors.userEmail}</p>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="userPassword" onChange={handleChange} id="password" placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" required=""/>
                            <p className= 'text-red-500  font-medium text-xs'>{formErrors.userPassword}</p>
                        </div>

                        <div className=" mt-2 flex pl-64 justify-between">
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button type="submit" disabled={isLoading} className="w-full mt-3 text-white bg-primary hover:bg-primary 
                         font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        {error && <div className="text-red-500">{error}</div>} 
                        <p className="text-sm font-light text-gray-500">
                        Don’t have an account yet? <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
            </form>
        </div>
    </div>
    
</div>
</div>
    )


}