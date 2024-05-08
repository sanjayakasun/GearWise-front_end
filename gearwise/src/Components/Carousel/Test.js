import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../../img/carousel-1.jpg";
import Img2 from "../../img/carousel-2.jpg";
import Img3 from "../../img/carousel-3.jpg";
import "./Carousel.css";

function Test() {
  const centerTextStyle = {
    textAlign: "center",
  };
  return (
    <div style={centerTextStyle}>
      <Carousel fade >
        <Carousel.Item>
          <img className="d-block w-100" src={Img1} alt="First slide"/>
          <Carousel.Caption style={{justifyContent:'center'}}>
            <h3 style={{color:'red',textTransform:'uppercase'}}>Washing & Detailing</h3>
            <h1 style={{fontSize:'92px'}}>Keep your Car Newer</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <a class="btn btn-custom" href="">
              Explore More
            </a>
          </Carousel.Caption>      
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img2} className="d-block w-100" alt="Second slide" />
          <Carousel.Caption>
            <h3>Washing & Detailing</h3>
            <h1>Quality service for you</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <a class="btn btn-custom" href="">
              Explore More
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img3} className="d-block w-100" alt="Third slide" />
          <Carousel.Caption>
            <h3>Washing & Detailing</h3>
            <h1>Exterior & Interior Washing</h1>
            <p>
              Praesent commodo cursus magna, tetur.
            </p>
            <a class="btn btn-custom" href="">
              Explore More
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Test;
