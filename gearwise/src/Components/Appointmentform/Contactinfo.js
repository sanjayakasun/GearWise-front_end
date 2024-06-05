import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function Contactinfo() {

    const customerId = "665e144096c5017136fb33a0"
    const [customer , setCustomer] = useState([])
    useEffect(()=>{
        //for testing only 665e144096c5017136fb33a0 otherwise remove the id
        axios.get('http://localhost:4005/api/customers/customerspro/'+customerId)
        .then(customer => setCustomer(customer.data))
        .catch(err =>console.log(err))
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-header text-left">
                            <center><p>Appointment</p></center>
                        </div>
                        <Card className="text-center">
                            <div className="row">
                                <h4>Contact Information</h4>
                                <div className="col-md-6">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text>
                                            <Form.Floating>
                                                    <Form.Control
                                                    id="floatingPasswordCustom"
                                                    type="text"
                                                    value={customer.name}
                                                />
                                                <label htmlFor="floatingPasswordCustom">Name<span>*</span> </label>
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
                                                    value={customer.email}
                                                />
                                                <label htmlFor="floatingPasswordCustom">E-mail<span>*</span> </label>
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
                                                    value={customer.phone}
                                                />
                                                <label htmlFor="floatingPasswordCustom">Contact No<span>*</span> </label>
                                            </Form.Floating>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    )
}
