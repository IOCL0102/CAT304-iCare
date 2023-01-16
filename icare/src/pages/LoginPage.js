import React from "react";
import icare from "../images/iCare.png"
import pill from "../images/pills.png"

export default function LoginPage() {
   
    return (
        <div>
            <a href="#" className=" flex items-center mb-6 text-5xl font-bold text-gray-900 dark:text-white">
            <img className="items-end m-10 mt-10" src={icare} width="80px"/> 
            iCare
            </a>
            <img className=" pt-36 pl-8 absolute inset-0 w-auto h-auto object-cover rounded-lg" src={pill} width="80px"/> 
            <div className=" flex flex-col items-center pl-72 justify-start px-6 py-8  mx-auto md:h-screen lg:py-0">
                <div class="flex items-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-3 md:space-y-3 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Login</h1>
                <h2 className="text-0.5xl font-light leading-tight tracking-tight text-gray-900 md:text-1xl dark:text-white">Login with the data you entered during your registration</h2>
                
                <label for="account-type" className="  block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select account type</label>
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


                <form class="space-y-3 md:space-y-6" action="#">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                <div class="flex pl-64 justify-between">
                    <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="submit" class="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Sign in</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
            </form>
        </div>
    </div>
</div>
</div>
    )


}