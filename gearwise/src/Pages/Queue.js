import React from 'react';
import Tabs from '../Components/Tabs/Tabs';
import Navbar from '../Components/Navbar/Navbar';
import Pageheader from '../Components/Pageheader/Pageheader';
import Topbar from '../Components/Topbar/Topbar';

const Queue = () => {
  return (
    <div>
        <Topbar />
      <Navbar />
      <Pageheader />
      <Tabs />
    </div>
  );
};

export default Queue;
