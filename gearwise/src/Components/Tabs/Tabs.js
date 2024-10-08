import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Img1 from '../../img/carwash2.gif'; // Example image import
import moment from 'moment'; // For handling dates and time

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 2px solid #ccc;
  flex-wrap: wrap; /* Ensure tabs wrap on mobile */
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  ${props => props.active && `
    border-bottom: 2px solid #007bff;
    font-weight: bold;
  `}
  ${props => props.disabled && `
    color: gray;
    cursor: not-allowed;
  `}
  @media (max-width: 768px) {
    padding: 8px 12px; /* Adjust tab size on smaller screens */
    font-size: 14px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const ContentBox = styled.div`
  width: 18%;
  margin: 1%;
  padding: 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 45%; /* Stack two items per row on mobile */
    padding: 15px; /* Adjust padding on mobile */
  }
  @media (max-width: 480px) {
    width: 90%; /* Full-width for smaller phones */
    padding: 10px;
  }
`;

const EmptyBox = styled.div`
  width: 18%;
  margin: 1%;
  padding: 20px;
  display: flex;
  align-items: center;
  text-align :center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  @media (max-width: 768px) {
    font-size: 14px; /* Reduce font size for mobile */
  }
`;

const TableRow = styled.tr`
  border: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  @media (max-width: 768px) {
    padding: 8px; /* Adjust padding for mobile */
  }
`;

const Tabs = () => {
   // State hooks for appointment data
   const [appointmentCount, setAppointmentCount] = useState(0);
   const [appointments, setAppointments] = useState([]);
   const [activeTab, setActiveTab] = useState(0);
   const [currentDateTime, setCurrentDateTime] = useState(moment());

   // Fetch the appointments and time
   useEffect(() => {
     const fetchAppointmentCount = async () => {
       try {
         const response = await axios.get('http://localhost:4005/api/appointments/countforanalysis');
         setAppointmentCount(response.data.count);
         setAppointments(response.data.filteredAppointments);
       } catch (error) {
         console.error("There was an error fetching the appointment count!", error);
       }
     };
     fetchAppointmentCount();
     setCurrentDateTime(moment()); // Set the current date and time using moment.js
   }, []);

   // Time slots for the tabs
   const tabs = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'];

   // Filter appointments based on the active time slot
   const filteredAppointments = appointments.filter(appointment => appointment.timeSlot === tabs[activeTab]);

   // Disable time slots before the current time
   const isTimeSlotDisabled = (time) => {
     const timeSlot = moment(time, 'hh:mm A');
     return timeSlot.isBefore(currentDateTime);
   };

   const MAX_SLOTS = 5;
   const remainingSlots = MAX_SLOTS - filteredAppointments.length;
   return (
    <Container>
      <div class="section-header text-center">
                            <p>Virtual Queue</p>
                        </div>
      <h1>Queue for the date {currentDateTime.format('MMMM Do YYYY')}</h1>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            active={activeTab === index}
            onClick={() => !isTimeSlotDisabled(tab) && setActiveTab(index)} // Disable tab click if time slot is past
            disabled={isTimeSlotDisabled(tab)} // Disable styling if time slot is past
          >
            {tab}
          </Tab>
        ))}
      </TabsContainer>
      <h5>Available slots count for {tabs[activeTab]} : <span>{remainingSlots > 0 ? remainingSlots : 0}</span></h5> 
      <ContentContainer>
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment, idx) => (
            <ContentBox key={idx}>
              <img src={Img1} alt="Car" />
              <p>{appointment.details}</p>
            </ContentBox>
          ))
        ) : (
          <React.Fragment>
            <EmptyBox style={{backgroundColor:'#202C45',color:"white",borderRadius:"20px"}}>No appointments for this time slot.</EmptyBox>
            <EmptyBox><a className="btn btn-custom" href="/Appointment">Book your space Now!</a></EmptyBox>
          </React.Fragment>
        )}
      </ContentContainer>
    </Container>
  );
};

export default Tabs;