import React from 'react'

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
                            <a href="/Packages" className="nav-item nav-link">Packages</a>
                            <a href="/Location" className="nav-item nav-link">Washing Points</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu">
                                    <a href="/Blog" className="dropdown-item">Blog Grid</a>
                                    <a href="/Single" className="dropdown-item">Detail Page</a>
                                    <a href="/Team" className="dropdown-item">Team Member</a>
                                    <a href="/Booking" className="dropdown-item">Schedule Booking</a>
                                </div>
                            </div>
                            <a href="/Contact" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="ml-auto">
                            <a className="btn btn-custom" href="#">Get Appointment</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}
