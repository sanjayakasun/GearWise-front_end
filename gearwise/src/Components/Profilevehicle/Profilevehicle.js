import React from 'react'

export default function Profilevehicle() {
    return (
        <div>

            <>
                {/*<!-- Component: Simple Table --> */}
                <h1 style={{ paddingLeft: '50px', paddingTop: '35px'}}>Vehicle Service History</h1>
                <div style={{ display: 'flex', justifyContent: 'center', paddingLeft:230   ,paddingTop: '40px'   }}> 
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-700" cellspacing="0" style={{ width: '80%'}}>
                            <tbody>
                                <tr>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100 font-bold">Service Request Date</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100">2024-01-07</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100 font-bold">Service Number</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100">11111</td>
                                    {/* <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Username</th> */}
                                </tr>
                                <tr>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black font-bold">Service Date</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">2024-01-07</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black font-bold">Service Time</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">10 a.m.</td>

                                    {/* <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">salas_a</td> */}
                                </tr>
                                <tr>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100 font-bold">Vehicle Model</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100">3g</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100 font-bold">Vehicle Brand</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100">Honda</td>
                                </tr>
                                <tr>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black font-bold">Vehicle Name</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">Civic</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black font-bold">Vehicle Registration Number</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">CBE 2751</td>
                                    {/* <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">jemmaC</td> */}
                                </tr>
                                <tr>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100 font-bold">Service Charge</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100">LKR 10 000</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100 font-bold">Parts Charge</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100">LKR 5500</td>
                                    {/* <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">cardenasji</td> */}
                                </tr>
                                <tr>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black font-bold">Other Charge</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">LKR 900</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black font-bold">Ayub Salas</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">LKR 16 400</td>
                                    {/* <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">mt</td> */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/*<!-- End Simple Table --> */}
<div style={{paddingLeft: '850px', paddingTop: '30px'}}>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Print</button>
            </div>
            </>


        </div>
    )
}
