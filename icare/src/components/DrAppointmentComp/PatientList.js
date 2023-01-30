import { useState } from 'react';

export default function PatientList({patientListTable}) {

    const [patientLists, setPatientList] = useState(patientListTable);
    
    const [consultation, setConsultation] = useState(
        patientLists[0]
    );

    return(
        <div className="flex flex-row">
            <div className="flex flex-col gap-3 w-2/4 ">
                    <h1 className="text-2xl font-semibold m-3 mt-5 col-span-3 ">Today's appointment</h1>
                    
                    <div className='overflow-y-scroll overflow-x-hidden border-2 border-r-0 border-sky-200 rounded-2xl py-3' style={{height: '35rem'}}>
                        {patientLists.map((patientList)=>(
                            <PatientsBar key={patientList._id} data={patientList} onClick={setConsultation}/>
                        ))}
                    </div>
            </div>
            
            <div className='flex-initial grow-0 ml-10 w-2/4'>
                <ConsultationInfo consultationData={consultation} />
            </div>
        </div>
    );
};



const PatientsBar = ({data, onClick}) => {
    return(
        <div className='flex flex-row rounded-xl px-3 py-2 active:scale-105 cursor-pointer 
        hover:bg-sky-100' onClick={()=>onClick(data)}>
            <div className="mask mask-circle h-11 w-11 ml-2 mr-5 self-center shrink-0">
                <img src={data.patient_id.photo} className='object-fill' />
            </div>

            <div className='grow mr-5'>
                <h1 className='text-lg font-base '> {data.patient_id.name}</h1>
                <h3 className='text-sm p-2 pl-0'> Appointment </h3>
            </div>

            <div className="justify-end self-center shrink-0">
                <h3 className="font-base text-sm text-blue-600 bg-blue-200 rounded-2xl px-3 text-justify tracking-tight py-3">{data.start_datetime.getHours().toString().padStart(2, '0')} : 00</h3>
            </div>
        </div>
    );
};

export const PatientDetailSummary = ({consultationData}) => {
    return(
        <div className="flex flex-col gap-5">
            <div className="flex flex-row grow gap-5 font-base">
                <h3 className="basis-1/4 shrink-0">Last checked by</h3>
                <h3 className="font-light">{(consultationData.patient_id.last_checked.doctor_name == null || consultationData.patient_id.last_checked.doctor_name == undefined) ? "None" : "Dr " + consultationData.patient_id.last_checked.doctor_name  }</h3>
            </div>

            <div className="flex flex-row grow gap-5">
                <h3 className="basis-1/4 shrink-0 font-base">Observation</h3>
                <h3 className="font-light">{(consultationData.patient_id.last_checked.observation == null || consultationData.patient_id.last_checked.observation == undefined) ? "None" : consultationData.patient_id.last_checked.observation}</h3>
            </div>

            <div className="flex flex-row grow gap-5">
                <h3 className="basis-1/4 shrink-0 font-base">Prescription</h3>
                <h3 className="font-light">Paracetmol - 2           times a day
                            Dizopam - Day and Night before mealw
                            Wikoryl</h3>
            </div>

            <div className="flex flex-col gap-5">
                <h3 className="basis-1/4 shrink-0 font-base p-2 rounded-xl bg-sky-100">Appointment Purpose</h3>
                <h3 className="font-light">{(consultationData.title == null || consultationData.title == undefined) ? consultationData.description : consultationData.title}</h3>
            </div>
        </div>
    );
};

const ConsultationInfo = ({consultationData}) => {
    return(
        <div>
            <h1 className="text-2xl font-semibold m-3">Consultation</h1>
            
            <div className="shadow-md rounded-3xl border-blue-400/50 border-2 p-5" >
                <div className="flex flex-row items-center mb-3">
                    {/*=========== PROFILE PICTURE ===========*/}
                        <div className="mask mask-circle inline h-11 w-11 m-3 shrink-0 rounded-full">
                            <img src={consultationData.patient_id.photo} />
                        </div>

                    {/*=========== PATIENT INFORMATION ===========*/}
                    <div className="flex flex-col ml-5">
                        <h1 className="font-medium">{consultationData.patient_id.name}</h1>
                        <h2 className="font-light">{consultationData.patient_id.gender} - {consultationData.patient_id.age}</h2>
                    </div>
                </div>

                <div className='h-0.5 bg-blue-300 mb-7'></div>
                
                {/*=========== MAIN INFORMATION ===========*/}
                <PatientDetailSummary consultationData={consultationData} />
            </div> 
        </div>
    );
};
