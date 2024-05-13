import React from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Appointmentform.css'
import Packages from '../Packages/Packages';


export default function Serviceinfo() {
  return (
    <div>
      <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Card className="text-center">
                            <div className="row">
                                <h4>Washing Plan</h4>
                                <div className="col-md-6">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text>
                                            <FloatingLabel controlId="floatingSelect" label="Service Type">
                                                <Form.Select aria-label="Floating label select example">
                                                    <option value="1">Basic Cleaning <span>*</span></option>
                                                    <option value="2">Premium Cleaning</option>
                                                    <option value="3">Complex Cleaning</option>
                                                    <option value="4">Full Service</option>
                                                    <option value="5">Body Wash</option>
                                                    <option value="6">Wheel Alingments</option>
                                                    <option value="7">Other Specilized Service</option>
                                                </Form.Select>
                                            </FloatingLabel>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                            <Packages/>
                        </Card>
                    </div>
                </div>
            </div>
    </div>
  )
}
