import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { toast, ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import Img1 from '../../img/Addvehicle1.jpg';

export const Addvehicle = () => {
    // State to store form data
    const [vehicleData, setVehicleData] = useState({
        vehicleType: '',
        vehicleModel: '',
        mfYear: '',  
        vrNo: '' 
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setVehicleData({ ...vehicleData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4005/api/vehicles/newVehicle', {
                ...vehicleData,
                customerId: "665e144096c5017136fb33a0" // Example customerId, replace with actual ID
            });
            // Show success toast message
            toast.success('Vehicle added successfully!', {
                
            });
            console.log('Vehicle added successfully:', response.data);
        } catch (error) {
            // Show error toast message
            toast.error('Error adding vehicle. Please try again.', {
                
            });
            console.error('Error adding vehicle:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            
            <ToastContainer />

            <style>{`
                .red-icon {
                    color: red;
                }
                .button-container {
                    display: flex;
                    justify-content: flex-end;
                    margin-right: 45px; 
                    margin-bottom: 20px; 
                }
            `}</style>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="section-header text-left">
                            <p>Vehicle Space</p>
                            <h2>Add Your Vehicle</h2>
                        </div>
                        <div className="about-content">
                            <p>
                                Manage your entire vehicle fleet with ease at <strong>GearWise!</strong>
                                Here, you can effortlessly add details for each of your vehicles.
                            </p>
                            <ul>
                                <li><i className="far fa-check-circle red-icon"></i> Easily manage multiple vehicles.</li>
                                <li><i className="far fa-check-circle red-icon"></i> Capture every vehicle's details.</li>
                            </ul>
                        </div>
                        <img src={Img1} alt="Vehicle Space" style={{ width: '450px', height: 'auto' }} />
                    </div>

                    <div className="col-lg-7" style={{ paddingBottom: '60px' }}>
                        <Card className="text-center">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <h4>Vehicle Information</h4>
                                    <Card.Body>
                                        <FloatingLabel controlId="floatingSelect" label="Vehicle Type">
                                            <Form.Select
                                                aria-label="Vehicle Type"
                                                name="vehicleType"
                                                value={vehicleData.vehicleType}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Vehicle Type</option>
                                                <option value="Car">Car</option>
                                                <option value="Van">Van</option>
                                                <option value="SUV">SUV</option>
                                                <option value="Truck">Truck</option>
                                                <option value="Bus">Bus</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Card.Body>

                                    <Card.Body>
                                        <Form.Floating className="mb-3">
                                            <Form.Control
                                                id="vehicleModel"
                                                type="text"
                                                placeholder="Model of Vehicle"
                                                name="vehicleModel"
                                                value={vehicleData.vehicleModel}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="vehicleModel">Model of Vehicle </label>
                                        </Form.Floating>
                                    </Card.Body>
                                </div>
                                <div className="row">
                                    <Card.Body>
                                        <Form.Floating>
                                            <Form.Control
                                                id="mfYear"
                                                type="text"
                                                placeholder="Manufactured Year"
                                                name="mfYear"
                                                value={vehicleData.mfYear}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="mfYear">Manufactured Year</label>
                                        </Form.Floating>
                                    </Card.Body>
                                    <Card.Body>
                                        <Form.Floating>
                                            <Form.Control
                                                id="vrNo"
                                                type="text"
                                                placeholder="Vehicle Registered Number"
                                                name="vrNo"
                                                value={vehicleData.vrNo}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="vrNo">Vehicle Registered Number <span>*</span></label>
                                        </Form.Floating>
                                    </Card.Body>
                                </div>
                                <div className="button-container">
                                    <button type="submit" onSubmit={handleSubmit} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-800 disabled:opacity-50">
                                        Add Vehicle
                                    </button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addvehicle;
