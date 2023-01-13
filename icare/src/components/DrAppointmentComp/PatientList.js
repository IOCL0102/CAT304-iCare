import { useState } from 'react';

export default function PatientList() {

    const [patientLists, setPatientList] = useState([
        {
            id: 1,
            name: "Simon Alix",
            time: "04:00 PM",
            link: "#",
            appointPurpose: `É vital, porém não derrubará aviões.
            It's vital, but it won't shoot down aircraft.
            Boa idéia, porém não funcionará.
            Good idea, but it won't work.
            Então não arriscarei nenhum... porém infelizmente estou tentada.
            Then I shall venture none... however sorely I am tempted.`,
            profilePic: "https://placeimg.com/160/160/any",
            gender: "Male",
            age: 56,
            lastChecked: "Dr Everly on 21 April 2021 Prescription #2J983KT0",
            observation: "High fever and cough at normal hemoglobin levels. ",
            prescription: `Paracetmol - 2 times a day
                            Dizopam - Day and Night before mealw
                            Wikoryl`,
        },
        {
            id: 2,
            name: "Alix",
            time: "04:00 PM",
            link: "#",
            appointPurpose: "Daily check up because I feel like my chest feel pain sometimes",
            profilePic: "https://placeimg.com/160/160/any",
            gender: "Male",
            age: 56,
            lastChecked: "Dr Everly on 21 April 2021 Prescription #2J983KT0",
            observation: "High fever and cough at normal hemoglobin levels. ",
            prescription: `Paracetmol - 2 times a day
                            Dizopam - Day and Night before mealw
                            Wikoryl`,
        },
        {
            id: 3,
            name: "Abu Bakar",
            time: "04:00 PM",
            link: "#",
            appointPurpose: "Daily check up because I feel like my chest feel pain sometimes",
            profilePic: "https://placeimg.com/160/160/any",
            gender: "Male",
            age: 56,
            lastChecked: "Dr Everly on 21 April 2021 Prescription #2J983KT0",
            observation: "High fever and cough at normal hemoglobin levels. ",
            prescription: `Paracetmol - 2 times a day Dizopam - Day and Night before mealw aaa Wikoryl`,
        },
        {
            id: 4,
            name: "Ahamd bin Yusoff Ali",
            time: "04:00 PM",
            link: "#",
            appointPurpose: "Daily check up because I feel like my chest feel pain sometimes",
            profilePic: "https://placeimg.com/160/160/arch",
            gender: "Male",
            age: 56,
            lastChecked: "Dr Everly on 21 April 2021 Prescription #2J983KT0",
            observation: "High fever and cough at normal hemoglobin levels. ",
            prescription: `Paracetmol - 2 times a day
                            Dizopam - Day and Night before mealw
                            Wikoryl`,
        },
        {
            id: 5,
            name: "Ng Wei Kang",
            time: "04:00 PM",
            link: "#",
            appointPurpose: "Daily check up because I feel like my chest feel pain sometimes",
            profilePic: "https://placeimg.com/160/160/arch",
            gender: "Male",
            age: 56,
            lastChecked: "Dr Everly on 21 April 2021 Prescription #2J983KT0",
            observation: "High fever and cough at normal hemoglobin levels. ",
            prescription: `Paracetmol - 2 times a day
                            Dizopam - Day and Night before mealw
                            Wikoryl`,
        },
        {
            id: 6,
            name: "Ng Wei Kang",
            time: "04:00 PM",
            link: "#",
            appointPurpose: "Daily check up because I feel like my chest feel pain sometimes",
            profilePic: "https://placeimg.com/160/160/arch",
            gender: "Male",
            age: 56,
            lastChecked: "Dr Everly on 21 April 2021 Prescription #2J983KT0",
            observation: "High fever and cough at normal hemoglobin levels. ",
            prescription: `Paracetmol - 2 times a day
                            Dizopam - Day and Night before mealw
                            Wikoryl`,
        },
        {
            id: 7,
            name: "Ng Wei Kang",
            time: "04:00 PM",
            link: "#",
            appointPurpose: "Daily check up because I feel like my chest feel pain sometimes",
            profilePic: "https://placeimg.com/160/160/arch",
            gender: "Male",
            age: 56,
            lastChecked: "Dr Everly on 21 April 2021 Prescription #2J983KT0",
            observation: "High fever and cough at normal hemoglobin levels. ",
            prescription: `Paracetmol - 2 times a day
                            Dizopam - Day and Night before mealw
                            Wikoryl`,
        },
        {
            id: 8,
            name: "Ng Wei Kang",
            time: "04:00 PM",
            link: "#",
            appointPurpose: "Daily check up because I feel like my chest feel pain sometimes",
            profilePic: "https://placeimg.com/160/160/arch",
            gender: "Male",
            age: 56,
            lastChecked: "Dr Everly on 21 April 2021 Prescription #2J983KT0",
            observation: "High fever and cough at normal hemoglobin levels. ",
            prescription: `Paracetmol - 2 times a day
                            Dizopam - Day and Night before mealw
                            Wikoryl`,
        },
    ]);
    
    const [consultation, setConsultation] = useState(
        patientLists[0]
    );

    return(
        <div className="flex flex-row">
            <div className="flex flex-col gap-3 w-2/4">
                    <h1 className="text-2xl font-semibold m-3 mt-5 col-span-3 ">Today's appointment</h1>
                    
                    <div className='overflow-y-scroll overflow-x-hidden max-h-96 '>
                        {patientLists.map((patientList)=>(
                            <PatientsBar key={patientList.id} data={patientList} onClick={setConsultation}/>
                        ))}
                    </div>
   
                <div className='text-center my-5'>
                    <u className='text-base underline-offset-1 hover:cursor-pointer hover:text-blue-500 '>view all</u>
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
                <img src={data.profilePic} className='object-fill' />
            </div>

            <div className='grow mr-5'>
                <h1 className='text-lg font-base '> {data.name}</h1>
                <h3 className="text-sm ">{data.appointPurpose.length > 50 ? data.appointPurpose.slice(0,50) + " ..." : data.appointPurpose}</h3>
            </div>

            <div className="justify-end self-center shrink-0">
                <h3 className="font-base text-sm text-blue-600 bg-blue-200 rounded-2xl px-3 text-justify tracking-tight py-3">{data.time}</h3>
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
                            <img src={consultationData.profilePic} />
                        </div>

                    {/*=========== PATIENT INFORMATION ===========*/}
                    <div className="flex flex-col ml-5">
                        <h1 className="font-medium">{consultationData.name}</h1>
                        <h2 className="font-light">{consultationData.gender} - {consultationData.age}</h2>
                    </div>
                </div>

                <div className='h-0.5 bg-blue-300 mb-7'></div>
                
                {/*=========== MAIN INFORMATION ===========*/}
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row grow gap-5 font-base">
                        <h3 className="basis-1/4 shrink-0">Last Checked</h3>
                        <h3 className="font-light">{consultationData.lastChecked}</h3>
                    </div>
                    <div className="flex flex-row grow gap-5">
                        <h3 className="basis-1/4 shrink-0 font-base">Observation</h3>
                        <h3 className="font-light">{consultationData.observation}</h3>
                    </div>
                    <div className="flex flex-row grow gap-5">
                        <h3 className="basis-1/4 shrink-0 font-base">Prescription</h3>
                        <h3 className="font-light">{consultationData.prescription}</h3>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="basis-1/4 shrink-0 font-base p-2 rounded-xl bg-sky-100">Appointment Purpose</h3>
                        <h3 className="font-light">{consultationData.appointPurpose}</h3>
                    </div>
                </div>
            </div> 
        </div>
    );
};