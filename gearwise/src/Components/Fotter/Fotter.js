import React from 'react'
import Img1 from '../../img/mobil.jpg'
import Img2 from '../../img/3m.png'
import Img3 from '../../img/audi.png'
import Img4 from '../../img/wuerth.jpg'


export default function Fotter() {
  return (
    <div >
      <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Get In Touch</h2>
                            <p><i className="fa fa-map-marker-alt"></i>No 123, Market Road, Dambulla</p>
                            <p><i className="fa fa-phone-alt"></i>0712209112</p>
                            <p><i className="fa fa-envelope"></i>gearwise@gmail.com</p>
                            <div className="footer-social">
                                <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6" >
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/About"  style={{textDecoration:'none'}}>About Us</a>
                            <a href="/Contact" style={{textDecoration:'none'}}>Contact Us</a>
                            <a href="/Service" style={{textDecoration:'none'}}>Our Service</a>
                            <a href="/Reward" style={{textDecoration:'none'}}>Service Reward Points</a>
                            <a href="/Packages" style={{textDecoration:'none'}}>Pricing Plan</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Useful Links</h2>
                            <a href="" style={{textDecoration:'none'}}>Terms of use</a>
                            <a href="" style={{textDecoration:'none'}}>Privacy policy</a>
                            <a href="" style={{textDecoration:'none'}}>Cookies</a>
                            <a href="" style={{textDecoration:'none'}}>Help</a>
                            <a href="/Review" style={{textDecoration:'none'}}>Reviews</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>powerd By</h2>
                            <div  style={{display:'flex',justifyContent:'space-between'}}>
                            <img src={Img1} alt="Image" style={{width:'100px'}}/>
                            {''}
                            <img src={Img4} alt="Image" style={{width:'100px'}}/>
                            </div >
                            <div  style={{display:'flex',justifyContent:'space-between',marginTop:'30px'}}>
                            <img src={Img2} alt="Image" style={{width:'120px'}}/>
                            {' '}
                            <img src={Img3} alt="Image" style={{width:'100px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <p>&copy; <a href="#"  style={{textDecoration:'none'}}>GearWise</a>, All Right Reserved. Designed By <a href=""  style={{textDecoration:'none'}}>CST/Group-11</a></p>
            </div>
        </div>
    </div>
  )
}
