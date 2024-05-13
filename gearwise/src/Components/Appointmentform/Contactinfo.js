import React from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function Contactinfo() {
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
                                                    placeholder="Name"
                                                />
                                                <label htmlFor="floatingPasswordCustom">Name <span>*</span></label>
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
                                                    id="floatingInputCustom"
                                                    type="email"
                                                    placeholder="name@example.com"
                                                />
                                                <label htmlFor="floatingInputCustom">Email address <span>*</span></label>
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
                                                    placeholder="Cotact NO"
                                                />
                                                <label htmlFor="floatingPasswordCustom">Contact NO <span>*</span></label>
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
