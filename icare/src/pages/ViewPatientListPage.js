import React from 'react';
import DocNavbar from '../components/doctorNavbar';
import NotiUserBar from '../components/NotificationProfile';
import { useState,useEffect } from 'react';
import ReactPaginate from "react-paginate";
import {useNavigate} from 'react-router-dom';
import patientprofileMedicalRecord from './PatientProfileMedicalRecord';
//import { useAuthContext } from '../hooks/useAuthContext';

export default function ViewPatientListPage (){
    
    /*const [patient, setPatient] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)
    const { user } = useAuthContext();

    const fetchPatient = async () => {
        // starting the fetch request
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/patients/', {
            headers: {'Authorization': `Bearer ${user.token}`},
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }else{
            // setPatient({...patient, json});
            setPatient(json)

            setIsLoading(false)
        }
        
    };

    useEffect(() => {
        if(user){
            fetchPatient();
        } 
    }, []);

    if (isLoading) {
        return (
            <div>

                <p> Loading .. </p>
            /*</div>
        )
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        )
    }

    if (!patient){
        return (
            <div>
                <p> Patient details unable to fetched </p>
            </div>
        )
    }
    */
    
    const patientInfoTable =[
       {
        patientID:1,
        name: "Tom Cat",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:2,
        name: "Muhamed Haji",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:3,
        name: "Hii Wok Pu",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:4,
        name: "Kundan Lal Murugeson a/l Shankar Sekhar",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:5,
        name: "Bella Koch",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:6,
        name: "Bryant",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:7,
        name: "Armando Taylor",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:8,
        name: "Mona Lee Yew Ming",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:9,
        name: "Jean Lee",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:10,
        name: "Zhong Li",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:11,
        name: "Jeremy Wong Xiao Li",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:12,
        name: "Simon Lee Kok Sing",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:13,
        name: "David Joe",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:14,
        name: "Bella Wong Li Pui",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:15,
        name: "Ahmad Ali Muhammad",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:16,
        name: "Zoe Loh",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
       {
        patientID:17,
        name: "Ryan Lee",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
       },
    ];

    const [patientCardInfo, setpatientCardInfo] = useState(patientInfoTable); 
    const [searchPatient, setSearchPatient] = useState("");

    useEffect(()=>{
        setpatientCardInfo(patientInfoTable.filter(data=>data.name.toLowerCase().includes(searchPatient.toLowerCase())))
    }, [searchPatient]);

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 15;
    const pagesVisited = pageNumber * usersPerPage;
  
    const displayUsers = patientCardInfo.slice(pagesVisited, pagesVisited + usersPerPage).map((patientCardInfo) => {
        return (
            <div className='mr-10 ml-20 flex-col'>           
                <button type="button" onClick={()=>{navigate("/patientprofilemedicalrecord")} } class="w-56 h-48 p-8 ml-50 justify-items-center text-sm font-medium text-black bg-secondary rounded-lg border border-secondary hover:bg-secondary">
                <img src={patientCardInfo.photo} class="realtive ml-8 w-24 h-24 rounded-lg"/>{patientCardInfo.name}</button> 
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
            {/*============================ HEADING  ============================ */}
            <div className =' ml-20 mr-10 place-content-between flex p-2'>
                <h1 className="items-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Patient List</h1>
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