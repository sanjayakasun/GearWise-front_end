import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../Components/Appointmentform/Appointmentform.css'
import Navbar from '../Components/Navbar/Navbar'
import Topbar from '../Components/Topbar/Topbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Fotter from '../Components/Fotter/Fotter'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Packages from '../Components/Packages/Packages'
import Appointmentbtn from '../Components/Appoinmentbtn/Appointmentbtn'
import ToastMessage from '../Components/Toast/Toast';
const moment = require('moment');

export default function Appointments() {

  const customerId = "6655bf924abd57d59f2f1b66"

  const [customer, setCustomer] = useState([])
  const [vehicleType, setVehicleType] = useState("")
  const [vehicleModel, setVehicleModel] = useState("")
  const [mfYear, setMFYear] = useState("")
  const [vrNo, setVRNo] = useState("")
  const [serviceType, setWashingPlan] = useState("")
  const [timeSlot, setTimeSlot] = useState("")

  // for toast message
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('success');

  const handleSelectChangeWashingPlan = (event) => {
    setWashingPlan(event.target.value);
  };
  const handleSelectChangeVehicleType = (event) => {
    setVehicleType(event.target.value);
  };
  const handleSelectTimeSlot = (event) => {
    setTimeSlot(event.target.value);
  };
  const [date, setSelectedDate] = useState(null);
  const handleDateChange = date => {
    const fdate = formatDateTime( date );
    setSelectedDate(fdate);
  };
  // to input formated date to db for user feindly date reading
  function formatDateTime(isoString) {
    return moment(isoString).format("MM/DD/yyyy");
    //return moment(isoString).format('MMMM Do YYYY, h:mm:ss a');
  }
  console.log('Selected date:', date);

  const createAppointment = async (e)=>{
    e.preventDefault();
    let result = await fetch('http://localhost:4005/api/appointments/createappointment',{
      method:'post',
      body: JSON.stringify({customerId,vehicleType,vehicleModel,mfYear,vrNo,serviceType,timeSlot,date}),
      headers:{
        'Content-Type' : 'application/json'
      },
    })
    // console.log(customerId);
    // console.log(timeSlot);
    // console.log(date);

    if (result.ok) { // `response.ok` is true if the status is 200-299
      setToastMessage('Appointment successfully created!');
      setToastVariant('success');
      window.location.reload();
    // add a success msg box
    // and after click ok it mus redirect to the view appointmne t for user page
    
  } else {
    setToastMessage('Failed to create appointment.');
    setToastVariant('danger');
  }
  setShowToast(true);

  console.log(result.status);
  let results = await result.json();
  console.log(results);

    result = await result.json
  }

  // getting customer info using database
  useEffect(() => {
    //for testing only 665e144096c5017136fb33a0 otherwise remove the id
    axios.get('http://localhost:4005/api/customers/customerspro/' + customerId)
      .then(customer => setCustomer(customer.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Topbar />
      <Navbar />
      <Pageheader />

      <form onSubmit={createAppointment}>
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
                <br />
                {/* contact part is over  */}
                <Card className="text-center">
                  <div className="row">
                    <h4>Vehicle Information</h4>
                    <div className="col-md-6">
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          <FloatingLabel controlId="floatingSelect" label="Vehicle Type">
                            <Form.Select aria-label="Floating label select example" value={vehicleType} onChange={handleSelectChangeVehicleType}>
                              <option value="Car">Car <span>*</span></option>
                              <option value="Van">Van</option>
                              <option value="SUV">SUV</option>
                              <option value="Truck">Truck</option>
                              <option value="Bus">Bus</option>
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
                              value={vehicleModel}
                              onChange={(e) =>setVehicleModel(e.target.value)}
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
                              value={mfYear}
                              onChange={(e) =>setMFYear(e.target.value)}
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
                              placeholder="Veicle Registerd Number" required
                              value={vrNo}
                              onChange={(e) =>setVRNo(e.target.value)}
                            />
                            <label htmlFor="floatingPasswordCustom">Veicle Registerd Number <span>*</span></label>
                          </Form.Floating>
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
                {/* vehicle infro part is over */}

                <br />
                <Card className="text-center">
                  <div className="row">
                    <h4>Washing Plan</h4>
                    <div className="col-md-6">
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          <FloatingLabel controlId="floatingSelect" label="Service Type">
                            <Form.Select aria-label="Floating label select example" value={serviceType} onChange={handleSelectChangeWashingPlan}>
                              <option value="Basic Cleaning">Basic Cleaning <span>*</span></option>
                              <option value="Premium Cleaning">Premium Cleaning</option>
                              <option value="Complex Cleaning">Complex Cleaning</option>
                              <option value="Full Service">Full Service</option>
                              <option value="Body Wash">Body Wash</option>
                              <option value="Wheel Alingments">Wheel Alingments</option>
                              <option value="Other Specilized Service">Other Specilized Service</option>
                            </Form.Select>
                          </FloatingLabel>
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </div>
                  <Packages />
                </Card>
                {/* service type is over */}
                <br />
                <Card className="text-center">
                  <div className="row">
                    <h4>Select time Slots</h4>
                    <div className="col-md-6">
                      <Card.Body>
                        <Card.Title>Time Slot</Card.Title>
                        <Card.Text>
                          <FloatingLabel controlId="floatingSelect" label="Time Sots">
                            <Form.Select aria-label="Floating label select example" value={timeSlot} onChange={handleSelectTimeSlot}>
                              <option value="08.00 a.m- 09.00 a.m">08.00 a.m- 09.00 a.m<span>*</span></option>
                              <option value="09.00 a.m- 10.00 a.m">09.00 a.m- 10.00 a.m</option>
                              <option value="10.00 a.m- 11.00 a.m">10.00 a.m- 11.00 a.m</option>
                              <option value="11.00 a.m- 12.00 p.m">11.00 a.m- 12.00 p.m</option>
                              <option value="01.00 p.m- 02.00 p.m">01.00 p.m- 02.00 p.m</option>
                              <option value="02.00 p.m- 03.00 p.m">02.00 p.m- 03.00 p.m</option>
                              <option value="03.00 p.m- 04.00 p.m">03.00 p.m- 04.00 p.m</option>
                              <option value="04.00 p.m- 05.00 p.m">04.00 p.m- 05.00 p.m</option>
                              <option value="05.00 p.m- 06.00 p.m">05.00 p.m- 06.00 p.m</option>
                              <option value="06.00 p.m- 07.00 p.m">06.00 p.m- 07.00 p.m</option>
                              <option>Off Peak Pricing Time Slot</option>
                              <option value="08.00 p.m - 09.00 p.m">08.00 p.m - 09.00 p.m</option>
                              <option value="09.00 p.m- 10.00 p.m">09.00 p.m- 10.00 p.m</option>
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
                              selected={date}
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
        </div >
        <br/>
        <ToastMessage show={showToast} setShow={setShowToast} message={toastMessage} variant={toastVariant} />
        <Appointmentbtn/>
      </form>
      <Fotter />

    </div>
  )
}