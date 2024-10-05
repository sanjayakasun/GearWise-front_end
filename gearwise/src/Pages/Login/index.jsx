import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { useState} from "react";
import React from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import Googleimg from '../../img/google.png'
import ToastMessage from '../../Components/Toast/Toast';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// import { Link } from 'react-router-dom';

function Login() {
  //google oauth function
  const googleAuth = () => {
    window.open(
      `${"http://localhost:4005"}/api/auth/google/callback`,
      "_self"
    );
    console.log("Logged in success",email)
  };

  //login function manual

  const navigate = useNavigate();

  // for toast message
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('success');
 
  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('') ;
  

  async function submit(e) {
    e.preventDefault();

    try{

      const response = await axios.post("http://localhost:4005/api/customers/logincustomer",{
          email,password
      })
      console.log(response.data)
          if(response.data.status==="exist"){
            const customerId = response.data.customerId;
            //toast ekk display krmu login success kiyala
            console.log("Logged in success",email)
            toast.success('Logged in success');
            // setToastMessage("Logged in success");
            // setToastVariant('success');
            // Delay navigation to show toast message
          setTimeout(() => {
            navigate('/', { state: { customerId } });
          }, 3000); // 3 seconds delay
          }
          else if(response.data.status==="notexist"){
              // alert("User have not sign up")
              toast.error("User have not sign up");
              // setToastMessage("User have not sign up");
              // setToastVariant('danger');
          }

  }
  catch(e){
      console.log(e);

  }
  }

  return (
    <div>
    <Navbar/> <ToastContainer />
    <br/>
    {/* <ToastMessage show={showToast} setShow={setShowToast} message={toastMessage} variant={toastVariant} /> */}
    <div className={styles.container}>
      {/* <h1 className={styles.heading}>Log in</h1> */}
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/login.jpg" alt="login" />
        </div>
        
        <div className={styles.right}>
          <br/>
          <h2 className={styles.from_heading}>Log in</h2>
          <form action="POST" className={styles.right} >
            <input
              type="text" 
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={styles.input}
              placeholder="Email"
            />
            
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className={styles.input}
              placeholder="Password"
            />
            <br/>
            <button onClick={submit}  className="btn btn-custom">
              Log In
            </button>
            </form>
            <p className={styles.text}>or</p>
            <button className={styles.google_btn} onClick={googleAuth}>
              <img src={Googleimg} alt="google icon" />
              <span>Sign in with Google</span>
            </button>
            <p className={styles.text}>
              New Here ? <Link to="../Signup">Sign Up</Link>
             
            </p>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
