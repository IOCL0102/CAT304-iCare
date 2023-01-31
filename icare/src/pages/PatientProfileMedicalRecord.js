import React from 'react';
import DocNavbar from '../components/doctorNavbar';
import {useState, useEffect} from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from 'react-router-dom';

const iconStyle = {
    "&.MuiSvgIcon-root": {
        fontSize: '3 rem',
    }
}

export default function PatientProfileMedicalRecord () {
    let navigate = useNavigate();
    
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const [modalMedicalIntake, setModalMedicalIntake] = useState(false);
    const toggleModalMedicalIntake = () => {
        setModalMedicalIntake(!modalMedicalIntake);
    };

    if(modalMedicalIntake) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const PatientMedicalRecordTable =[
        {
            name: "Tom Cat",
            appointment_id:1,
            start_datetime:"2023-01-28",
            observation:"High blood sugar level",
            treatment:"Complete blood test and take insulin injection",
            prescription:"paracetamol,amoxycilin",
            medicine_date:"",
            medicine_name:"",
            intake_per_day:"",
            meal_period:"",
            duration:"",
        },
        {
            name: "Tom Cat",
            appointment_id:2,
            start_datetime:"2023-01-25",
            observation:"Cough, Fever, fatigue",
            treatment:"Taken X-ray, complete blood test and covid test",
            prescription:"dizopam",
            medicine_date:"",
            medicine_name:"",
            intake_per_day:"",
            meal_period:"",
            duration:"",

        },
        
    ];

    const [formValues, setFormValues]= useState(PatientMedicalRecordTable);
    const [formErrors, setFormErrors]= useState({});
    const [isSubmit, setIsSubmit]= useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
    
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
    
        const validate = (values) => {
        const errors = {};
       if (!values.start_datetime) {
            errors.start_datetime = "Date is required.";
        } 

        if (!values.observation) {
            errors.observation = "Observation is required.";
        } 
        
        if (!values.treatment ) {
            errors.treatment = "Treatment is required.";
        }

        if (!values.prescription) {
            errors.prescription = "Prescription is required.";
        } 
        if (!values.medicine_date) {
            errors.medicine_date = "Date is required.";
        }
        if (!values.medicine_name) {
            errors.medicine_name = "Medicine name is required.";
        }
        if (!values.intake_per_day) {
            errors.intake_per_day = "Intake per day is required.";
        }
        if (!values.duration) {
            errors.duration = "Duration is required.";
        }
        if (!values.meal_period) {
            errors.meal_period = "Meal period is required.";
        }
        return errors;
     };


    const PatientInfo ={
        name:"Tom Cat",
        birth_date:"1991-01-01",
        age:"34",
        ic_number:"910101-07-2311", 
        gender:"male",
        height:"172",
        weight:"65",
        email:"tom@gmail.com",
        phone_number:"016-342323",
        address:"No. 48A, Jalan 10/118B, Desa Tun Razak, Kuala Lumpur, 56000",
        allergies:"lactose intolerance, pollen",
        photo:"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
    };

    const PatientMedicalIntakeInstructionTable =[
        {
            date:"2023-01-28",
            name: "paracetamol",
            intake_per_day:3,
            meal_period:"after meal",
            duration_in_days:7,
        },
        {
            date:"2023-01-28",
            name: "amoxycilin",
            intake_per_day:1,
            meal_period:"before meal",
            duration_in_days:7,
        },
        {
            date:"2023-01-25",
            name: "amoxycilin",
            intake_per_day:1,
            meal_period:"before meal",
            duration_in_days:7,
        },
        
    ];

    const [patientMedicalRecordInfo, setpatientMedicalRecordInfo] = useState(PatientMedicalRecordTable); 
    const [patientMedicalIntakeInfo, setpatientMedicalIntakeInfo] = useState(PatientMedicalIntakeInstructionTable); 

    const displayMedicalRecordInfo = PatientMedicalRecordTable.map((patientMedicalRecordInfo) => {
        return (
            <div> 
                
                <tr className=" flex flex-row border-b ">
                <td className="px-6 py-4 w-1/3 ml-20  whitespace-nowrap text-sm font-medium text-gray-900">{patientMedicalRecordInfo.start_datetime}</td>
                    <div className='flex flex-col space-y-1'>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Observation: {patientMedicalRecordInfo.observation}</td>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Treatment Given: {patientMedicalRecordInfo.treatment}</td>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Presciption: {patientMedicalRecordInfo.prescription}</td>
                    </div>
                </tr >
            </div> 
        );
      });

    const displayMedicalIntakeInfo = PatientMedicalIntakeInstructionTable.map((patientMedicalIntakeInfo) => {
        return (
            <div>   
                <tr className=" flex flex-row border-b ">
                <td className="px-6 py-4 w-1/3 ml-20  whitespace-nowrap text-sm font-medium text-gray-900">{patientMedicalIntakeInfo.date}</td>
                    <div className='flex flex-col space-y-1'>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Medicine name: {patientMedicalIntakeInfo.name}</td>    
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Intake per day: {patientMedicalIntakeInfo.intake_per_day}</td>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Meal Period: {patientMedicalIntakeInfo.meal_period}</td>
                    <td className="text-sm text-gray-900  font-medium px-6 whitespace-nowrap">Duration in days: {patientMedicalIntakeInfo.duration_in_days}</td>
                    </div>
                </tr >
            </div> 
        );
      });

    
    
    return (
    <div>
        <DocNavbar/>  
        <div className=' p-3 flex justify-start ml-20 space-x-5'>
            <button type="button"  onClick={()=>{navigate("/viewpatientlist")}} class="w-11 h-11 flex-wrap justify-center text-sm text-white bg-primary rounded-lg  ">
                {<ArrowBackIosIcon sx={iconStyle}/>}
            </button> 
        </div> 

        <img src={PatientInfo.photo} alt="" class="p-2 absolute ml-48 mt-8 w-48 h-48 rounded-lg"/>
        <div className=' ml-96 flex flex-col space-y-1 '>   
            <p className=' w-1/3 ml-28 text-3xl text-black font-semibold block'>{PatientInfo.name}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Birthdate: {PatientInfo.birth_date}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Age: {PatientInfo.age}</p>  
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>I/C: {PatientInfo.ic_number}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Gender: {PatientInfo.gender}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Height(cm): {PatientInfo.height}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Weight(kg): {PatientInfo.weight}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Email Address: {PatientInfo.email}</p>  
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Phone No.: {PatientInfo.phone_number}</p>
            <p className=' w-1/3 ml-28 text-base text-black font-normal block'>Medical Allergies: {PatientInfo.allergies}</p>  
        </div>

        <div className="ml-40 mr-40 flex flex-col">
            <div className=" sm:-mx-6 lg:-mx-8">
                <div className="  py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div >
                        <table class="min-w-full text-center">
                            <thead class="border-b bg-gray-800">
                                <tr>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 w-1/5">Date</th>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4">Medical Record</th>
                                </tr>
                            </thead >
                        </table>
                        {displayMedicalRecordInfo} 
                    </div>  
                </div>
            </div>
        </div>
        <div className= 'flex justify-start'>
            <button type="button" onClick={toggleModal} class="w-32 h-9 ml-40 mr-40 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary">
                    Add new record</button>
                {modal && (
                    <div className='fixed bg-black/10 inset-0 ml-16 flex justify-center items-center '>
                    <div className='flex flex-col bg-sky-100 h-3/4 w-3/4 rounded-3xl'>
                    <p className='text-2xl text-center text-black font-semibold block'>Adding medical record</p>
                    
                    <form onSubmit={handleSubmit} >
                    <div className="ml-20  mr-10 flex space-y-1 w-1/3 form-control ">
                        <label className='text-xl text-black font-semibold block'>Date</label>
                        <input className='bg-white text-black w-1/2 border-2 rounded-lg border-gray-400' 
                        type='date' name="start_datetime" onChange={handleChange} />    
                        <p className= 'text-red-500  font-medium text-xs'>{formErrors.start_datetime}</p> 
                    </div>
                    <div className="mt-10 ml-20 mr-10 flex space-y-1 form-control ">
                        <label className='text-xl text-black font-semibold block'>Observation</label>
                        <input className='bg-white  text-black w-1/2 border-2 rounded-lg border-gray-400' 
                        type='text' onChange={handleChange} name="observation" />
                        <p className= 'text-red-500  font-medium text-xs'>{formErrors.observation}</p>
                        <label className='text-xl text-black font-semibold block'>Treatment Given</label>
                        <input className='bg-white  text-black w-1/2 border-2 rounded-lg border-gray-400' 
                        type='text' onChange={handleChange} name="treatment" />
                        <p className= 'text-red-500  font-medium text-xs'>{formErrors.treatment}</p>
                        <label className='text-xl text-black font-semibold block'>Prescription</label>
                        <input className='bg-white  text-black w-1/2 border-2 rounded-lg border-gray-400' 
                        type='text' onChange={handleChange} name="prescription" />
                        <p className= 'text-red-500  font-medium text-xs'>{formErrors.prescription}</p>
                    </div>
                    <div className='mt-10 flex flex-row justify-center space-x-2'>
                        <button type="submit" className="flex justify-center text-white bg-primary font-medium rounded-lg 
                        text-sm px-5 py-2.5 text-center">Submit </button>
                        
                        <button className="flex justify-center text-white bg-gray-700 font-medium rounded-lg 
                        text-sm px-5 py-2.5 text-center" onClick={toggleModal}>
                        cancel
                        </button>
                    </div>
                    </form>
    
                    </div>
                </div>
                )}
        </div>

        <div className="ml-40 mr-40 flex flex-col">
            <div className=" sm:-mx-6 lg:-mx-8">
                <div className=" py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div >
                        <table class="min-w-full text-center">
                            <thead class="border-b bg-gray-800">
                                <tr>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 w-1/5">Date</th>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4">Medical Intake Instruction</th>
                                </tr>
                            </thead >
                        </table>
                        {displayMedicalIntakeInfo} 
                    </div>  
                </div>
            </div>
        </div>   

        <div className= 'flex justify-start'>
            <button type="button" onClick={toggleModalMedicalIntake} class="w-32 h-9 ml-40 mr-40 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary">
                    Add new Medical Intake Instruction</button>
                {modalMedicalIntake && (
                    <div className='fixed bg-black/10 inset-0 ml-16 flex justify-center items-center '>
                    <div className='flex flex-col bg-sky-100 h-3/4 w-3/4 rounded-3xl'>
                    <p className='text-2xl text-center text-black font-semibold block'>Adding medical intake instruction</p>
                    
                    <form onSubmit={handleSubmit} >
                    <div className="ml-20  mr-10 flex space-y-1 w-1/3 form-control ">
                        <label className='text-xl text-black font-semibold block'>Date</label>
                        <input className='bg-white text-black w-1/2 border-2 rounded-lg border-gray-400' 
                        type='date' name="medicine_date" onChange={handleChange} />    
                        <p className= 'text-red-500  font-medium text-xs'>{formErrors.medicine_date}</p> 
                    </div>
    
                    <div className="mt-10 ml-20 mr-10 flex space-y-1 form-control ">
                        <label className='text-xl text-black font-semibold block'>Medicine name</label>
                        <input className='bg-white  text-black w-1/2 border-2 rounded-lg border-gray-400' 
                        type='text' onChange={handleChange} name="medicine_name" />
                        <p className= 'text-red-500  font-medium text-xs'>{formErrors.medicine_name}</p>

                        <label className='text-xl text-black font-semibold block'>Intake per day</label>
                        <input className='bg-white  text-black w-1/2 border-2 rounded-lg border-gray-400' 
                        type='number' onChange={handleChange} name="intake_per_day" />
                        <p className= 'text-red-500  font-medium text-xs'>{formErrors.intake_per_day}</p>

                        <label className='text-xl text-black font-semibold block'>Meal period</label>
                        <select className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                        type='text' onChange={handleChange} name="meal_period" >
                        <option></option>
                        <option>Before meal</option>
                        <option>After meal</option>
                        </select> 
                        <p className= 'text-red-500  font-medium text-xs'>{formErrors.meal_period}</p>

                        <label className='text-xl text-black font-semibold block'>Duration in days</label>
                        <input className='bg-white w-1/2 border-2 rounded-lg border-gray-400' 
                        type='number' onChange={handleChange} name="duration" />
                        <p className= 'text-red-500  font-medium text-xs'>{formErrors.duration}</p>
                    </div>
    
                    <div className='mt-10 flex flex-row justify-center space-x-2'>
                        <button type="submit" className="flex justify-center text-white bg-primary font-medium rounded-lg 
                        text-sm px-5 py-2.5 text-center">Submit </button>
                        
                        <button className="flex justify-center text-white bg-gray-700 font-medium rounded-lg 
                        text-sm px-5 py-2.5 text-center" onClick={toggleModalMedicalIntake}>
                        cancel
                        </button>
                    </div>
                    </form>
    
                    </div>
                </div>
                )}
        </div> 
      <div>   
    </div>
</div>
    );

      

}