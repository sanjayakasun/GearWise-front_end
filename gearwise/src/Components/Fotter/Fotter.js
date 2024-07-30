import React, { useState } from 'react'
import Img1 from '../../img/mobil.jpg'
import Img2 from '../../img/3m.png'
import Img3 from '../../img/audi.png'
import Img4 from '../../img/wuerth.jpg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';
import './Loader.css';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';



export default function Fotter() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {

    const handleyesClick = () => {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        navigate('/Appointment', { state: { scrollTo: 'container' } });
        setModalShow(false);
      }, 5000);// Simulate a loading process
      // Hide the modal after updating the status
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Tips
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>What is Off-Peak Pricing ?</h4>
          <p>
            In here we Provide a time range for customers as there free time.
            as usually from <strong>6.00 p.m to 8.00 p.m.</strong>
            <br />You can make the appointment as the availability of the time slot.
          </p>
          <div className="spinner-container">
            {loading && (
              <ThreeDots
                className="spinner"
                height="100"
                width="100"
                color="#00BFFF"
                ariaLabel="loading"
              />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleyesClick} variant='success'>Cehck Off-Peak Pricing</Button>
          <Button onClick={props.onHide} variant='danger'>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const handleClick = () => {
    setModalShow(true);
  };




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
                <a href="/About" style={{ textDecoration: 'none' }}>About Us</a>
                <a href="/Contact" style={{ textDecoration: 'none' }}>Contact Us</a>
                <a href="/Service" style={{ textDecoration: 'none' }}>Our Service</a>
                <a href="/Reward" style={{ textDecoration: 'none' }}>Service Reward Points</a>
                <a href="/Packages" style={{ textDecoration: 'none' }}>Pricing Plan</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-link">
                <h2>Useful Links</h2>
                <a href="/Review" style={{ textDecoration: 'none' }}>Reviews</a>
                <a href="#" onClick={handleClick} style={{ textDecoration: 'none' }}>Off Peak Pricing</a>
                <a href="" style={{ textDecoration: 'none' }}>Terms of use</a>
                <a href="" style={{ textDecoration: 'none' }}>Privacy policy</a>
                <a href="" style={{ textDecoration: 'none' }}>Help</a>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-newsletter">
                <h2>powerd By</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <img src={Img1} alt="Image" style={{ width: '100px' }} />
                  {''}
                  <img src={Img4} alt="Image" style={{ width: '100px' }} />
                </div >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                  <img src={Img2} alt="Image" style={{ width: '120px' }} />
                  {' '}
                  <img src={Img3} alt="Image" style={{ width: '100px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <p>&copy; <a href="#" style={{ textDecoration: 'none' }}>GearWise</a>, All Right Reserved. Designed By <a href="" style={{ textDecoration: 'none' }}>CST/Group-11</a></p>
        </div>
      </div>
    </div>
  )
}
