import React from 'react'
import Img1 from '../../img/about.jpg'
import { useLocation } from 'react-router-dom';

export default function Aboutus() {
    const location = useLocation();
    const hideButtonPath = '/About';
    const hideButton = location.pathname === hideButtonPath;
  return (
    <div>
        <div class="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-img">
                            <img src={Img1} alt="Image"/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="section-header text-left">
                            <p>About Us</p>
                            <h2>car washing and detailing</h2>
                        </div>
                        <div class="about-content">
                            <p>
                            Welcome to <strong>GearWise</strong> system of <strong>Autospa service Station</strong>, your ultimate destination for premium automated car care. At GearWise, we've redefined the car wash and maintenance experience by combining cutting-edge technology with unparalleled convenience and exceptional service.
                            </p>
                            <ul>
                                <li><i class="far fa-check-circle"></i>Seats washing</li>
                                <li><i class="far fa-check-circle"></i>Vacuum cleaning</li>
                                <li><i class="far fa-check-circle"></i>Interior wet cleaning</li>
                                <li><i class="far fa-check-circle"></i>Window wiping</li>
                            </ul>
                            {!hideButton && <a class="btn btn-custom" href="/About">Learn More</a>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
