import React from 'react'
import Img1 from '../../img/testimonial-2.jpg'
import Img2 from '../../img/testimonial-2.jpg'
import Img3 from '../../img/testimonial-3.jpg'
import Img4 from '../../img/testimonial-4.jpg'
import './Reviews.css'


export default function Reviews() {
  return (
    <div>
      <div className="testimonial">
            <div className="container">
                <div className="section-header text-center">
                    <p>Testimonial</p>
                    <h2>What our clients say</h2>
                </div>
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <img src={Img1} alt="Image"/>
                        <div className="testimonial-text">
                            <h3>Client Name</h3>
                            <h4>Profession</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <img src={Img2} alt="Image"/>
                        <div className="testimonial-text">
                            <h3>Client Name</h3>
                            <h4>Profession</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <img src={Img3} alt="Image"/>
                        <div className="testimonial-text">
                            <h3>Client Name</h3>
                            <h4>Profession</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <img src={Img4} alt="Image"/>
                        <div className="testimonial-text">
                            <h3>Client Name</h3>
                            <h4>Profession</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
