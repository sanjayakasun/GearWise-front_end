import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { toast, ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import Img1 from '../../img/Addvehicle1.jpg';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

export const Addvehicle = () => {
    // State to store form data
    const [vehicleData, setVehicleData] = useState({
        vehicleType: '',
        vehicleModel: '',
        mfYear: '',  
        vrNo: '' 
    });
    // to  get all vehicle details
    const customerId = "665e144096c5017136fb33a0"
    const navigate = useNavigate();
    const [customervehicleinfo, setCustomervehicleinfo] = useState([]);

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
            setTimeout(() => {
                window.location.reload();
              }, 3000); // 3 seconds delay to reload page
            console.log('Vehicle added successfully:', response.data);
        } catch (error) {
            // Show error toast message
            toast.error('Error adding vehicle. Please try again.', {           
            });
            console.error('Error adding vehicle:', error.response ? error.response.data : error.message);
        }
    };

    // to get all relevant vehicle information reletaed to customer
    useEffect(() => {
        axios.get('http://localhost:4005/api/vehicles/getvehicleinfo/' + customerId)
          .then(customervehicleinfo => setCustomervehicleinfo(customervehicleinfo.data))
          .catch(err => console.log(err));
      }, []);
      console.log(customervehicleinfo)

    // Delete vehicle function
    const handleDelete = async (vehicleId) => {
        try {
            await axios.delete(`http://localhost:4005/api/vehicles/myVehicle/${vehicleId}`);
            toast.success('Vehicle deleted successfully!');
            setCustomervehicleinfo(customervehicleinfo.filter(vehicle => vehicle._id !== vehicleId)); // Remove the deleted vehicle from the list
        } catch (error) {
            toast.error('Error deleting vehicle. Please try again.');
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
                <div className="row">
                    <div className="col-lg-7">
                        <div className="section-header text-left">
                            <p>Vehicle Space</p>
                            <h2>My vehicles</h2>
                        </div>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Vehicle ID</th>
                                    <th>Vehicle Info</th>
                                    <th>Vehicle <br /> Registration No</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {customervehicleinfo.map(vehicleinfo => {
                                const vehicleid = vehicleinfo._id;
                                console.log("map vehicle id", vehicleid);
                                return (
                                    <tbody key={vehicleid}>
                                        <tr>
                                            <td>{vehicleid}</td>
                                            <td>
                                                Vehicle Model : {vehicleinfo.vehicleModel}
                                                <br />
                                                Vehicle Type : {vehicleinfo.vehicleType}
                                                <br />
                                                Year : {vehicleinfo.mfYear}
                                            </td>
                                            <td>{vehicleinfo.vrNo}</td>
                                            <td style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <button><AiOutlineEdit style={{   fontSize: '20px', marginBottom: '10px' }} /></button >
                                                <button onClick={() => handleDelete(vehicleid)}><AiOutlineDelete style={{ fontSize: '20px', color: '#ff4d4f' }} /></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                        </Table>
                        
                    </div>

                    <div className="col-lg-5">
                    <div className="section-header text-left">
                            <p>Add Your Vehicle</p>
                        </div>
                        <Card className="text-center" style={{border:'none'}}>
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
