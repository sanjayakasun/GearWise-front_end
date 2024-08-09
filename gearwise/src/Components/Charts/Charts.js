import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Charts() {
  let complexcount = 0;
  let basiccount = 0;
  let premiumcount = 0;
  let fullservcount = 0;
  let bodycount = 0;
  let wheelcount = 0;
  let othercount = 0;
  let fullcountfortody = 0;
  let complexcounttomo = 0;
  let basiccounttomo = 0;
  let premiumcounttomo = 0;
  let fullservcounttomo = 0;
  let bodycounttomo = 0;
  let wheelcounttomo = 0;
  let othercounttomo = 0;
  let fullcountfortomo = 0;
  const [serviceTypeCounts, setServiceTypeCounts] = useState({ Wheel: 0, body: 0 });
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [appointmentDetails, setAppointmentDetails] = useState([]);
  const [appointmentCountfortomorow, setAppointmentCountfortomorow] = useState(0);
  const [appointmentDatesfortomorow, setAppointmentDatesfortomorow] = useState([]);
  const [appointments, setAppointments] = useState([]);

  console.log("details:", appointmentDetails);
  // if(appointmentDetails.serviceType === 'Complex Cleaning'){
  //   console.log("Complex Cleaning",1)
  // }
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

  {appointmentDetails.map((appointment, index) => {
    if (appointment.serviceType === 'Complex Cleaning') {
      complexcount++;
    }else if (appointment.serviceType === 'Basic Cleaning') {
      basiccount++;
    }else if (appointment.serviceType === 'Premium Cleaning') {
      premiumcount++;
    }else if (appointment.serviceType === 'Full Service') {
      fullservcount++;
    }else if (appointment.serviceType === 'Body Wash') {
      bodycount++;
    }else if (appointment.serviceType === 'Wheel Alingments') {
      wheelcount++;
    }else {
      othercount++;
    }
  })}

  fullcountfortody = complexcount+basiccount+premiumcount+fullservcount+bodycount+wheelcount+othercount;

  {appointmentDatesfortomorow.map((appointment, index) => {
    if (appointment.serviceType === 'Complex Cleaning') {
      complexcounttomo++;
    }else if (appointment.serviceType === 'Basic Cleaning') {
      basiccounttomo++;
    }else if (appointment.serviceType === 'Premium Cleaning') {
      premiumcounttomo++;
    }else if (appointment.serviceType === 'Full Service') {
      fullservcounttomo++;
    }else if (appointment.serviceType === 'Body Wash') {
      bodycounttomo++;
    }else if (appointment.serviceType === 'Wheel Alingments') {
      wheelcounttomo++;
    }else {
      othercounttomo++;
    }
  })}
  fullcountfortomo = complexcounttomo+basiccounttomo+premiumcounttomo+fullservcounttomo+bodycounttomo+wheelcounttomo+othercounttomo;




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
      today: basiccount,
      tommorow: basiccounttomo,
    },
    {
      name: 'Premium',
      today: premiumcount,
      tommorow: premiumcounttomo,
    },
    {
      name: 'Complex',
      today: complexcount,
      tommorow: complexcounttomo,
    },
    {
      name: 'Full',
      today: fullservcount,
      tommorow: fullservcounttomo,
    },
    {
      name: 'Body',
      today: bodycount,
      tommorow: bodycounttomo,
    },
    {
      name: 'Wheel A',
      today: wheelcount,
      tommorow: wheelcounttomo,
    },
    {
      name: 'Other S',
      today: othercount,
      tommorow: othercounttomo,
    },
  ];

  return (
    <div className="price">
      <div className="container">
        <div className="section-header text-center">
          <p>Data Analysis & Charts</p>
        </div>

        <div className="max-w-[85rem] px-4 py-0 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
            <div className="p-4 md:p-5 flex justify-between gap-x-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Total Count for Today
                </p>
              </div>
              <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-green-600 text-white rounded dark:bg-blue-900 dark:text-blue-200">
                <h3>
                {fullcountfortody}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
            <div className="p-4 md:p-5 flex justify-between gap-x-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Total Count for <strong>tommorow</strong>
                </p>
              </div>
              <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-red-600 text-white rounded dark:bg-blue-900 dark:text-blue-200">
                <h3>
                {fullcountfortomo}
                </h3>
              </div>
            </div>
          </div>
          </div>
          </div>
        {/* for counting the service type */}
        <br/>
        <div className="row">
          <div className="col-md-6">
            <div className="price-item featured-item">
              <div className="price-header">
                <h3>service Information</h3>
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
