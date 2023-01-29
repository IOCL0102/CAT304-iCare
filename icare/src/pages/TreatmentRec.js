import { useEffect, useState } from "react";
import { Pagination2 } from "../components/Pagination";
import Navbar from "../components/Navbar";

// dummy data
var treatmentInfoTable = [
    {
        facilityName: "1 Penang General Hospital",
        disease: "diabetes",
        treatment: "Insulin injection",
        description: "If a dog chews shoes whose shoes does he choose?",
        estimatedFee: 180
    },
    {
        facilityName: "2 heart attack General Hospital ( for validation )",
        disease: "heart attack",
        treatment: "Body Check",
        description: "If a dog chews shoes whose shoes does he choose?",
        estimatedFee: 190
    },
    {
        facilityName: "3 Insomnia General Hospital",
        disease: "Insomnia",
        treatment: "Medical checkup",
        description: "If a dog chews shoes whose shoes does he choose?",
        estimatedFee: 100
    },
    {
        facilityName: "4 Perak General Hospital",
        disease: "diabetes",
        treatment: "Insulin injection",
        description: "If a dog chews shoes whose shoes does he choose?",
        estimatedFee: 120
    },
    {
        facilityName: "5 Kedah General Hospital",
        disease: "diabetes",
        treatment: "Insulin injection",
        description: "If a dog chews shoes whose shoes does he choose?",
        estimatedFee: 150
    },
    {
        facilityName: "6 Terengganu General Hospital",
        disease: "diabetes",
        treatment: "Insulin injection",
        description: "If a dog chews shoes whose shoes does he choose?",
        estimatedFee: 160
    },
    {
        facilityName: "7 Simpang Pulai General Hospital",
        disease: "diabetes",
        treatment: "Insulin injection",
        description: "If a dog chews shoes whose shoes does he choose?",
        estimatedFee: 190
    },
    {
        facilityName: "8 Taiping General Hospital",
        disease: "diabetes",
        treatment: "Insulin injection",
        description: "If a dog chews shoes whose shoes does he choose?",
        estimatedFee: 250
    },
];
treatmentInfoTable.push(...treatmentInfoTable);
treatmentInfoTable.push(...treatmentInfoTable);
treatmentInfoTable.push(...treatmentInfoTable);
treatmentInfoTable.push(...treatmentInfoTable);

export default function TreatmentRec(){
    const [treatmentCardInfo, setTreatmentCardInfo] = useState(treatmentInfoTable);
    const [searchBarVal, setSearchBarVal] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        setTreatmentCardInfo(treatmentInfoTable.filter(data=>data.disease.toLowerCase().includes(searchBarVal.toLowerCase())))
    }, [searchBarVal]);

    const cardsPerPage = 9;
    let lastCardIndex = currentPage * cardsPerPage;
    let firstCardIndex = lastCardIndex - cardsPerPage;
    let currentCards = treatmentCardInfo.slice(Math.max(0,firstCardIndex), Math.min(lastCardIndex, treatmentCardInfo.length));

    return(
        <div className="flex flex-col ml-16 border-spacing-12 border border-slate-400 table-auto border-separate">
            <Navbar />
            <h1 className="m-10 mb-5 font-bold text-4xl">Treatment Recommendation</h1>
            <input className="m-10 my-3 p-3 pl-5 rounded-full drop-shadow-xl"
            type="text" placeholder="Search here ( example: Diabetes )" onChange={(e)=>setSearchBarVal(e.target.value)}></input>

                {currentCards.length>0 ?
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 m-5 gap-5">
                        {currentCards.map((treatmentData, index)=>
                            <TreatmentCard key={index} treatmentData={treatmentData} />)}
                    </div>
                    : (<div className="m-10 p-10"> <h1 className="text-center text-3xl">-----  TREATMENT NOT FOUND  ------</h1> </div>)
                }

            <Pagination2 totalCardsCount={treatmentCardInfo.length} setPageFunc={setCurrentPage} 
                        currentPage={currentPage} cardsPerPage={cardsPerPage} />
        </div>
    );
}

const TreatmentCard = ({treatmentData}) => {
    return(
        <div className="card max-w-sm bg-base-100 shadow-xl hover:outline hover:outline-blue-300">
            <div className="card-body">
                <h2 className="card-title bg-sky-100 text-xl p-3 rounded-2xl">{treatmentData.facilityName}</h2>
                <div>
                    <h3 className="font-semibold inline">Treatment : </h3>
                    <h3 className="inline">{treatmentData.treatment}</h3>
                </div>
                
                <h3 className="font-semibold">Description :</h3>
                <p>{treatmentData.description}</p>

                <div>
                    <h3 className="font-semibold inline">Estimated Fee : </h3>
                    <h3 className="inline">RM {treatmentData.estimatedFee}</h3>
                </div>

                <div className="card-actions justify-center mt-5">
                    <button className="btn btn-primary">Make Appointment</button>
                </div>
            </div>
        </div>
    );
}