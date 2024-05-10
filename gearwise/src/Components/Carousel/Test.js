import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../../img/car3.jpg";
import Img2 from "../../img/car4.jpg";
import Img3 from "../../img/car.jpg";

function Test() {
  const centerTextStyle = {
    textAlign: "center",
  };
  return (
    <div style={centerTextStyle}>
      <Carousel fade >
        <Carousel.Item>
          <img className="carousel-img d-block w-100" src={Img1} alt="First slide"/>
          <Carousel.Caption style={{justifyContent:'center',top:'3vh'}}>
            <h3 style={{color:'red',textTransform:'uppercase'}}>Washing & Detailing</h3>
            <h1 style={{fontSize:'50px'}}>Keep your Car Newer</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>      
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img2} className="carousel-img d-block w-100" alt="Second slide" />
          <Carousel.Caption style={{justifyContent:'center',top:'3vh'}}>
            <h3 style={{color:'red',textTransform:'uppercase'}}>Washing & Detailing</h3>
            <h1 style={{fontSize:'50px'}}>Quality service for you</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img3} className="carousel-img d-block w-100" alt="Third slide" />
          <Carousel.Caption style={{justifyContent:'center',top:'3vh'}}>
            <h3 style={{color:'red',textTransform:'uppercase'}}>Washing & Detailing</h3>
            <h1 style={{fontSize:'50px'}}>Exterior & Interior Washing</h1>
            <p>
              Praesent commodo cursus magna, tetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Test;
