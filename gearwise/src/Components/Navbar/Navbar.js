import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import "./Loader.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Img1 from "../../img/offer.png";
import Img2 from "../../img/offer2.png";

export default function Navbar() {
  const [customerId, setCustomerId] = useState(null);
  const [loginType, setLoginType] = useState(null); // Track login type
  const navigate = useNavigate();

  useEffect(() => {
    // Check for token and loginType in the URL after Google login
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const loginTypeFromURL = urlParams.get("loginType");

    if (token && loginTypeFromURL === "google") {
      // Store token and loginType in local storage
      localStorage.setItem("customerId", token);
      localStorage.setItem("loginType", "google");
      setCustomerId(token);
      setLoginType("google");

      // Remove token and loginType from URL after storing them
      window.history.replaceState({}, document.title, "/");
    } else {
      // Load customer ID and login type from local storage for other login sessions
      const storedCustomerId = localStorage.getItem("customerId");
      const storedLoginType = localStorage.getItem("loginType");
      if (storedCustomerId) setCustomerId(storedCustomerId);
      if (storedLoginType) setLoginType(storedLoginType);
    }
  }, []);

  // Handle  logout
  const handleLogout = () => {
    // Clear local storage and state for local login
    localStorage.removeItem("customerId");
    localStorage.removeItem("loginType");
    setCustomerId(null);
    setLoginType(null);
    navigate("/login");
  };

  // Modal-related state and handlers
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    const handleYesClick = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/Appointment", {
          state: { scrollTo: "container", buttonClick: "yes" },
        });
        setModalShow(false);
      }, 5000);
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
            Off-Peak Pricing
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>What is Off-Peak Pricing?</h4>
          <p>
            In here we provide a time range for customers as their free time,
            usually from <strong>6.00 p.m to 8.00 p.m.</strong>
            <br />
            You can make the appointment as the availability of the time slot.
            <br /> In this off-peak pricing, we provide{" "}
            <strong>special discounts, offers</strong> and other related
            discounts for our services.
            <center>
              <img
                src={Img2}
                alt="Image"
                style={{ width: "200px", height: "200px" }}
              />
            </center>
          </p>
          <div className="spinner-container">
            {loading && (
              <ThreeDots
                className="spinner"
                height="50"
                width="100"
                color="#00BFFF"
                ariaLabel="loading"
              />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleYesClick} variant="success">
            Check Off-Peak Pricing
          </Button>
          <Button onClick={props.onHide} variant="danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const handleClick = () => {
    setModalShow(true);
  };

  return (
    <div>
      <div className="nav-bar">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <a href="#" className="navbar-brand">
              MENU
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto">
                <a href="/" className="nav-item nav-link active">
                  Home
                </a>
                <a href="/Appointment" className="nav-item nav-link">
                  Get Appointment
                </a>
                <a href="#" onClick={handleClick} className="nav-item nav-link">
                  Off Peak Pricing
                </a>
                <a href="/Reward" className="nav-item nav-link">
                  Rewarding
                </a>
                <a href="/Addvehicle" className="nav-item nav-link">
                  My Vehicles
                </a>
                <a href="/Profile" className="nav-item nav-link">
                  Profile
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu">
                    <a href="/AppointmentList" className="dropdown-item">
                      View Appointment
                                <a href="/Vehicle_history" className="dropdown-item">Vehicle History</a>
                    </a>
                    <a href="/Contact" className="dropdown-item">
                      Contact Us
                    </a>
                    <a href="/Advertisements" className="dropdown-item">
                      Advertisements
                    </a>
                  </div>
                </div>
              </div>
              <div className="ml-auto">
                {customerId ? (
                  <button className="btn btn-custom" onClick={handleLogout}>
                    Logout
                  </button>
                ) : (
                  <a className="btn btn-custom" href="/Login">
                    Login
                  </a>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
