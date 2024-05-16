import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';


export default function Accordioncomp() {
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
                <Accordion >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Appointment 01</Accordion.Header>
                    <Accordion.Body style={{ visibility: 'visible' }}>
                      <Form.Group>
                        <Form.Label>Vehicle Registration Number</Form.Label>
                        <Form.Control placeholder="CAM 9364" disabled />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Appointment Time</Form.Label>
                        <Form.Control placeholder="11.00 a.m - 12.00 p.m" disabled />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Appointment Date</Form.Label>
                        <Form.Control placeholder="2024/05/16" disabled />
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Appointment 02</Accordion.Header>
                    <Accordion.Body style={{ visibility: 'visible' }}>
                      <Form.Group>
                        <Form.Label>Vehicle Registration Number</Form.Label>
                        <Form.Control placeholder="VK 9067" disabled />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Appointment Time</Form.Label>
                        <Form.Control placeholder="1.00 p.m - 2.00 p.m" disabled />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Appointment Date</Form.Label>
                        <Form.Control placeholder="2024/05/16" disabled />
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
