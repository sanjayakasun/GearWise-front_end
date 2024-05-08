
import React from 'react';
import Supp_dash from './Pages/Supp_dash.jsx';
import Moderator_dash from './Pages/Moderator_dash.jsx';
import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Navbar from './Components/Navbar/Navbar';
import Aboutus from './Components/Aboutus/Aboutus';
import Service from './Components/Service/Service';
import Packages from './Components/Packages/Packages';
import Location from './Components/Location/Location';
import Reviews from './Components/Reviews/Reviews';
import Test from './Components/Carousel/Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Router, Routes } from 'react-router-dom';
import Advertistments from './Components/Advertistments/Advertistments';
import Fotter from './Components/Fotter/Fotter';
import Upbutton from './Components/Upbutton/Upbutton';
import Home from './Pages/Home';
import Aboutus_page from './Pages/Aboutus_page';
import Service_page from './Pages/Service_page';
import Packages_page from './Pages/Packages_page';
import Contact from './Pages/Contactuspage';
import Ad_page from './Pages/Ad_page';
import Queue_page from './Pages/Queue_page';

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<Aboutus_page/>} />
        <Route path="/Service" element={<Service_page/>} />
        <Route path="/Packages" element={<Packages_page/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Advertistments" element={<Ad_page/>} />
        <Route path="/Queue" element={<Queue_page/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;