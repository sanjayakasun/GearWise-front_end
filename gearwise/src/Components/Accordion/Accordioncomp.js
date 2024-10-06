import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DatePicker from 'react-datepicker';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const moment = require('moment');


export default function Accordioncomp() {

  const [modalShow, setModalShow] = React.useState(false);
  const customerId = "665e144096c5017136fb33a0"
  const [appointments, setappointment] = useState([])
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState([]);
  const [selcetedDate, setSelectedReDate] = useState([]);
  const [previousTimeSlot, setpreviousSelectedTimeSlot] = useState([]);
  const [previousdate, setpreviousSelectedReDate] = useState([]);
  const [timeSlot, setTimeSlot] = useState("");
  const [date, setSelectedDate] = useState(null);

  // for reshedule appointment
  const [show, setShow] = useState(false);

  // const handleresheduledata = (retimeslot,redate) =>{
  //   reshedule();
  // }

  const handleClose = () => {
    // save updated data to db
    setShow(false);
  }
  const handleShow = (appointmentId) => {
    setSelectedAppointmentId(appointmentId)
    // lodaing prevoius appointmnet data to reshedule form
    setShow(true);
  }

  // const handleSelectTimeSlot = (event) => {
  // // setting new selected values for resheduling
  //   setSelectedTimeSlot(event.target.value);
  // };
  // const [date, setSelectedDate] = useState(null);
  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };
  // end for reshedule appointment


  function formatDateTime(isoString) {
    return moment(isoString).format("MM/DD/yyyy");
    //return moment(isoString).format('MMMM Do YYYY, h:mm:ss a');
  }
  // Example usage

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
  // used for msg modal
  function MyVerticallyCenteredModal(props) {

    const updateStatus = async (status) => {
      try {
        const response = await axios.put('http://localhost:4005/api/appointments/cancelappointmnet/' + appointmentId, { status: status });
        console.log("status ", response.data); // Optionally handle the response
        props.onHide(); // Hide the modal after updating the status
        toast.success('Appointment successfully Canceled');
        setTimeout(() => {
          window.location.reload();
        }, 3000); // 3 seconds delay to reload page
      } catch (error) {
        console.error('Error updating appointment status', error);
        toast.error("Failed to Cancel appointment");
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
          <Button onClick={props.onHide} variant='success'>No</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // end of msd modal for cancelling appointment 


  function Example() {
    // for new update of selecting
    const [date, setDate] = useState('');
    const [timeSlots, setTimeSlots] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

    const availableTimeSlots = [
      '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
      '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
      '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
    ];

    useEffect(() => {
      if (date) {
        axios.get(`http://localhost:4005/api/appointments/createappointment?date=${date}`)
          .then(response => {
            setAppointments(response.data);
          });
      }
    }, [date]);

    const isTimeSlotAvailable = (time) => {
      console.log("Appointments for toay", appointments)
      const appointmentsAtTime = appointments.filter(appointment => appointment.timeSlot === time);
      console.log("appointments at this slot", appointmentsAtTime);
      if (appointmentsAtTime.length >= 2) {
        return false;
      }

      if (date === new Date().toISOString().split('T')[0]) {
        const currentTime = new Date().getHours();
        const slotHour = parseInt(time.split(':')[0], 10);
        const slotPeriod = time.split(' ')[1];
        const slotTime24 = slotPeriod === 'PM' && slotHour !== 12 ? slotHour + 12 : slotHour;
        if (slotTime24 <= currentTime) {
          return false;
        }
      }
      return true;
    };


    const handleDateChange = (event) => {
      setDate(event.target.value);
      setTimeSlots(availableTimeSlots);
    };

    const handleBooking = (time) => {
      setSelectedTimeSlot(time); // <-- Set the selected time slot
    };

    const disablePastDates = () => {
      const today = new Date().toISOString().split('T')[0];
      return today;
    };



    const appointmentId = selectedAppointmentId;
    // const [date, setSelectedDate] = useState(null);
    // const [selectedTimeSlot, setSelectedTimeSlot] = useState([]);

    // handle the reschedule data
    const handleresheduledata = (timeSlot, date) => {
      reshedule(timeSlot, date);
    }
    const handleSelectTimeSlot = (event) => {
      setSelectedTimeSlot(event.target.value); // <-- Update the state on selection
    };

    // const handleDateChange = date => {
    //   setSelectedDate(date);
    // };
    console.log("slected new date", date);
    console.log("Selected tinmeslot", selectedTimeSlot);

    const reshedule = async (timeSlot, date) => {
      console.log(timeSlot);
      console.log(date);
      try {
        const responsereshedule = await axios.put('http://localhost:4005/api/appointments/resheduleappointmnet/' + appointmentId, { timeSlot: timeSlot, date: date });
        console.log(responsereshedule.data); // Optionally handle the response
        setShow(false);// Hide the modal after resheduling
        toast.success('Appointment successfully Rescheduled ');
        setTimeout(() => {
          window.location.reload();
        }, 3000); // 3 seconds delay to reload page
      } catch (error) {
        console.error('Error resheduling appointment', error);
        toast.error("Failed to Reschedule appointment");
      }
    };
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rescheduling Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Date</Form.Label><br />
              <input
                type="date"
                min={disablePastDates()}
                onChange={handleDateChange}
                selected={date}
              />
              {/* <DatePicker
                id="datePicker"
                selected={date}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy" // Format of the displayed date
                placeholderText="Select a date" // Placeholder text when no date is selected
              /> */}
            </Form.Group>
            <Form.Group className="time-slots" controlId="exampleForm.ControlInput1">
              <div className="time-slots">
                <Form.Label>Time Slot</Form.Label>
                <Form.Select aria-label="Floating label select example" value={selectedTimeSlot} onChange={handleSelectTimeSlot} > {/* <-- Bind value and onChange */}
                  {timeSlots.map((time, index) => (
                    <option value={time}
                      key={index}
                      disabled={!isTimeSlotAvailable(time)}
                      className={!isTimeSlotAvailable(time) ? 'disabled' : ''}
                    >
                      {time}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={() => handleresheduledata(selectedTimeSlot, date)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  // start of resheduling/editing of appointment



  return (
    <div>
      <ToastContainer />
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
                    const appointmentdate = appointment.date;
                    const createdate = appointment.createtime;
                    const formattedDate = formatDateTime(appointmentdate);
                    const today = new Date();
                    const datetohidecancelbutton = formatDateTime(today);
                    const checkbutton = datetohidecancelbutton === createdate

                    if (datetohidecancelbutton <= formattedDate) { // to show the upcomming appointmnets only
                      if (appointment.status === "Active") { // to display only active appointmnets
                        return (
                          <Accordion >
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>Appointment Date : &ensp;<span style={{color:'green'}}> {formattedDate} </span> &ensp;& Time :&ensp;<span style={{color:'green'}}> {appointment.timeSlot} </span>. &ensp;<span>Expand for more information</span> </Accordion.Header>
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
                                    value={formattedDate} />

                                </Form.Group>
                                <br />
                                <h6 style={{ textAlign: "right" }}>Appointment created date : {createdate}</h6>
                                <center>
                                  {/* ,{...props.appointment._id} */}
                                  {checkbutton && <Button variant="danger" onClick={() => handleButtonClick(appointment._id)}>
                                    Cancel Appointment
                                  </Button>} &ensp;
                                  {checkbutton && <Button variant="success" onClick={() => handleShow(appointment._id)}>
                                    Reshedule appointment
                                  </Button>}

                                </center>
                                {/* used to show the msg model  */}
                                <MyVerticallyCenteredModal
                                  show={modalShow}
                                  onHide={() => setModalShow(false)}
                                />
                                {/* used to show the reshedule msg modle */}
                                <Example
                                  show={show}
                                  onHide={() => setShow(false)}
                                />
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        )
                      }
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
