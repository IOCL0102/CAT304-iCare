import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {useNavigate} from 'react-router-dom';

const iconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '3 rem',
    }
}

export default function SearchBar (){
    let navigate = useNavigate();
    return (
        <div>
           <div className="absolute mt-2 right-20 space-x-4">
                    <button type="button" class="p-1 ml-30 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:secondary">{<NotificationsIcon sx={iconStyle}/>}
                    </button>
                    <button onClick={()=>{navigate("/doctorprofileview")}}type="button" class="text-black bg-gray-50 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Dr.xxx</button>             
            </div>     
        </div>
    )
}