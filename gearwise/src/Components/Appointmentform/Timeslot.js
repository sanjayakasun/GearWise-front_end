import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Appointmentform.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Timeslot() {
    // const MyForm = () => {
        const [selectedDate, setSelectedDate] = useState(null);

        const handleDateChange = date => {
            setSelectedDate(date);
        };

    //     const handleSubmit = event => {
    //         event.preventDefault();
            console.log('Selected date:', selectedDate);
    //         // You can submit the form data or perform other actions here
    //     };
    // }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Card className="text-center">
                            <div className="row">
                                <h4>Select time Slots</h4>
                                <div className="col-md-6">
                                    <Card.Body>
                                        <Card.Title>Time Slot</Card.Title>
                                        <Card.Text>
                                            <FloatingLabel controlId="floatingSelect" label="Time Sots">
                                                <Form.Select aria-label="Floating label select example">
                                                    <option value="1">08.00 a.m- 09.00 a.m<span>*</span></option>
                                                    <option value="2">09.00 a.m- 10.00 a.m</option>
                                                    <option value="3">10.00 a.m- 11.00 a.m</option>
                                                    <option value="4">11.00 a.m- 12.00 p.m</option>
                                                    <option value="5">01.00 p.m- 02.00 p.m</option>
                                                    <option value="6">02.00 p.m- 03.00 p.m</option>
                                                    <option value="7">03.00 p.m- 04.00 p.m</option>
                                                    <option value="8">04.00 p.m- 05.00 p.m</option>
                                                    <option value="9">05.00 p.m- 06.00 p.m</option>
                                                    <option value="10">06.00 p.m- 07.00 p.m</option>
                                                    <option>Off Peak Pricing Time Slot</option>
                                                    <option value="11">08.00 p.m - 09.00 p.m</option>
                                                    <option value="12">09.00 p.m- 10.00 p.m</option>
                                                </Form.Select>
                                            </FloatingLabel>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className="col-md-6">
                                    <Card.Body>
                                        <Card.Title>Pick a Date</Card.Title>
                                        <Card.Text>
                                        <Form.Floating className="mb-6">
                                        <DatePicker
                                                        id="datePicker"
                                                        selected={selectedDate}
                                                        onChange={handleDateChange}
                                                        dateFormat="MM/dd/yyyy" // Format of the displayed date
                                                        placeholderText="Select a date" // Placeholder text when no date is selected
                                                    />
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
