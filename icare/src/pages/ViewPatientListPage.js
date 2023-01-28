import React from 'react';
import DocNavbar from '../components/doctorNavbar';
import NotiUserBar from '../components/NotificationProfile';
import { useState,useEffect } from 'react';
import ReactPaginate from "react-paginate";
import {useNavigate} from 'react-router-dom';

const iconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '3 rem',
    }
}

export default function ViewPatientListPage (){
    const patientInfoTable =[
       {
        patientID:1,
        patientName: "Simfrferfon Alix",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:2,
        patientName: "aa Alix",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:3,
        patientName: "Simon Alix",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:4,
        patientName: "Simon Alix",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:5,
        patientName: "Abu",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:6,
        patientName: "Abdsdsu",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:7,
        patientName: "Abdsdsu",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:8,
        patientName: "Abdsdsu",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:9,
        patientName: "Abdsdsu",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:10,
        patientName: "Abdsdsu",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:11,
        patientName: "Abdsdsu",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:12,
        patientName: "Abdsdsu",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:13,
        patientName: "Abdsdsu",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:14,
        patientName: "Abdsdsu",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:15,
        patientName: "Abdsdsu",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:16,
        patientName: "zoe",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
       {
        patientID:17,
        patientName: "ryan",
        patientProfilePic:"https://placeimg.com/160/160/any",
       },
    ];

    const [patientCardInfo, setpatientCardInfo] = useState(patientInfoTable); 
    const [searchPatient, setSearchPatient] = useState("");

    useEffect(()=>{
        setpatientCardInfo(patientInfoTable.filter(data=>data.patientName.toLowerCase().includes(searchPatient.toLowerCase())))
    }, [searchPatient]);

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 15;
    const pagesVisited = pageNumber * usersPerPage;
  
    const displayUsers = patientCardInfo.slice(pagesVisited, pagesVisited + usersPerPage).map((patientCardInfo) => {
        return (
            <div className='mr-10 ml-20 flex-col'>           
                <button type="button" class="w-56 h-48 p-8 ml-50 justify-items-center text-sm font-medium text-black bg-secondary rounded-lg border border-secondary hover:bg-secondary">
                <img src={patientCardInfo.patientProfilePic} alt="" class="realtive ml-8 w-24 h-24 rounded-lg"/>{patientCardInfo.patientName}</button>
            </div>
        );
      });
  
    const pageCount = Math.ceil(patientCardInfo.length / usersPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

    
    let navigate = useNavigate();
    return (
        <div>
            <DocNavbar/>
            <NotiUserBar/>  
            {/*============================ SEARCH FUNCTION ============================ */}
            <form class="flex items-center ml-20">   
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-96">
                    <input type="text" placeholder="Search patient" class="text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 block w-full pl-10 p-2.5 "
                     onChange={(e)=>setSearchPatient(e.target.value)}/>
                </div>
            </form>
            {/*============================ HEADING & ADD NEW PATIENT BUTTON ============================ */}
            <div className =' ml-20 mr-10 place-content-between flex p-2'>
                <h1 className="items-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Patient List</h1>
                <div className='flex items-end'>
                    <button type="button" onClick={()=>{navigate("/addnewpatientList")} } class="w-40 h-10 ml-30 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary">Add new patient</button>
                </div>  
            </div>

            {/*============================ DISPLAY PATIENT CARD ============================ */}
            <div className="ml-0 mr-20 grid grid-cols-5 gap-4">
                {displayUsers}
            </div>
            
            {/*============================ PAGINATION ============================ */}
            <div className=' mt-5 ml-20 mr-40 flex justify-center'> 
                <ReactPaginate
                previousLabel={"<" }
                nextLabel={">"} 
                pageCount={pageCount}
                onPageChange={changePage} 
                containerClassName={"paginationBttns"} 
                previousLinkClassName={"previousBttn"} 
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
            </div>
        </div>
        
    )
}


