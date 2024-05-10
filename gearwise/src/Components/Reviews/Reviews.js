import React from 'react'
import Img1 from '../../img/testimonial-2.jpg'
import Img2 from '../../img/testimonial-2.jpg'
import Img3 from '../../img/testimonial-3.jpg'
import Img4 from '../../img/testimonial-4.jpg'
import './Reviews.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Reviews() {
  return (
    <div>
      <div className="testimonial">
            <div className="container">  
                <div className="section-header text-center">
                    <p>Reviews</p>
                    <h2>What our clients say</h2>
                </div>
                <Container >
                <Row>
                <div className="owl-carousel testimonials-carousel" style={{display:'flex',flexWrap:'wrap'}}>
                <Col xs={12} sm={6} md={4} lg={3} >
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
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
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
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} >
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
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
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
                    </Col>
                </div>
                </Row>
                </Container>
            </div>
        </div>
    </div>
  )
}
