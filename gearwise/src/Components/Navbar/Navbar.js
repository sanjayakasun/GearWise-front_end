import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <div>
      <div className="nav-bar">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <a href="#" className="navbar-brand">MENU</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="/About" className="nav-item nav-link">About</a>
                            <a href="/Service" className="nav-item nav-link">Service</a>
                            <a href="/Appointment" className="nav-item nav-link">Get Appointment</a>
                            <a href="/Advertistments" className="nav-item nav-link">Advertistments</a>
                            <a href="/Contact" className="nav-item nav-link">Contact us</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu">
                                    <a href="/AppointmentList" className="dropdown-item">View Appointment</a>
                                    <a href="/profile" className="dropdown-item">profile</a>
                                    <a href="/Booking" className="dropdown-item"></a>
                                </div>
                            </div>
                        </div>
                        <div className="ml-auto">
                            <a className="btn btn-custom" href="/Appointment">Login</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}
