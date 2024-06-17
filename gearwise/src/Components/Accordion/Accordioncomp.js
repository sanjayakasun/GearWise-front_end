import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Accordioncomp() {

  const [modalShow, setModalShow] = React.useState(false);
  const customerId = "665e144096c5017136fb33a0"
  const [appointments, setappointment] = useState([])
  const [selectedAppointmentId,setSelectedAppointmentId] = useState(null);
  useEffect(() => {
    //for testing only 665e144096c5017136fb33a0 otherwise remove the id
    axios.get('http://localhost:4005/api/appointments/viewappointment/' + customerId)
      .then(appointments => setappointment(appointments.data))
      .catch(err => console.log(err))
  }, [])
  const handleButtonClick = (id) => {
    setModalShow(true);
    setSelectedAppointmentId(id);

};
  const appointmentId = selectedAppointmentId;
  // console.log("appointmnet id",appointmentId);

  function MyVerticallyCenteredModal(props) { // used for msg modal

    const updateStatus = async (status) => {
      try {
        const response = await axios.put('http://localhost:4005/api/appointments/cancelappointmnet/'+appointmentId, { status: status });
        console.log(response.data); // Optionally handle the response
        props.onHide(); // Hide the modal after updating the status
        
      } catch (error) {
        console.error('Error updating appointment status', error);
      }
    };
  
    const handleyesClick = () => {
      updateStatus('Cancelled'); // Change the status to 'Cancelled' when the button is clicked
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Alert ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are You Sure Want to Cancel Appointment ?</h4>
          <p>
            By cancelling your appointmnet you are unable to take a part of this Appointment again.
            if you want make another Appointment
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleyesClick} variant='danger'>Yes</Button>
          <Button onClick={props.onHide}>No</Button>
        </Modal.Footer>
      </Modal>
    );
  }


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
                    if(appointment.status === "Active"){
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
                              <center>
                              {/* ,{...props.appointment._id} */}
                                <Button variant="danger" onClick={() => handleButtonClick(appointment._id)}>
                                  Cancel Appointment
                                </Button></center>
                              <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                              />
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      )
                    }
                    

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
