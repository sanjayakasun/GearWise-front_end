import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className="contact">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Get In Touch</p>
                        <h2>Contact for any query</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-info">
                                <h2>Quick Contact Info</h2>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="far fa-clock"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h3>Opening Hour</h3>
                                        <p>Mon - sat, 8:00 - 21:00</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa fa-phone-alt"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h3>Call Us</h3>
                                        <p><a href='0712209112' style={{ textDecoration: 'none', color: 'white' }}>0712209112</a> / <a href='0764635795' style={{ textDecoration: 'none', color: 'white' }}>0764635795</a> / <a href='0773236925' style={{ textDecoration: 'none', color: 'white' }}>0773236925</a> / <a href='0717650880' style={{ textDecoration: 'none', color: 'white' }}>0717650880</a></p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="far fa-envelope"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h3>Email Us</h3>
                                        <p><a href='gearwise24@gmail.com' style={{ textDecoration: 'none', color: 'white' }}>gearwise24@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-info">
                                <h2>Location Info</h2>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa fa-map-marker-alt"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h3>Auto Spa</h3>
                                        <h3>Main Branch</h3>
                                        <p>No 132/5, Market Road, Dambulla</p>
                                        <p><strong>Call:</strong>0712209112</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fa fa-map-marker-alt"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h3>Auto Spa</h3>
                                        <p>12/A , Kurunegala Road, Galewela</p>
                                        <p><strong>Call:</strong>0777244873</p>
                                    </div>
                                </div>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
