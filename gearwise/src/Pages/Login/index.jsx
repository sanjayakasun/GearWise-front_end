import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";
import React from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import Googleimg from '../../img/google.png'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  //login function manual new branch

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4005/api/customers/login", {
        email, password
      });

      if (response.data.status) {
        localStorage.setItem('authToken', response.data.token);
        toast.success('Logged in successfully');
        setTimeout(() => {
          navigate('/', { state: { customerId: response.data.customerId } });
        }, 3000);
      } else {
        toast.error(response.data.error || "Invalid email or password");
      }
    } catch (e) {
      console.error(e);
      toast.error("An error occurred while logging in");
    }
  }

  //google oauth function after new branch
  const googleAuth = () => {
    window.open(`${"http://localhost:4005"}/api/auth/google/callback`, "_self");
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <br />
      <div className={styles.container}>
        <div className={styles.form_container}>
          <div className={styles.left}>
            <img className={styles.img} src="./images/login.jpg" alt="login" />
          </div>
          <div className={styles.right}>
            <br />
            <h2 className={styles.from_heading}>Log in</h2>
            <form className={styles.right}>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder="Email"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Password"
              />
              <br />
              <button onClick={submit} className="btn btn-custom">
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
