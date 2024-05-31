import React, { useState } from 'react';
import './styles.css';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaAd,
    FaSignOutAlt,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/supp",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/upload_ad",
            name:"Advertisment",
            icon:<FaAd/>
        },
        {
            path:"/logout",
            name:"Logout",
            icon:<FaSignOutAlt/>
        },
    ]
    return (
        <div className="containerrr">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none" }} className="logo"><div className='logg'>Gear<span>Wise</span> </div> </h1>
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