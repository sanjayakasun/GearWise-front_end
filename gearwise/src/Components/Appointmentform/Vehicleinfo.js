import React from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Appointmentform.css'
export default function Vehicleinfo() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Card className="text-center">
                            <div className="row">
                                <h4>Vehicle Information</h4>
                                <div className="col-md-6">
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
                                </div>
                                <div className="col-md-6">
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
                            </div>
                            <div className="row">
                                <div className="col-md-6">
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
                                </div>
                                <div className="col-md-6">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text>
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingPasswordCustom"
                                                    type="text"
                                                    placeholder="Veicle Registerd Number"  required
                                                />
                                                <label htmlFor="floatingPasswordCustom">Veicle Registerd Number <span>*</span></label> 
                                            </Form.Floating>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
