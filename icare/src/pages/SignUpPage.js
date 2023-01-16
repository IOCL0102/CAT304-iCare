import React from "react";
import icare from "../images/iCare.png"
import oxygenCylinder from "../images/Oxygen Cylinder_2.png"
import pharmacy from "../images/pharmacy_1.png"
import stethoscope from "../images/stethoscope.png"

export default function SignUpPage (){
    return(
    <div> 
        <a href="#" className="flex items-center mb-6 text-5xl font-bold text-gray-900 dark:text-white">
        <img className="items-end m-10 mt-10" src={icare} width="80px"/> 
        iCare </a>
        <div className="flex flex-col items-center justify-start px-6 py-8 mx-auto md:h-screen lg:py-0">
            <img src={stethoscope} alt="" class="pt-72 absolute inset-0 w-auto h-auto object-cover rounded-lg"/>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-600 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign Up</h1>
                <h2 className="text-0.5xl font-light leading-tight tracking-tight text-gray-900 md:text-1xl dark:text-white">Please fill in this form to create account</h2>

                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required=""/>
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <div>
                        <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>

                    <div>
                        <label for="account-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select account type</label>
                        <div class="w-full flex space-x-3">
                            <label class="text-sm font-semibold text-white my-1 flex items-center mr-4 px-5 py-2.5 bg-primary rounded-lg">
                            <input type="radio" name="radio-example" class="mr-2 w-4 h-4" />
                            <span>Doctor / Pharmacist</span>
                            </label>
                            <label class="text-sm font-semibold text-white my-1 flex items-center mr-4 px-5 py-2.5 bg-primary rounded-lg">
                            <input type="radio" name="radio-example" class="mr-2 w-4 h-4"/>
                            <span>Normal user</span>
                            </label>
                        </div>   
                    </div>
                    
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                        </div>
                        <div className="ml-3 text-sm">
                          <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                        <button type="submit" className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Create an account</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="#" className="font-medium text-primary hover:underline dark:text-primary">Login here</a>
                        </p>
                </form>           
            </div>
        </div>
    </div>
    </div>
 )
}