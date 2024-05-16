import React, { useState } from 'react';
import './styles.css';
import {
    FaTh,
    FaBars,
    
    FaUsers,
    FaSignOutAlt ,
    FaAd,
  
    FaStar ,
    FaCalendarAlt,
    FaBox ,
    FaExclamationTriangle ,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/admin",
            name:"Dashboard",
            icon:<FaTh/>
        },
       
        {
            path:"/customer",
            name:"Customer",
            icon:<FaUsers/>
        },
        {
            path:"/review",
            name:"Review & Ratings",
            icon:<FaStar  />
        },
        {
            path:"/appoinment",
            name:"Appoinment",
            icon:<FaCalendarAlt/>
        },
        {
            path:"/alert",
            name:"Alert",
            icon:<FaExclamationTriangle  />
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaBox  />
        },
        {
            path:"/advertisment",
            name:"Advertisment",
            icon:<FaAd />
        },
        {
            path:"/logout",
            name:"Logout",
            icon:<FaSignOutAlt />
        },
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none" }} className="logo">Logo </h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link_sidebar" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;