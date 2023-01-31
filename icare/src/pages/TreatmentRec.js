import { useEffect, useState } from "react";
import { Pagination2 } from "../components/Pagination";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate()
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
                    <button onClick={() => navigate("/Appointment/Map")} className="btn btn-primary">Make Appointment</button>
                </div>
            </div>
        </div>
    );
}




var treatmentInfoTable = [
    {
      facilityName: "1 Penang General Hospital",
       disease : "diabetes",
       treatment : "Insulin injection",
       description : "If a dog chews shoes, whose shoes does he choose?",
       estimatedFee : 180
    },
    {
       facilityName : "2 Kuala Lumpur General Hospital",
      disease: "insomnia",
      treatment: "Sleep therapy",
      description: "Insomnia affects millions of people worldwide.",
      estimatedFee: 200
    },
    {
      facilityName: "3 Johor Bahru General Hospital",
      disease: "diabetes",
      treatment: "Medication",
      description: "Managing diabetes requires a healthy lifestyle and proper medication.",
      estimatedFee: 150
    },
    {
      facilityName: "4 Kota Kinabalu General Hospital",
      disease: "insomnia",
      treatment: "Cognitive behavioral therapy",
      description: "Cognitive behavioral therapy is an effective treatment for insomnia.",
      estimatedFee: 250
    },
    {
      facilityName: "5 Ipoh General Hospital",
      disease: "diabetes",
      treatment: "Diet control",
      description: "A balanced diet is essential in managing diabetes.",
      estimatedFee: 100
    },
    {
      facilityName: "6 Shah Alam General Hospital",
      disease: "insomnia",
      treatment: "Relaxation techniques",
      description: "Relaxation techniques such as meditation can help with insomnia.",
      estimatedFee: 200
    },
    {
      facilityName: "7 Kuching General Hospital",
      disease: "diabetes",
      treatment: "Exercise",
      description: "Regular exercise is important for managing diabetes.",
      estimatedFee: 150
    },
    {
      facilityName: "8 Miri General Hospital",
      disease: "insomnia",
      treatment: "Sleep hygiene",
      description: "Maintaining good sleep hygiene can help with insomnia.",
      estimatedFee: 150
    },
    {
      facilityName: "9 Georgetown General Hospital",
      disease: "diabetes",
      treatment: "Medication",
      description: "Proper medication and monitoring are crucial in managing diabetes.",
      estimatedFee: 200
    },
    {
      facilityName: "10 Alor Setar General Hospital",
      disease: "insomnia",
      treatment: "Sleep medication",
      description: "Sleep medication can be prescribed for severe cases of insomnia.",
      estimatedFee: 300
    },
    {
      facilityName: "11 Kuala Terengganu General Hospital",
      disease: "diabetes",
      treatment: "Medication",
      description: "Medication and lifestyle changes are necessary for managing diabetes.",
      estimatedFee:150
    },
    {
    facilityName: "11 Penang General Hospital",
    disease: "heart attack",
    treatment: "Angioplasty",
    description: "Early detection and treatment are crucial in avoiding serious consequences from a heart attack.",
    estimatedFee: 5000
    },
    {
    facilityName: "12 Kuala Lumpur General Hospital",
    disease: "diabetes",
    treatment: "Insulin injection",
    description: "People with heart attack history should monitor their diabetes levels closely.",
    estimatedFee: 3000
    },
    {
    facilityName: "13 Johor Bahru General Hospital",
    disease: "heart attack",
    treatment: "Bypass surgery",
    description: "Bypass surgery is a common treatment option for heart attack patients.",
    estimatedFee: 10000
    },
    {
    facilityName: "14 Kota Kinabalu General Hospital",
    disease: "diabetes",
    treatment: "Medication",
    description: "People with a family history of heart attack should monitor their diabetes levels regularly.",
    estimatedFee: 4000
    },
    {
    facilityName: "15 Ipoh General Hospital",
    disease: "heart attack",
    treatment: "Stent placement",
    description: "Stent placement is a common treatment option for heart attack patients.",
    estimatedFee: 6000
    },
    {
    facilityName: "16 Shah Alam General Hospital",
    disease: "diabetes",
    treatment: "Diet control",
    description: "Having a balanced diet can help lower the risk of heart attack in diabetic patients.",
    estimatedFee: 2500
    },
    {
    facilityName: "17 Kuching General Hospital",
    disease: "heart attack",
    treatment: "Lifestyle changes",
    description: "Making lifestyle changes such as quitting smoking and exercising regularly can lower the risk of heart attack.",
    estimatedFee: 3500
    },
    {
    facilityName: "18 Miri General Hospital",
    disease: "diabetes",
    treatment: "Exercise",
    description: "Exercise can help lower the risk of heart attack in diabetic patients.",
    estimatedFee: 2000
    },
    {
    facilityName: "19 Georgetown General Hospital",
    disease: "heart attack",
    treatment: "Medication",
    description: "Taking medication as prescribed can help prevent another heart attack.",
    estimatedFee: 5000
    },
    {
    facilityName: "20 Alor Setar General Hospital",
    disease: "diabetes",
    treatment: "Medication",
    description: "Diabetic patients should work closely with their doctors to manage their condition and lower the risk of heart attack.",
    estimatedFee: 3000
    },
]