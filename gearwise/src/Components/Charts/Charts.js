import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Charts() {
  const [serviceTypeCounts, setServiceTypeCounts] = useState({ Wheel: 0, body: 0 });
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [appointmentDetails, setAppointmentDetails] = useState([]);
  const [appointmentCountfortomorow, setAppointmentCountfortomorow] = useState(0);
  const [appointmentDatesfortomorow, setAppointmentDatesfortomorow] = useState([]);
  const [appointments, setAppointments] = useState([]);

  console.log("details:", appointmentDetails);
  // console.log("count today :", appointmentCount);
  // console.log("tommorow", appointmentDatesfortomorow);
  // console.log("count tomorrow :", appointmentCountfortomorow);
  // console.log("Appointments:", appointments);
  useEffect(() => {
    const fetchAppointmentCount = async () => {
      try {
        const response = await axios.get('http://localhost:4005/api/appointments/countforanalysis');
        setAppointmentCount(response.data.count);
        setAppointmentDetails(response.data.appointmentDetails);
        setAppointmentCountfortomorow(response.data.counttomorow);
        setAppointmentDatesfortomorow(response.data.appointmentDatestomorow);
        setAppointments(response.data.filteredAppointments);
      } catch (error) {
        console.error("There was an error fetching the appointment count!", error);
      }
    };
    fetchAppointmentCount();
  }, []);

  // for line chart
  const dataForBarChart = [
    {
      name: 'Today',
      count: appointmentCount,
    },
    {
      name: 'Tomorrow',
      count: appointmentCountfortomorow,
    },
    {

    }
  ];

  const dataforlinear = [
    {
      name: 'Basic',
      today: 4000,
      tommorow: 2400,
    },
    {
      name: 'Premium',
      today: 4000,
      tommorow: 2400,
    },
    {
      name: 'Complex',
      today: 4000,
      tommorow: 2400,
    },
    {
      name: 'Full',
      today: 4000,
      tommorow: 2400,
    },
    {
      name: 'Body',
      today: 4100,
      tommorow: 2400,
    },
    {
      name: 'Wheel A',
      today: 2000,
      tommorow: 1400,
    },
    {
      name: 'Other S',
      today: 400,
      tommorow: 2200,
    },
  ];

  return (
    <div className="price">
      <div className="container">
        <div className="section-header text-center">
          <p>Data Analysis</p>
        </div>
        {/* for counting the service type */}
        <div>
      <h1>Appointment Details</h1>
      <ul>
        {appointmentDetails.map((appointment, index) => (
          <li key={index}>
            Date: {appointment.date}, Service Type: {appointment.serviceType}
          </li>
        ))}
      </ul>
      <h2>Service Type Counts</h2>
      Count : {serviceTypeCounts.Wheel}
      {/* <p>Full: {serviceTypeCounts.full}</p>
      <p>Body: {serviceTypeCounts.body}</p> */}
      {/* Add more service types as needed */}
    </div>
        <div className="row">
          <div className="col-md-6">
            <div className="price-item featured-item">
              <div className="price-header">
                <h3>Cleaning</h3>
              </div>
              <div className="price-body">
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <LineChart
                      data={dataforlinear}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="today" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="tommorow" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="price-item featured-item">
              <div className="price-header">
                <h3>No of Appointments</h3>
              </div>
              <div className="price-body">
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={500}
                      height={300}
                      data={dataForBarChart}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                      barSize={15}
                    >
                      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
