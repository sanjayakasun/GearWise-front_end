import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Img1 from '../../img/coin.gif'
import Img2 from '../../img/gold.jpg'
import Img3 from '../../img/silver.png'
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from "react-router-dom";


export default function Rewardearn() {
    const navigate = useNavigate();
    const [customerId, setCustomerId] = useState(null); // Store customer ID
    // Fetch customer ID from localStorage
    useEffect(() => {
        const storedCustomerId = localStorage.getItem('customerId');
        if (storedCustomerId) {
            setCustomerId(storedCustomerId);
        } else {
            // toast.error('Unauthorized Access! Please Login');
            // Redirect to login page if customerId is not available
            navigate('/login');
        }
    }, [navigate]);

    const [appointments, setappointment] = useState([])
    useEffect(() => {
        //for testing only 665e144096c5017136fb33a0 otherwise remove the id
        axios.get(`http://localhost:4005/api/appointments/appointmentcount/${customerId}`)
            .then(appointments => setappointment(appointments.data))
            .catch(err => console.log(err))
    }, [customerId])

    const point = appointments.count;

    return (
        <div>
            <div class="about">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="section-header text-left">
                                <p>Rewarding System</p>
                                <h2>Earn Points Section</h2>
                            </div>
                            <ProgressBar striped variant="warning" animated now={point} />
                            <br/>
                            <Table>
                                <tr>
                                    <td rowSpan={2}><img src={Img1} alt="Image" style={{ width: '200px'}} /></td>
                                    <td>Total Coins</td>
                                </tr>
                                <tr>
                                    <td><h2>{appointments.count}</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <strong>00-20 coins</strong> : <strong>5%</strong> Discount for service
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <strong>20-30 coins</strong> : <strong>8%</strong> Discount for service
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <strong>30-50 coins</strong> : <strong>10%</strong> Discount for service
                                        <img src={Img3} alt="Image" style={{ width: '100px' }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <strong>50-100 coins</strong> : <strong>15%</strong> Discount for service
                                        <img src={Img2} alt="Image" style={{ width: '100px' }} />
                                    </td>
                                </tr>
                            </Table>
                        </div>
                        <div class="col-lg-6">
                            <div class="section-header text-left">
                                <h2>Redeem Rewards Section</h2>
                            </div>
                            <div class="about-content">
                                <h4>Reward Redemption Conditions:</h4>
                                <ul>
                                    <li><i class="far fa-check-circle"></i><strong>Accumulating Points:</strong> Registered customers earn reward points based on the number of appointments they make and the fees they pay for services rendered at our service station.</li>
                                    <li><i class="far fa-check-circle"></i><strong>Redemption Eligibility:</strong> Customers become eligible to redeem rewards once they accumulate 30 number of points, as specified in our reward program terms and conditions.</li>
                                    <li><i class="far fa-check-circle"></i><strong>Reward Tiers:</strong> Our rewards program offers multiple tiers, each corresponding to different levels of points accumulation. Higher tiers unlock more valuable rewards and exclusive benefits.</li>
                                    <li><i class="far fa-check-circle"></i><strong>Non-Transferable:</strong> Reward points are non-transferable and cannot be exchanged for cash or other forms of currency.</li>
                                    <li><i class="far fa-check-circle"></i><strong>Expiration:</strong> Reward points may have an expiration date after reach <strong>100 coins</strong>, which completes his <strong>100<sup>th</sup> </strong> Service with us. Customers are encouraged to redeem their points before they expire to maximize their benefits.</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
