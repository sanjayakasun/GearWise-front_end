import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify'; // For toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Importing toastify CSS
import Alert from 'react-bootstrap/Alert'; // Importing Bootstrap Alert for layout
import Img from "../img/alert.gif";

// Custom unauthorized component
const UnauthorizedAccessrehome = () => {
  const navigate = useNavigate();

  // Toast error for unauthorized access
  useEffect(() => {
    toast.error("Unauthorized Access. You don't have permission to view this page.");
  }, []);

//  Redirect after a delay if needed
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // Redirect to home after 5 seconds
    }, 5000);
    return () => clearTimeout(timer); // Cleanup the timeout when the component unmounts
  }, [navigate]);

  return (
    <div style={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
  {/* Alert Box */}
  <Alert variant="danger" className="text-center">
    <h2>Unauthorized Access</h2>   
    <div className="text-center mt-4" style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={Img} alt="Danger Alert" style={{ width: '400px' }} />
    </div>
    <p className="mt-4">You will be redirected to the login page shortly.</p>
  </Alert>
  
  {/* Toast message container */}
</div>
  );
};

export default UnauthorizedAccessrehome;