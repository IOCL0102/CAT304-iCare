import DocNavbar from '../components/DoctorNavbar';
import PatientList from '../components/PatientList';

// bg-slate-100

export default function DoctorAppointPage(){
    return(
        <div >
            <DocNavbar/>
            <div className='grid grid-cols-3 grid-rows-2 bg-red-300 ml-16' >

                <div className='col-start-1 col-end-3'>
                    <div className='bg-white rounded-lg p-5 m-5'>
                        <PatientList />
                    </div>
                </div>

                <div className='col-start-3 col-end-4 bg-green-500'>

                </div>

                <div className='col-start-1 col-end-2 bg-green-500'>

                </div>

                <div className='col-start-2 col-end-4 bg-red-500'>

                </div>

            </div>
        </div>
    );
}