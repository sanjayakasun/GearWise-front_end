import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


export default function Accordioncomp() {

  const customerId = "665e144096c5017136fb33a0"
  const [appointments, setappointment] = useState([])
  useEffect(() => {
    //for testing only 665e144096c5017136fb33a0 otherwise remove the id
    axios.get('http://localhost:4005/api/appointments/viewappointment/' + customerId)
      .then(appointments => setappointment(appointments.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header text-left">
              <center><p>View Appointment</p></center>
            </div>
            <div className="row">
              <div className="col-md-12">
                {
                  appointments.map(appointment => {
                    return (
                      <Accordion >
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Appointment</Accordion.Header>
                          <Accordion.Body style={{ visibility: 'visible' }}>
                          <Form.Group>
                              <Form.Label>Appointment ID</Form.Label>
                              <Form.Control placeholder="vr" disabled
                                value={appointment._id} />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Vehicle Registration Number</Form.Label>
                              <Form.Control placeholder="vr" disabled
                                value={appointment.vrNo} />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Appointment Time</Form.Label>
                              <Form.Control placeholder="11.00 a.m - 12.00 p.m" disabled 
                              value={appointment.timeSlot} />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Appointment Date</Form.Label>
                              <Form.Control placeholder="2024/05/16" disabled 
                              value={appointment.date} />
                            </Form.Group>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    )

                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
