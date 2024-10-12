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
            <p>To keep your car looking and feeling newer for longer, regular maintenance is key. 
              <br/>Start by following a consistent cleaning routine, both inside and out, to prevent dirt and grime from building up. Regularly waxing your car can protect the paint and give it a lasting shine.</p>
          </Carousel.Caption>      
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img2} className="carousel-img d-block w-100" alt="Second slide" />
          <Carousel.Caption style={{justifyContent:'center',top:'3vh'}}>
            <h3 style={{color:'red',textTransform:'uppercase'}}>Washing & Detailing</h3>
            <h1 style={{fontSize:'50px'}}>Quality service for you</h1>
            <p>Providing exceptional care and attention to meet your specific needs.
              <br/>
              Ultimately, it’s about creating a positive experience where you feel valued and your needs are met with excellence.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img3} className="carousel-img d-block w-100" alt="Third slide" />
          <Carousel.Caption style={{justifyContent:'center',top:'3vh'}}>
            <h3 style={{color:'red',textTransform:'uppercase'}}>Washing & Detailing</h3>
            <h1 style={{fontSize:'50px'}}>Exterior & Interior Washing</h1>
            <p>
            Keep your vehicle clean, fresh, and well-maintained. 
            <br/>Exterior washing removes dirt, grime, and pollutants that accumulate on your car's surface, helping to protect the paint and maintain a polished look
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Test;
