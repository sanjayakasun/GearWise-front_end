import React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';
import { useEffect} from 'react'
import './Loader.css';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Img1 from '../../img/offer.png';
import Img2 from '../../img/offer2.png'

export default function Navbar() {


    //ksk
    const [customerId, setCustomerId] = useState(null); // State to store customerId
    const navigate = useNavigate();
     // Retrieve customerId from localStorage on component mount
  useEffect(() => {
    const storedCustomerId = localStorage.getItem('customerId');
    if (storedCustomerId) {
      setCustomerId(storedCustomerId);
    }
  }, []); // Empty dependency array to run only once when the component mounts
    // Fetch session info from backend on component mount
    // useEffect(() => {
    //     const fetchCustomer = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:4005/api/customers/session', { withCredentials: true })
    //             .then(response => {
    //                 // Handle the response
    //                 if (response.data.customerId) {
    //                   setCustomerId(response.data.customerId);
    //               }
    //               console.log('Session ID:', document.cookie); // Logs all cookies, including the session ID
    //               console.log('Customer ID from Session:', response.data.customerId);
    //             });
    //         } catch (error) {
    //             console.log("Error fetching session info:", error);
    //         }
    //     };
    //     fetchCustomer();
    // }, []);

    // Handle logout
    const handleLogout = async () => {
        try {
            // await axios.post('http://localhost:4005/api/customers/logout');
            localStorage.removeItem('customerId');
            setCustomerId(null);
            navigate('/login');
        } catch (error) {
            console.log("Logout error:", error);
        }
    };
    
    //ksk

      const [loading, setLoading] = useState(false);
      const [modalShow, setModalShow] = React.useState(false);
      function MyVerticallyCenteredModal(props) {
    
        const handleyesClick = () => {
          setLoading(true);
    
          setTimeout(() => {
            setLoading(false);
            navigate('/Appointment', { state: { scrollTo: 'container' , buttonClick: 'yes' }});
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
              Off-Peak Pricing
                {/* <img src={Img1} alt="Image" style={{ width: '100px' }} /> */}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>What is Off-Peak Pricing ?</h4>
              <p>
                In here we Provide a time range for customers as there free time.
                as usually from <strong>6.00 p.m to 8.00 p.m.</strong>
                <br />You can make the appointment as the availability of the time slot.
                <br/> In This off-peak pricing Appointments, We provide <strong>special discounts, Offers</strong> and other Related discounts for the service we Provide.
                <center><img src={Img2} alt="Image" style={{ width: '200px' , height:'200px'}} /></center>
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
    <div>
      <div className="nav-bar">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <a href="#" className="navbar-brand">MENU</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="/Appointment" className="nav-item nav-link">Get Appointment</a>
                            <a href="#" onClick={handleClick} className="nav-item nav-link"> Off Peak Pricing </a>
                            <a href="/Reward" className="nav-item nav-link">Rewarding</a>
                            <a href="/Addvehicle" className="nav-item nav-link">My Vehicles</a> 
                            <a href="/Profile" className="nav-item nav-link">profile</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu">
                                <a href="/AppointmentList" className="dropdown-item">View Appointment</a>
                                <a href="/Vehicle_history" className="dropdown-item">Vehicle History</a>
                                <a href="/Contact" className="dropdown-item">Contact us</a>
                                <a href="/Advertistments" className="dropdown-item">Advertistments</a>
                                    {/* <a href={{ pathname: "/AppointmentList", state: { customerId } }} className="dropdown-item">View Appointment</a> */}
                                    {/* <a href={{ pathname: "/Profile", state: { customerId } }} className="dropdown-item">profile</a> */}
                                    {/* <a href="/Booking" className="dropdown-item"></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="ml-auto">
                        {customerId ? (
                <button className="btn btn-custom" onClick={handleLogout}>Logout</button>
              ) :(
                            <a className="btn btn-custom" href="/Login">Login</a>)}
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
  )
}
