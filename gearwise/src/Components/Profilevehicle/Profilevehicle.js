import React, { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useReactToPrint } from "react-to-print";

const VehicleHistory = () => {
    const [vehicleData, setVehicleData] = useState([]);

    useEffect(() => {
        fetchVehicleHistory();
    }, []);

    const fetchVehicleHistory = async () => {
        try {
            const response = await axios.get('http://localhost:4005/api/vehicles/history/XYZ1234'); // Replace with backend endpoint and vrNo. `http://localhost:4005/api/vehicles/history/${vrNo}`
            setVehicleData(response.data); // Assuming response.data is an array of appointments
        } catch (error) {
            console.error('Error fetching vehicle history:', error);
        }
    };

    // Print the history report
    const ComponentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => ComponentsRef.current,
        documentTitle: "Vehicle History",
        onAfterPrint: () => alert("Vehicle History Successfully Downloaded!"),
    });

    // Format date function
    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        return dateObject.toLocaleDateString();
    };


    return (
        <div>
            <div ref={ComponentsRef} className="container">
                <div className="section-header text-left">
                    <center><p>Vehicle History</p></center>
                </div>
                {vehicleData.map((vehicleData, index) => (
                    <div key={index} className="row">
                        <div className="col-lg-12">
                            <Card className="text-center">
                                <div className="row" style={{ marginTop: '30px' }}>
                                    <h4>Vehicle Information</h4>
                                    <div className="col-md-6">
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                <Form.Floating>
                                                    <Form.Control
                                                        id={`vehicleType-${index}`}
                                                        type="text"
                                                        placeholder="Vehicle Type"
                                                        value={vehicleData.vehicleType || ''}
                                                    // readOnly
                                                    />
                                                    <label htmlFor={`vehicleType-${index}`}>Vehicle Type</label>
                                                </Form.Floating>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="col-md-6">
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                <Form.Floating className="mb-3">
                                                    <Form.Control
                                                        id={`vehicleModel-${index}`}
                                                        type="Text"
                                                        placeholder="Vehicle Model"
                                                        value={vehicleData.vehicleModel || ''}
                                                    // readOnly
                                                    />
                                                    <label htmlFor={`vehicleModel-${index}`}>Vehicle Model</label>
                                                </Form.Floating>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                <Form.Floating>
                                                    <Form.Control
                                                        id={`mfYear-${index}`}
                                                        type="text"
                                                        placeholder="Manufactured Year"
                                                        value={vehicleData.mfYear || ''}
                                                    // readOnly
                                                    />
                                                    <label htmlFor={`mfYear-${index}`}>Manufactured Year</label>
                                                </Form.Floating>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="col-md-6">
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                <Form.Floating>
                                                    <Form.Control
                                                        id={`vrNo-${index}`}
                                                        type="text"
                                                        placeholder="Vehicle Registration Number"
                                                        value={vehicleData.vrNo || ''}
                                                    // readOnly
                                                    />
                                                    <label htmlFor={`vrNo-${index}`}>Vehicle Registration Number</label>
                                                </Form.Floating>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="col-md-6">
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                <Form.Floating>
                                                    <Form.Control
                                                        id={`serviceType-${index}`}
                                                        type="text"
                                                        placeholder="Service Type"
                                                        value={vehicleData.serviceType || ''}
                                                    // readOnly
                                                    />
                                                    <label htmlFor={`serviceType-${index}`}>Service Type</label>
                                                </Form.Floating>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="col-md-6">
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                <Form.Floating>
                                                    <Form.Control
                                                        id={`date-${index}`}
                                                        type="text"
                                                        placeholder="Service Date"
                                                        value={formatDate(vehicleData.date) || ''}
                                                    // readOnly
                                                    />
                                                    <label htmlFor={`date-${index}`}>Service Date</label>
                                                </Form.Floating>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="col-md-6">
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                <Form.Floating>
                                                    <Form.Control
                                                        id={`timeSlot-${index}`}
                                                        type="text"
                                                        placeholder="Time Slot"
                                                        value={vehicleData.timeSlot || ''}
                                                    // readOnly
                                                    />
                                                    <label htmlFor={`timeSlot-${index}`}>Time Slot</label>
                                                </Form.Floating>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>

                                    {/* <div className="col-lg-12" > */}
                                    {/* <h4>Replaced Parts</h4> */}
                                    {/* {vehicleData.replacedParts.map((part, index) => (
                                        <div key={index}>
                                            <div className="row"> */}

                                    {/* <div className="col-md-6">
                                                    <Card.Body>
                                                        <Card.Title></Card.Title>
                                                        <Card.Text>
                                                            <Form.Floating>
                                                                <Form.Control
                                                                    id={`floatingPartName${index}`}
                                                                    type="text"
                                                                    placeholder="Part Name"
                                                                    value={part.productId.name}
                                                                // readOnly
                                                                />
                                                                <label htmlFor={`floatingPartName${index}`}>Part Name</label>
                                                            </Form.Floating>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div> */}
                                    {/* <div className="col-md-6">
                                                    <Card.Body>
                                                        <Card.Title></Card.Title>
                                                        <Card.Text>
                                                            <Form.Floating className="mb-3">
                                                                <Form.Control
                                                                    id={`floatingPartQuantity${index}`}
                                                                    type="text"
                                                                    placeholder="Quantity"
                                                                    value={part.quantity}
                                                                // readOnly
                                                                />
                                                                <label htmlFor={`floatingPartQuantity${index}`}>Quantity</label>
                                                            </Form.Floating>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div> */}


                                    {/* <div className="col-md-6">
                                                    <Card.Body>
                                                        <Card.Title></Card.Title>
                                                        <Card.Text>
                                                            <Form.Floating className="mb-3">
                                                                <Form.Control
                                                                    id={`floatingPartPrice${index}`}
                                                                    type="text"
                                                                    placeholder="Price"
                                                                    value={part.price}
                                                                // readOnly
                                                                />
                                                                <label htmlFor={`floatingPartQuantity${index}`}>Price</label>
                                                            </Form.Floating>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div> */}
                                    {/* </div> */}


                                    {/* <Card.Body>
                                                <Card.Text>
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id={`floatingPartName${index}`}
                                                            type="text"
                                                            placeholder="Part Name"
                                                            value={part.productId.name}
                                                            readOnly
                                                        />
                                                        <label htmlFor={`floatingPartName${index}`}>Part Name</label>
                                                    </Form.Floating>
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id={`floatingPartQuantity${index}`}
                                                            type="text"
                                                            placeholder="Quantity"
                                                            value={part.quantity}
                                                            readOnly
                                                        />
                                                        <label htmlFor={`floatingPartQuantity${index}`}>Quantity</label>
                                                    </Form.Floating>
                                                </Card.Text>
                                            </Card.Body> */}
                                    {/* </div>
                                    ))}
                                </div> */}
                                </div>
                                {/* <div style={{ paddingLeft: '850px', paddingTop: '30px' }}>
                                <button onClick={handlePrint} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Print</button>
                            </div> */}
                            </Card>
                            <br />
                            <br />
                        </div>

                    </div>
                ))}
                <p style={{ marginTop: 'px' }}>
                    "Unveil the complete journey of your vehicle with this detailed history report, showcasing every detail.
                    Preserve this record as a testament to your vehicle's care and maintenance,
                    ensuring its legacy of reliability and performance."
                    {/* "Discover the journey of your vehicle with a detailed history report." */}
                </p>
            </div>


            <div style={{ paddingLeft: '850px', paddingTop: '30px' }}>
                <button onClick={handlePrint} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Print</button>
            </div>
        </div>
    )
}

export default VehicleHistory

// import React from 'react'

// export default function Profilevehicle() {
//     return (
//         <div>

//             <>
//                 {/*<!-- Component: Simple Table --> */}
//                 <h1 style={{ paddingLeft: '50px', paddingTop: '35px' }}>Vehicle Service History</h1>
//                 <div style={{ display: 'flex', justifyContent: 'center', paddingLeft: 230, paddingTop: '40px' }}>
//                     <div className="w-full overflow-x-auto">
//                         <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-700" cellspacing="0" style={{ width: '80%' }}>
//                             <tbody>
//                                 <tr>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100 font-bold">Service Request Date</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100">2024-01-07</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100 font-bold">Service Number</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100">11111</td>
//                                     {/* <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Username</th> */}
//                                 </tr>
//                                 <tr>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black font-bold">Service Date</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">2024-01-07</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black font-bold">Service Time</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">10 a.m.</td>

//                                     {/* <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">salas_a</td> */}
//                                 </tr>
//                                 <tr>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100 font-bold">Vehicle Model</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100">3g</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100 font-bold">Vehicle Brand</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100">Honda</td>
//                                 </tr>
//                                 <tr>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black font-bold">Vehicle Name</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">Civic</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black font-bold">Vehicle Registration Number</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">CBE 2751</td>
//                                     {/* <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">jemmaC</td> */}
//                                 </tr>
//                                 <tr>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100 font-bold">Service Charge</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100">LKR 10 000</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100 font-bold">Parts Charge</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black bg-slate-100">LKR 5500</td>
//                                     {/* <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">cardenasji</td> */}
//                                 </tr>
//                                 <tr>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black font-bold">Other Charge</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">LKR 900</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black font-bold">Ayub Salas</td>
//                                     <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">LKR 16 400</td>
//                                     {/* <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">mt</td> */}
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//                 {/*<!-- End Simple Table --> */}
//                 <div style={{ paddingLeft: '850px', paddingTop: '30px' }}>
//                     <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Print</button>
//                 </div>
//             </>


//         </div>
//     )
// }
