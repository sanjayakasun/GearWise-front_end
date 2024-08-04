import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Img1 from '../../img/Addvehicle1.jpg';

export default function Addvehicle() {
    return (
        <div>
            <style>{`
                .red-icon {
                    color: red;
                }
                .button-container {
                    display: flex;
                    justify-content: flex-end;
                    margin-right: 45px; /* Adjust this value to move the button to the left */
                    margin-bottom: 20px; /* Adjust this value to add space below the button */
                }
            `}</style>
            <div className="container">
                <div className="row align-items-center">
                    {/* Profile change start */}

                    <div className="col-lg-5">
                        <div className="section-header text-left">
                            <p>Vehicle Space</p>
                            <h2>Add Your Vehicle</h2>
                        </div>
                        <div className="about-content">
                            <p>
                                Manage your entire vehicle fleet with ease at <strong>GearWise! </strong>
                                Here, you can effortlessly add details for each of your vehicles.
                            </p>
                            <ul>
                                <li><i className="far fa-check-circle red-icon"></i>Easily manage multiple vehicles: Add information for all your vehicles in one place.</li>
                                <li><i className="far fa-check-circle red-icon"></i> Ensure that every vehicle’s details are captured, providing a complete overview of your entire fleet.</li>
                                {/* <li><i className="far fa-check-circle red-icon"></i> Make It Yours</li> */}
                            </ul>
                            
                            {/* {!hideButton && <a className="btn btn-custom" href="/Reward">Learn More</a>} */}
                        </div>
                        <img src={Img1} alt="Image" style={{ width: '450px', height: 'auto' }} />
                    </div>

                    <div className="col-lg-7" style={{ paddingBottom: '60px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Card className="text-center">
                                        <div className="row">
                                            <h4>Vehicle Information</h4>
                                            <Card.Body>
                                                <Card.Title></Card.Title>
                                                <Card.Text>
                                                    <FloatingLabel controlId="floatingSelect" label="Vehicle Type">
                                                        <Form.Select aria-label="Floating label select example">
                                                            <option value="1">Car <span>*</span></option>
                                                            <option value="2">Van</option>
                                                            <option value="3">SUV</option>
                                                            <option value="3">Truck</option>
                                                            <option value="3">Bus</option>
                                                        </Form.Select>
                                                    </FloatingLabel>
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Body>
                                                <Card.Title></Card.Title>
                                                <Card.Text>
                                                    <Form.Floating className="mb-3">
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="Text"
                                                            placeholder="Model of Vehicle"
                                                        />
                                                        <label htmlFor="floatingInputCustom">Model of Vehicle <span>*</span></label>
                                                    </Form.Floating>
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                        <div className="row">
                                            <Card.Body>
                                                <Card.Title></Card.Title>
                                                <Card.Text>
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingPasswordCustom"
                                                            type="text"
                                                            placeholder="Manufactured Year"
                                                        />
                                                        <label htmlFor="floatingPasswordCustom">Manufactured Year</label>
                                                    </Form.Floating>
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Body>
                                                <Card.Title></Card.Title>
                                                <Card.Text>
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingPasswordCustom"
                                                            type="text"
                                                            placeholder="Vehicle Registered Number" required
                                                        />
                                                        <label htmlFor="floatingPasswordCustom">Vehicle Registered Number <span>*</span></label>
                                                    </Form.Floating>
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                        <div className="button-container">
                                            <button type="submit" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                Add Vehicle
                                            </button>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Profile change end */}

                    {/* Profile Form end */}
                </div>
            </div>
        </div>
    );
}
