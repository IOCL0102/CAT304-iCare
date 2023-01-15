import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

// Require to install below dependency before using this
/* 
    npm install @mui/material @emotion/react @emotion/styled
    npm install @mui/x-date-pickers
    npm install date-fns
*/

// highlightedDays is an array of Date object
/*  Example:
    highlightDays =
    [
        new Date("2023-01-14"),
        new Date("2023-02-28"),
        new Date("2023-01-30")
    ]
*/

export default function Calendar({highlightedDays}){
    const [value, setValue] = useState(new Date());
    return (
            {
            currentSelectionDate: value,
            Calender: <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className='w-max h-max'>
                <StaticDatePicker
                    orientation="portrait"
                    openTo="day"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />} 
                    renderDay={(day, _value, DayComponentProps) => {
                        const isSelected = !DayComponentProps.outsideCurrentMonth && highlightedDays.some((highlightedDay) => {
                            return (
                                highlightedDay.getFullYear() === day.getFullYear() &&
                                highlightedDay.getMonth() === day.getMonth() &&
                                highlightedDay.getDate() === day.getDate() 
                            );
                            });

                
                        return (
                        <Badge
                            key={day.toString()}
                            overlap="circular"
                            badgeContent={isSelected ? '🔴' : undefined}
                        >
                            <PickersDay {...DayComponentProps} />
                        </Badge>
                        );
                    }}
                />
                </div>  
            </LocalizationProvider>
        }
  );
};
