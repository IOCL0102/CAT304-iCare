import { useEffect, useState } from "react";

export default function TreatmentRec(){
    var searchInput ;
    const treatmentInfoTable = [
        {
            facilityName: "Penang General Hospital",
            disease: "diabetes",
            treatment: "Insulin injection",
            description: "If a dog chews shoes whose shoes does he choose?",
            estimatedFee: 180
        },
        {
            facilityName: "Glugor General Hospital",
            disease: "diabetes",
            treatment: "Insulin injection",
            description: "If a dog chews shoes whose shoes does he choose?",
            estimatedFee: 190
        },
        {
            facilityName: "Ipoh General Hospital",
            disease: "diabetes",
            treatment: "Insulin injection",
            description: "If a dog chews shoes whose shoes does he choose?",
            estimatedFee: 100
        },
        {
            facilityName: "Perak General Hospital",
            disease: "diabetes",
            treatment: "Insulin injection",
            description: "If a dog chews shoes whose shoes does he choose?",
            estimatedFee: 120
        },
        {
            facilityName: "Kedah General Hospital",
            disease: "diabetes",
            treatment: "Insulin injection",
            description: "If a dog chews shoes whose shoes does he choose?",
            estimatedFee: 150
        },
        {
            facilityName: "Terengganu General Hospital",
            disease: "diabetes",
            treatment: "Insulin injection",
            description: "If a dog chews shoes whose shoes does he choose?",
            estimatedFee: 160
        },
        {
            facilityName: "Simpang Pulai General Hospital",
            disease: "diabetes",
            treatment: "Insulin injection",
            description: "If a dog chews shoes whose shoes does he choose?",
            estimatedFee: 190
        },
        {
            facilityName: "Taiping General Hospital",
            disease: "diabetes",
            treatment: "Insulin injection",
            description: "If a dog chews shoes whose shoes does he choose?",
            estimatedFee: 250
        },
    ];

    const [treatmentInfo, setTreatmentInfo] = useState(treatmentInfoTable);
    const [searchBarVal, setSearchBarVal] = useState("");

    useEffect(()=>{
        setTreatmentInfo(treatmentInfoTable.filter(data=>data.facilityName.toLowerCase().includes(searchBarVal.toLowerCase())))
    }, [searchBarVal]);

    return(
        <div className="flex flex-col ml-16 border-spacing-12 border border-slate-400 table-auto border-separate">
            <h1 className="m-10 mb-5 font-bold text-4xl">Treatment Recommendation</h1>
            <input className="m-10 my-3 p-3 pl-5 rounded-full drop-shadow-xl"
            type="text" placeholder="Search here ( example: Diabetes )" onChange={(e)=>setSearchBarVal(e.target.value)} value={searchInput} ></input>

            
                {treatmentInfo.length>0 ?
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 m-5 gap-5">
                        {treatmentInfo.map((treatmentData)=>{
                            return(
                                <div class="card w-96 bg-base-100 shadow-xl hover:outline hover:outline-blue-300">
                                    <div class="card-body">
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
                
                                        <div class="card-actions justify-center mt-5">
                                            <button class="btn btn-primary">Make Appointment</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    : (<div className="m-10 p-10 "> <h1 className="text-center text-3xl" >-----  TREATMENT NOT FOUND  ------</h1> </div>)
                }

           


            <div className="btn-group self-center mb-7">
                <button className="btn">1</button>
                <button className="btn btn-active">2</button>
                <button className="btn">3</button>
                <button className="btn">4</button>
            </div>

        </div>

    );
}