import React from 'react'

export default function Fotter() {
  return (
    <div >
      <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-contact">
                            <h2>Get In Touch</h2>
                            <p><i class="fa fa-map-marker-alt"></i>No 123, Market Road, Dambulla</p>
                            <p><i class="fa fa-phone-alt"></i>0712209112</p>
                            <p><i class="fa fa-envelope"></i>gearwise@gmail.com</p>
                            <div class="footer-social">
                                <a class="btn" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn" href=""><i class="fab fa-youtube"></i></a>
                                <a class="btn" href=""><i class="fab fa-instagram"></i></a>
                                <a class="btn" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6" >
                        <div class="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/About"  style={{textDecoration:'none'}}>About Us</a>
                            <a href="/Contact" style={{textDecoration:'none'}}>Contact Us</a>
                            <a href="/Service" style={{textDecoration:'none'}}>Our Service</a>
                            <a href="" style={{textDecoration:'none'}}>Service Points</a>
                            <a href="/Packages" style={{textDecoration:'none'}}>Pricing Plan</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-link">
                            <h2>Useful Links</h2>
                            <a href="" style={{textDecoration:'none'}}>Terms of use</a>
                            <a href="" style={{textDecoration:'none'}}>Privacy policy</a>
                            <a href="" style={{textDecoration:'none'}}>Cookies</a>
                            <a href="" style={{textDecoration:'none'}}>Help</a>
                            <a href="" style={{textDecoration:'none'}}>FQAs</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-newsletter">
                            <h2>Newsletter</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="container copyright">
                <p>&copy; <a href="#"  style={{textDecoration:'none'}}>GearWise</a>, All Right Reserved. Designed By <a href=""  style={{textDecoration:'none'}}>CST/Group-11</a></p>
            </div>
        </div>
    </div>
  )
}
