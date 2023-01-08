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

                <div className="shadow-md rounded-3xl border-blue-400/50 border-2 p-5" >
                    <div className="flex flex-row items-center mb-10">
                        <div className="mask mask-circle inline h-11 w-11 m-3 shrink-0">
                            <img src="https://placeimg.com/160/160/arch" />
                        </div>

                        <div className="flex flex-col ml-5">
                            <h1 className="font-medium">Danzel</h1>
                            <h2 className="font-light">Male - 28 Years 3 Months</h2>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row grow gap-5 font-base">
                            <h3 className="basis-1/4 shrink-0">Last Checked</h3>
                            <h3 className="font-light">Dr Everly on 21 April 2021 Prescription #2J983KT0 </h3>
                        </div>
                        <div className="flex flex-row grow gap-5">
                            <h3 className="basis-1/4 shrink-0 font-base">Observation</h3>
                            <h3 className="font-light">High fever and cough at normal hemoglobin levels. </h3>
                        </div>
                        <div className="flex flex-row grow gap-5">
                            <h3 className="basis-1/4 shrink-0 font-base">Prescription</h3>
                            <h3 className="font-light">Paracetmol - 2 times a day Dizopam - Day and Night before meal Wikoryl</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}