/*
<div className="overflow-x-auto inline ">
    <table className="table w-full bg-red-200 rounded-lg">
        <tr>
            <td><img className="mask mask-circle" src="https://placeimg.com/160/160/arch" /></td>
            <td><h3>Danzel White</h3></td>
            <td><h4>Report</h4></td>
        </tr> 
        <tr className="bordered">
            <td><img className="mask mask-circle" src="https://placeimg.com/160/160/arch" /></td>
            <td className="block"><h3>Danzel White</h3></td>
            <td className="block"><h4>Report</h4></td>
        </tr>   
    </table>
</div>
*/



export default function PatientList() {
    return(
        <div className="flex flex-row">
            <div className="grid grid-cols-4">
                <h1 className="text-3xl font-semibold m-3 col-span-3">Patient List</h1>
            </div>


            <div className="rounded-lg ml-10">
                <h1 className="text-3xl font-semibold m-3">Consultation</h1>

                <div className="shadow-md shadow-cyan-500/50 p-5" >
                    <div className="flex flex-row items-center mb-10">
                        <div className="mask mask-circle inline h-11 w-11 m-3">
                            <img src="https://placeimg.com/160/160/arch" />
                        </div>

                        <div className="flex flex-col ml-5">
                            <h1 className="font-medium">Danzel</h1>
                            <h2 className="font-light">Male - 28 Years 3 Months</h2>
                        </div>
                    </div>

                    <div className="grid grid-rows-3 grid-cols-3 gap-5">
                        <div className="col-span-1">Last Checked</div>
                        <div className="col-span-2">Dr Everly on 21 April 2021 Prescription #2J983KT0 </div>
                        <div className="col-span-1">Observation</div>
                        <div className="col-span-2">High fever and cough at normal hemoglobin levels. </div>
                        <div className="col-span-1 ">Prescription</div>
                        <div className="col-span-2">Paracetmol - 2 times a day Dizopam - Day and Night before meal Wikoryl</div>
                    </div>
                </div>

            </div>
        </div>
    )
}