import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const iconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '3 rem',
    }
}

export default function SearchBar (){
    return (

        <div>
            

            <div className="absolute right-20 space-x-4">
                    <button type="button" class="p-1 ml-30 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:secondary">{<NotificationsIcon sx={iconStyle}/>}
                    </button>
                    <button type="button" class="text-black bg-gray-50 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Dr.xxx</button>
                    
            </div>
           

            
        </div>
    )
}