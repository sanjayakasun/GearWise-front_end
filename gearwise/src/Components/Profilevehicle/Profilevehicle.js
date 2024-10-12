import React, { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import logo from '../../img/gearwise.png'; // Import your logo image  
import logo2 from '../../img/wuerth.jpg'; 
import logo3 from '../../img/verify.png'; 
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';

const VehicleHistory = () => {
    const [vehicleData, setVehicleData] = useState([]); // Store all vehicle data     
    const [vrNumbers, setVrNumbers] = useState([]); // Store all vehicle registration numbers     
    const [selectedVrNo, setSelectedVrNo] = useState(''); // Store selected vehicle registration number     
    const [serviceDates, setServiceDates] = useState([]); // Store all service dates for selected vehicle     
    const [selectedServiceDate, setSelectedServiceDate] = useState(''); // Store selected service date     
    const [selectedVehicle, setSelectedVehicle] = useState(null); // Store selected vehicle details     
    const navigate = useNavigate();
    const [customerId, setCustomerId] = useState(null);

    // Fetch customer ID from localStorage     
    useEffect(() => {
        const storedCustomerId = localStorage.getItem('customerId');
        if (storedCustomerId) {
            setCustomerId(storedCustomerId);
        } else {
            navigate('/login'); // Redirect to login page if customerId is not available         
        }
    }, [navigate]);

    // Fetch vehicle registration numbers     
    useEffect(() => {
        if (customerId) {
            const fetchVehicleVrNumbers = async () => {
                try {
                    const response = await axios.get(`http://localhost:4005/api/vehicles/history/${customerId}`);
                    const vehicleData = response.data;
                    setVehicleData(vehicleData);
                    const vrNumbers = [...new Set(vehicleData.map(vehicle => vehicle.vrNo))]; // Extract unique vrNos                     
                    setVrNumbers(vrNumbers);
                } catch (error) {
                    console.error('Error fetching vehicle registration numbers:', error);
                    toast.error('Error fetching vehicle data!');
                }
            };
            fetchVehicleVrNumbers();
        }
    }, [customerId]);

    // Handle VR No selection from dropdown
    const handleVrNoChange = (e) => {
        const vrNo = e.target.value;
        setSelectedVrNo(vrNo);
        const vehicleRecords = vehicleData.filter(v => v.vrNo === vrNo);

        // Get unique service dates for the selected vehicle
        const uniqueServiceDates = Array.from(new Set(vehicleRecords.map(v => v.date)));
        setServiceDates(uniqueServiceDates); // Store unique service dates
    };

    // Handle Service Date selection from dropdown
    const handleServiceDateChange = (e) => {
        const selectedDate = e.target.value;
        setSelectedServiceDate(selectedDate);

        // Find the vehicle data corresponding to the selected vehicle and service date
        const selectedVehicleData = vehicleData.find(v => v.vrNo === selectedVrNo && v.date === selectedDate);
        setSelectedVehicle(selectedVehicleData); // Set the selected vehicle's details for the chosen date
    };

    // Print the history report     
    const ComponentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => ComponentsRef.current,
        documentTitle: "Vehicle History",
        onAfterPrint: () => {
            toast.success("Vehicle History Successfully Downloaded!"); // Show toast success
        },
    });

    // Format date function     
    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        return dateObject.toLocaleDateString();
    };

    return (
        <div className="container">
            <ToastContainer />

            <div className="section-header text-center">
                <h2>Vehicle History</h2>
            </div>

            {/* Dropdown for Vehicle Registration Numbers */}
            <Form.Group className="mb-3">
                <Form.Label>Select Vehicle Registration Number</Form.Label>
                <Form.Select value={selectedVrNo} onChange={handleVrNoChange}>
                    <option value="">-- Select Vehicle Registration Number --</option>
                    {vrNumbers.map((vrNo, index) => (
                        <option key={index} value={vrNo}>
                            {vrNo}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            {/* Dropdown for Service Dates */}
            {selectedVrNo && (
                <Form.Group className="mb-3">
                    <Form.Label>Select Service Date</Form.Label>
                    <Form.Select value={selectedServiceDate} onChange={handleServiceDateChange}>
                        <option value="">-- Select Service Date --</option>
                        {serviceDates.map((date, index) => (
                            <option key={index} value={date}>{formatDate(date)}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            )}

            {/* Display Selected Vehicle History */}
            {selectedVehicle && (
                <div ref={ComponentsRef} className="receipt">
                    <Card className=" mt-4">
                        <Card.Body>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                {/* Left-aligned image */}
                                <img src={logo} alt="Service Station Logo" style={{ width: '150px' }} />

                                {/* Right-aligned image */}
                                <img src={logo2} alt="Service Station Logo" style={{ width: '150px' }} />
                            </div>
                            <h3 className="text-center">GearWise - Auto Spa Service Station</h3>
                            <p className="text-center">No 132/5, Market Road, Dambulla. <br /> 071-2209112 / 076-4635795 / 071-7650880 / 077-3236925</p>
                            <hr />
                            <h4 className="text-center">Vehicle History Report</h4>
                            <p><strong>Report Generated Date:</strong>{formatDate(new Date())}</p>
                            <p><strong>Vehicle Registration Number:</strong> {selectedVehicle.vrNo}</p>
                            <p><strong>Vehicle Type:</strong> {selectedVehicle.vehicleType}</p>
                            <p><strong>Vehicle Model:</strong> {selectedVehicle.vehicleModel}</p>
                            <p><strong>Manufactured Year:</strong> {selectedVehicle.mfYear}</p>
                            <p><strong>Service Type:</strong> {selectedVehicle.serviceType}</p>
                            <p><strong>Service Date:</strong> {formatDate(selectedVehicle.date)}</p>
                            {/* <p><strong>Next Service Date:</strong> {formatDate(selectedVehicle.nextS_date)}</p>                          */}
                            <p><strong>Appointment Time Slot:</strong> {selectedVehicle.timeSlot}</p>
                            <hr />
                            <img src={logo3} alt="Seal" style={{ width: '100px' }} />
                            <p>Thank you for trusting us with your vehicle's care!</p>
                        </Card.Body>
                    </Card>
                </div>
            )}

            {/* Print Button */}
            <div className="text-center mt-4">
                {selectedVehicle && (
                    <button onClick={handlePrint} className="btn btn-primary">
                        Print History Report
                    </button>
                )}
            </div>
        </div>
    );
};

export default VehicleHistory;