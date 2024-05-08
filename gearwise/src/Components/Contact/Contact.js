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
                    <div className="col-md-4">
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
                                    <p>0712209112</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="far fa-envelope"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Email Us</h3>
                                    <p>gearwise@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                <div className="control-group">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn btn-custom" type="submit" id="sendMessageButton">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-12">
                        
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
