import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,BarChart, Bar} from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Charts() {
    const [appointmentCount, setAppointmentCount] = useState(0);
    const [appointmentDates, setAppointmentDates] = useState([]);
    const [appointmentCountfortomorow, setAppointmentCountfortomorow] = useState(0);
    const [appointmentDatesfortomorow, setAppointmentDatesfortomorow] = useState([]);
    console.log("today:",appointmentDates);
    console.log("count today :",appointmentCount);
    console.log("tommorow",appointmentDatesfortomorow);
    console.log("count tomorrow :",appointmentCountfortomorow);
    useEffect(() => {
      const fetchAppointmentCount = async () => {
        try {
          const response = await axios.get('http://localhost:4005/api/appointments/countforanalysis');
          setAppointmentCount(response.data.count);
          setAppointmentDates(response.data.appointmentDates);
          setAppointmentCountfortomorow(response.data.counttomorow);
          setAppointmentDatesfortomorow(response.data.appointmentDatestomorow);
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

    return (
        <div className="price">
            <div className="container">
                <div className="section-header text-center">
                    <p>Data Analysis</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="price-item featured-item">
                            <div className="price-header">
                                <h3>Basic Cleaning</h3>
                            </div>
                            <div className="price-body">
                                <div style={{ width: "100%", height: 300 }}>
                                    <ResponsiveContainer>
                                        <LineChart
                                            // data={data}
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
                                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
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
                      <Bar dataKey="count" fill="#8884d8"/>
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
