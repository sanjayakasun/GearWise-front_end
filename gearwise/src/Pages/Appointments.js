import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "../Components/Appointmentform/Appointmentform.css";
import Navbar from "../Components/Navbar/Navbar";
import Topbar from "../Components/Topbar/Topbar";
import Pageheader from "../Components/Pageheader/Pageheader";
import Fotter from "../Components/Fotter/Fotter";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Packages from "../Components/Packages/Packages";
import Appointmentbtn from "../Components/Appoinmentbtn/Appointmentbtn";
import ToastMessage from "../Components/Toast/Toast";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
const moment = require("moment");

export default function Appointments() {
  //changing the customer id for each team member
  // const customerId = "6704e63ca5bd42aad58b2af4"
  const navigate = useNavigate();
  const [customervehicleinfo, setCustomervehicleinfo] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [mfYear, setMFYear] = useState("");
  const [vrNo, setVrNo] = useState("");
  const [serviceType, setWashingPlan] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  // for updated time slot selecting
  const [date, setDate] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // for off peak
  const location = useLocation();
  const { scrollTo, buttonClick } = location.state || {};

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      // const offpeakbuttonclick = document.getElementById(location.buttonClick);
      console.log("click the off peak", buttonClick);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const availableTimeSlotsforall = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];
  const defaultTimeSlotsforoffpeak = ["06:00 PM", "07:00 PM", "08:00 PM"];

  const availableTimeSlots = buttonClick
    ? defaultTimeSlotsforoffpeak
    : availableTimeSlotsforall;

  const [customerId, setCustomerId] = useState(null); // Store customer ID
  // Fetch customer ID from localStorage
  useEffect(() => {
    const storedCustomerId = localStorage.getItem("customerId");
    if (storedCustomerId) {
      setCustomerId(storedCustomerId);
    } else {
      // toast.error('Unauthorized Access! Please Login');
      // Redirect to login page if customerId is not available
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    if (date) {
      axios
        .get(
          `http://localhost:4005/api/appointments/createappointment?date=${date}`
        )
        .then((response) => {
          setAppointments(response.data);
        });
    }
  }, [date]);

  const isTimeSlotAvailable = (time) => {
    console.log("Appointments for toay", appointments);
    const appointmentsAtTime = appointments.filter(
      (appointment) => appointment.timeSlot === time
    );
    console.log("appointments at this slot", appointmentsAtTime);
    // ensuring the avaiblability of relevant time slot
    if (appointmentsAtTime.length >= 5) {
      return false;
    }

    if (date === new Date().toISOString().split("T")[0]) {
      const currentTime = new Date().getHours();
      const slotHour = parseInt(time.split(":")[0], 10);
      const slotPeriod = time.split(" ")[1];
      const slotTime24 =
        slotPeriod === "PM" && slotHour !== 12 ? slotHour + 12 : slotHour;
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
    setTimeSlot(time);
  };

  const disablePastDates = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };

  const handleSelectChangeWashingPlan = (event) => {
    setWashingPlan(event.target.value);
  };
  const handleSelectChangeVehicleType = (event) => {
    setVehicleType(event.target.value);
  };
  const handleSelectTimeSlot = (event) => {
    setTimeSlot(event.target.value);
  };
  // const [date, setSelectedDate] = useState(null);
  // const handleDateChange = date => {
  //   const fdate = formatDateTime( date );
  //   setSelectedDate(fdate);
  // };
  // to input formated date to db for user feindly date reading
  function formatDateTime(isoString) {
    return moment(isoString).format("MM/DD/yyyy");
    //return moment(isoString).format('MMMM Do YYYY, h:mm:ss a');
  }
  console.log("customer id for make appointment:", customerId);

  const createAppointment = async (e) => {
    e.preventDefault();
    let result = await fetch(
      "http://localhost:4005/api/appointments/createappointment",
      {
        method: "post",
        body: JSON.stringify({
          customerId,
          vehicleType,
          vehicleModel,
          mfYear,
          vrNo,
          serviceType,
          timeSlot,
          date,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(vehicleType);
    // console.log(vehicleModel);
    // console.log(mfYear);
    // console.log(vrNo);

    if (result.ok) {
      // `response.ok` is true if the status is 200-299
      toast.success("Appointment successfully created!");
      setTimeout(() => {
        navigate("/AppointmentList");
      }, 3000);
      // window.location.reload();
      // add a success msg box
      // and after click ok it mus redirect to the view appointmnet for user page
    } else {
      toast.error("Failed to create appointment.Check all the feilds");
    }

    console.log(result.status);
    let results = await result.json();
    console.log(results);

    result = await result.json;
  };

  // getting customer info using database
  useEffect(() => {
    if (customerId) {
      axios
        .get(`http://localhost:4005/api/customers/customerspro/${customerId}`)
        .then((customer) => setCustomer(customer.data))
        .catch((err) => console.log(err));
    }
  }, [customerId]);

  // Fetch vehicle data on mount
  useEffect(() => {
    if (customerId) {
      axios
        .get(`http://localhost:4005/api/vehicles/getvehicleinfo/${customerId}`)
        .then((customervehicleinfo) =>
          setCustomervehicleinfo(customervehicleinfo.data)
        )
        .catch((err) => console.log(err));
    }
  }, [customerId]);
  console.log("Vehicle info", customervehicleinfo);
  //getting vehicle information releated to customer
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Handle vehicle selection
  const handleVehicleSelection = (event) => {
    const selectedVrNo = event.target.value;
    setVrNo(selectedVrNo);
    const selectedVehicleInfo = customervehicleinfo.find(
      (vehicle) => vehicle.vrNo === selectedVrNo
    );
    if (selectedVehicleInfo) {
      setSelectedVehicle(selectedVehicleInfo);
      setVehicleModel(selectedVehicleInfo.vehicleModel);
      setMFYear(selectedVehicleInfo.mfYear);
      setVehicleType(selectedVehicleInfo.vehicleType);
    }
  };
  console.log(vehicleModel);

  return (
    <div>
      <Topbar />
      <Navbar />
      <Pageheader /> <ToastContainer />
      <form onSubmit={createAppointment}>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-header text-left">
                  <center>
                    <p>Appointment</p>
                  </center>
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
                            <label htmlFor="floatingPasswordCustom">
                              Name<span>*</span>{" "}
                            </label>
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
                            <label htmlFor="floatingPasswordCustom">
                              E-mail<span>*</span>{" "}
                            </label>
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
                            <label htmlFor="floatingPasswordCustom">
                              Contact No<span>*</span>{" "}
                            </label>
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
                        <Card.Text>
                          <FloatingLabel
                            controlId="floatingSelect"
                            label="Vehicle Registration Number"
                          >
                            <Form.Select
                              aria-label="Select vehicle registration number"
                              value={vrNo}
                              onChange={handleVehicleSelection}
                            >
                              <option value="">Select Vehicle</option>
                              {customervehicleinfo.map((vehicle, index) => (
                                <option key={index} value={vehicle.vrNo}>
                                  {vehicle.vrNo}
                                </option>
                              ))}
                            </Form.Select>
                          </FloatingLabel>
                        </Card.Text>
                      </Card.Body>
                    </div>

                    <div className="col-md-6">
                      <Card.Body>
                        <Card.Text>
                          <Form.Floating className="mb-3">
                            <Form.Control
                              id="floatingInputCustom"
                              type="text"
                              placeholder="Model of Vehicle"
                              value={vehicleModel}
                              onChange={(e) => setVehicleModel(e.target.value)}
                            />
                            <label htmlFor="floatingInputCustom">
                              Model of Vehicle
                            </label>
                          </Form.Floating>
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Card.Body>
                        <Card.Text>
                          <Form.Floating>
                            <Form.Control
                              id="floatingPasswordCustom"
                              type="text"
                              placeholder="Manufactured Year"
                              value={mfYear}
                              onChange={(e) => setMFYear(e.target.value)}
                            />
                            <label htmlFor="floatingPasswordCustom">
                              Manufactured Year
                            </label>
                          </Form.Floating>
                        </Card.Text>
                      </Card.Body>
                    </div>

                    <div className="col-md-6">
                      <Card.Body>
                        <Card.Text>
                          <Form.Floating>
                            <Form.Control
                              id="floatingPasswordCustom"
                              type="text"
                              placeholder="Manufactured Year"
                              value={vehicleType}
                              onChange={(e) => setVehicleType(e.target.value)}
                            />
                            <label htmlFor="floatingSelectCustom">
                              Vehicle Type
                            </label>
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
                          <FloatingLabel
                            controlId="floatingSelect"
                            label="Service Type"
                          >
                            <Form.Select
                              aria-label="Floating label select example"
                              value={serviceType}
                              onChange={handleSelectChangeWashingPlan}
                            >
                              <option value="Basic Cleaning">
                                Basic Cleaning <span>*</span>
                              </option>
                              <option value="Premium Cleaning">
                                Premium Cleaning
                              </option>
                              <option value="Complex Cleaning">
                                Complex Cleaning
                              </option>
                              <option value="Full Service">Full Service</option>
                              <option value="Body Wash">Body Wash</option>
                              <option value="Wheel Alingments">
                                Wheel Alingments
                              </option>
                              <option value="Other Specilized Service">
                                Other Specilized Service
                              </option>
                            </Form.Select>
                          </FloatingLabel>
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </div>
                  <Packages />
                </Card>
                <div id="container"></div>
                {/* service type is over */}
                <br />
                <Card className="text-center">
                  <div className="row">
                    <h3>
                      By Selecting the time slot you can easily make the
                      Appointment
                    </h3>
                    <div className="col-md-6">
                      <Card.Body>
                        <Card.Title>Pick a Date</Card.Title>
                        <input
                          type="date"
                          min={disablePastDates()}
                          onChange={handleDateChange}
                        />
                      </Card.Body>
                    </div>
                    <div className="col-md-6">
                      {buttonClick ? (
                        <div>
                          {/* The content you want to show when the button is clicked */}
                          <Card.Body>
                            <Card.Title>
                              Select Available{" "}
                              <span style={{ color: "green" }}>
                                Off Peak Pricing
                              </span>{" "}
                              Time Slot
                            </Card.Title>
                            <div
                              className="time-slots"
                              style={{ justifyContent: "center" }}
                            >
                              {timeSlots.map((time, index) => (
                                <button
                                  key={index}
                                  disabled={!isTimeSlotAvailable(time)}
                                  onClick={() => handleBooking(time)}
                                  className={
                                    isTimeSlotAvailable(time)
                                      ? "available"
                                      : "disabled"
                                  }
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </Card.Body>
                        </div>
                      ) : (
                        <Card.Body>
                          <Card.Title>Select Available Time Slot</Card.Title>
                          <h6>
                            6.00 p.m to 8.00 p.m Time slots are Available in
                            Off-Peak Pricing
                          </h6>
                          <div
                            className="time-slots"
                            style={{ justifyContent: "center" }}
                          >
                            {timeSlots.map((time, index) => (
                              <button
                                key={index}
                                disabled={!isTimeSlotAvailable(time)}
                                onClick={() => handleBooking(time)}
                                className={
                                  isTimeSlotAvailable(time)
                                    ? "available"
                                    : "disabled"
                                }
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </Card.Body>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <br />
        {/* <Appointmentbtn/> */}
      </form>
      <Fotter />
    </div>
  );
}
