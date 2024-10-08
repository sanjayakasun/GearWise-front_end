import React, { useEffect, useState } from 'react';
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
import Modal from 'react-bootstrap/Modal';

export const Addvehicle = () => {
    // State to hold new vehicle data
    const [vehicleData, setVehicleData] = useState({
        vehicleType: '',
        vehicleModel: '',
        mfYear: '',
        vrNo: ''
    });


    const customerId = "6704e63ca5bd42aad58b2af4"; // Customer ID (can be fetched dynamically)
    const navigate = useNavigate();
    const [customervehicleinfo, setCustomervehicleinfo] = useState([]);  
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [editVehicleData, setEditVehicleData] = useState({  
        vehicleType: '',
        vehicleModel: '',
        mfYear: '',
        vrNo: ''
    });
    const [selectedVehicleId, setSelectedVehicleId] = useState(null); // State for selected vehicle ID


    // Handle change in the vehicle data input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setVehicleData({ ...vehicleData, [name]: value });
    };


    // Handle form submission to add a new vehicle
    const handleSubmit = async (e) => {
        e.preventDefault();  

        try {
            //  Add a new vehicle to (My vehicle)
            const response = await axios.post('http://localhost:4005/api/vehicles/newVehicle', {
                ...vehicleData,
                customerId: customerId // Include customer ID in the request
            });
            toast.success('Vehicle added successfully!', {});
            // Reload the page after a short delay to show the updated vehicle list
            setTimeout(() => {
                window.location.reload();
            }, 3000);
            console.log('Vehicle added successfully:', response.data);
        } catch (error) {
            toast.error('Error adding vehicle. Please try again.', {});
            console.error('Error adding vehicle:', error.response ? error.response.data : error.message);
        }
    };


    // Fetch customer vehicle information when the component mounts
    useEffect(() => {
        axios.get('http://localhost:4005/api/vehicles/getvehicleinfo/' + customerId)
            .then(customervehicleinfo => setCustomervehicleinfo(customervehicleinfo.data))
            .catch(err => console.log(err));
    }, []);


    // Deleted the vehicle in (My vehicle)
    const handleDelete = async (vehicleId) => {
        try {
             
            await axios.delete(`http://localhost:4005/api/vehicles/myVehicle/${vehicleId}`);
            toast.success('Vehicle deleted successfully!');  
            // Update state to remove deleted vehicle from the list
            setCustomervehicleinfo(customervehicleinfo.filter(vehicle => vehicle._id !== vehicleId));
            
        } catch (error) {
            toast.error('Error deleting vehicle. Please try again.');
        }

    };

    // Open modal for editing vehicle data
    const handleEdit = (vehicle) => {
        setEditVehicleData(vehicle);
        setSelectedVehicleId(vehicle._id);
        setShowModal(true);
    };


    // Handle change in the modal input fields
    const handleModalChange = (e) => {
        const { name, value } = e.target;
        setEditVehicleData({ ...editVehicleData, [name]: value });
    };


    // Update the vehicle in (My vehicle)
    const handleUpdate = async () => {
        try {
            
            await axios.put(`http://localhost:4005/api/vehicles/myVehicle/${selectedVehicleId}`, editVehicleData);
            toast.success('Vehicle updated successfully!');
            setShowModal(false);
            window.location.reload();
        } catch (error) {
            toast.error('Error updating vehicle. Please try again.');
        }
    };


    // Handle modal close action
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <ToastContainer />
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
                                const vehicleid = vehicleinfo._id; // Get vehicle ID
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
                                                <button onClick={() => handleEdit(vehicleinfo)}><AiOutlineEdit style={{ fontSize: '20px', marginBottom: '10px' }} /></button>
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
                        <Card className="text-center" style={{ border: 'none' }}>
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
                                            <label htmlFor="vehicleModel">Model of Vehicle</label>
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

                                <div style={{ paddingLeft: '240px' }}>  
                                    <button
                                        type="submit"
                                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-800 disabled:opacity-50">
                                        Add Vehicle
                                    </button>
                                </div>

                            </form>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Modal for editing vehicle details */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Vehicle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="vehicleType"
                                as="select"
                                name="vehicleType"
                                value={editVehicleData.vehicleType}
                                onChange={handleModalChange}
                            >
                                <option value="">Select Vehicle Type</option>
                                <option value="Car">Car</option>
                                <option value="Van">Van</option>
                                <option value="SUV">SUV</option>
                                <option value="Truck">Truck</option>
                                <option value="Bus">Bus</option>
                            </Form.Control>
                            <label htmlFor="vehicleType">Vehicle Type</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="vehicleModel"
                                type="text"
                                placeholder="Model of Vehicle"
                                name="vehicleModel"
                                value={editVehicleData.vehicleModel}
                                onChange={handleModalChange}
                            />
                            <label htmlFor="vehicleModel">Model of Vehicle</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="mfYear"
                                type="text"
                                placeholder="Manufactured Year"
                                name="mfYear"
                                value={editVehicleData.mfYear}
                                onChange={handleModalChange}
                            />
                            <label htmlFor="mfYear">Manufactured Year</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="vrNo"
                                type="text"
                                placeholder="Vehicle Registered Number"
                                name="vrNo"
                                value={editVehicleData.vrNo}
                                onChange={handleModalChange}
                            />
                            <label htmlFor="vrNo">Vehicle Registered Number</label>
                        </Form.Floating>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Addvehicle;
