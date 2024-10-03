import React, { useState } from 'react';
import styled from 'styled-components';
import Img1 from '../../img/car.png';

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
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  ${props => props.active && `
    border-bottom: 2px solid #007bff;
    font-weight: bold;
  `}
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 768px) {
    width: 45%;
  }
`;

const EmptyBox = styled.div`
  width: 18%;
  margin: 1%;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 768px) {
    width: 45%;
  }
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'];

  return (
    <Container>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <Tab key={index} active={activeTab === index} onClick={() => setActiveTab(index)}>
            {tab}
          </Tab>
        ))}
      </TabsContainer>
      <ContentContainer>
        {(activeTab === 0 || activeTab === 1) && (
          <React.Fragment>
            <ContentBox><img src={Img1} alt="Coin" /></ContentBox>
            <EmptyBox>Book your space Now!</EmptyBox>
            <EmptyBox>Book your space Now!</EmptyBox>
            <EmptyBox>Book your space Now!</EmptyBox>
            <EmptyBox>Book your space Now!</EmptyBox>
          </React.Fragment>
        )}
        {activeTab === 2 && (
          <React.Fragment>
            <ContentBox><img src={Img1} alt="Coin" /></ContentBox>
            <EmptyBox>Book your space Now!</EmptyBox>
            <EmptyBox>Book your space Now!</EmptyBox>
            <EmptyBox>Book your space Now!</EmptyBox>
            <EmptyBox>Book your space Now!</EmptyBox>
          </React.Fragment>
        )}
        {activeTab !== 0 && activeTab !== 1 && activeTab !== 2 && (
          <React.Fragment>
            <EmptyBox>Book your space Now!</EmptyBox>
            <EmptyBox>Book your space Now!</EmptyBox>
            <EmptyBox>Book your space Now!</EmptyBox>
            <EmptyBox>Book your space Now!</EmptyBox>
            <EmptyBox>Book your space Now!</EmptyBox>
          </React.Fragment>
        )}
      </ContentContainer>
    </Container>
  );
};

export default Tabs;
