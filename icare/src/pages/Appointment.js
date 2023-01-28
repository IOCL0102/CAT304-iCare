import React, { useCallback, useState } from "react";

export default function Appointment() {
        return(
        <div>
            <div className="ml-20">
                <h1 className='text-5xl text-primary font-bold pt-16 pl-10 mb-20'>Appointments</h1>
                <div>
                    <form className = "pl-10" onSubmit={ handleSave }>
                        <label>
                            <span className="text-2xl text-black font-semibold block">Location:</span>
                            <input className='bg-white border-2 rounded-lg border-gray-400' type="text" required />
                        </label>
                        <label>
                            <span className="text-2xl text-black font-semibold block">Preferred Time:</span>
                            <input className='bg-white border-2 rounded-lg border-gray-400' type="text" required />
                        </label>
                        <label>
                            <span className="text-2xl text-black font-semibold block">Purpose of Appointment:</span>
                            <input className='bg-white border-2 rounded-lg border-gray-400' type="text" required />
                        </label>
                        <label>
                            <span className="text-2xl text-black font-semibold block">Preferred Doctor:</span>
                            <input className='bg-white border-2 rounded-lg border-gray-400' type="text" required />
                        </label>
                        <input type="submit" />
                    </form>
                </div>
            </div>

        </div>
        

    )
}