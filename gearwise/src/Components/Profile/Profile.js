import React from 'react'
import Img1 from '../../img/vehicleProfile.jpg'
import Img2 from '../../img/Vehiclehistory.jpg'
import Img3 from '../../img/P_Addvehicle.jpg'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const U_Profile = () => {
    const navigate = useNavigate();
    const [customerId, setCustomerId] = useState(null); // Store customer ID
    const storedLoginType = localStorage.getItem("loginType");
    console.log("Logintype :", storedLoginType)
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

    const [customerVehicleInfo, setCustomerVehicleInfo] = useState([]); // State for storing vehicle info

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        address: '',
        profilePhoto: null // Initialize profilePhoto as null
    });

    // State to hold password data
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    // Handle password input changes
    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({
            ...passwordData,
            [name]: value
        });
    };

    // Handle password update submission
    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            if (customerId) {
                const response = await axios.put(
                    `http://localhost:4005/api/customers/updatePassword/${customerId}`,
                    passwordData
                );
                toast.success('Password updated successfully!');
                setPasswordData({
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                });
            }
        } catch (error) {
            console.error('Error updating password:', error);
            toast.error('There was an error updating the password!');
        }
    };

    const location = useLocation();
    const hideButtonPath = '/Vehicle_history';
    const hideButton = location.pathname === hideButtonPath;

    // useEffect(() => {
    //     getOneCusprofile();
    // }, []);

    // //Fetching data
    // const getOneCusprofile = async () => {
    //     try {
    //         if (customerId) {
    //         const result = await axios.get(`http://localhost:4005/api/customers/customerspro/${customerId}`);
    //         setFormData(result.data);
    //         console.log(result.data);
    //         }
    //     } catch (error) {
    //         console.error('Error loading data:', error);
    //     }
    // };

    //Formdata 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //fileChanging - img
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0] // Store the file object directly
        });
    };

    //update
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (customerId) {
                const response = await axios.put(`http://localhost:4005/api/customers/customerspro/${customerId}`, formData);
                console.log("Profile updated successfully:", response.data);
                toast.success('Profile updated successfully!');
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error('There was an error updating the profile!');
        }
    };

    // Fetch customer profile data
    useEffect(() => {
        const getOneCusprofile = async () => {
            try {
                if (customerId) {
                    const result = await axios.get(`http://localhost:4005/api/customers/customerspro/${customerId}`);
                    setFormData(result.data);
                    console.log(result.data);
                }
            } catch (error) {
                console.error('Error loading customer data:', error);
            }
        };
        getOneCusprofile();
    }, [customerId]);

    // Fetch vehicle information for the customer
    useEffect(() => {
        if (customerId) {
            axios.get(`http://localhost:4005/api/vehicles/getvehicleinfo/${customerId}`)
                .then(response => setCustomerVehicleInfo(response.data))
                .catch(error => console.log('Error fetching vehicle info:', error));
        }
    }, [customerId]);


    return (
        <div>
            <ToastContainer />
            <div class="about">
                <div class="container">
                    <div class="row align-items-center">

                        {/* Profile change start */}
                        <div class="col-lg-5">
                            <div class="section-header text-left">
                                <p>User Space</p>
                                <h2>User Profile</h2>
                            </div>
                            <div class="about-content">
                                <p>
                                    Welcome to your <strong>GearWise profile!  </strong>
                                    Customize it to reflect your unique style and preferences.
                                </p>
                                <ul>
                                    <li><i class="far fa-check-circle"></i>Personalize Your Profile: Update your photo, name, and contact details.</li>
                                    <li><i class="far fa-check-circle"></i>Tailor your profile to showcase who you are.</li>
                                    <li><i class="far fa-check-circle"></i>Make It Yours</li>
                                </ul>
                                {/* {!hideButton && <a class="btn btn-custom" href="/Reward">Learn More</a>} */}
                            </div>
                            <img src={Img1} alt="Image" style={{ width: '400px', height: 'auto' }} />
                        </div>


                        {/* Profile form start */}

                        <div class="col-lg-7" style={{ paddingBottom: '60px' }}>
                            <div class="about-img">
                                <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800 padding-top: 250px">
                                    <div className="mb-8">
                                        <h1 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                                            Profile
                                        </h1>
                                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                                            Manage your name, password and account settings.
                                        </p>
                                    </div>
                                    <div className='max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto'>
                                        <form onSubmit={handleSubmit}>

                                            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                                                <div className="sm:col-span-3">
                                                    <label for="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                                        Full name
                                                    </label>
                                                    <div className="hs-tooltip inline-block">

                                                        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
                                                            Displayed on public forums, such as Preline
                                                        </span>
                                                    </div>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    <div className="sm:flex">
                                                        {/* <input id="af-account-full-name" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Hasanki">{customers.name}</input> */}
                                                        <input type="text" name="name" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Didulani" value={formData.name} onChange={handleChange} />
                                                    </div>
                                                </div>


                                                <div className="sm:col-span-3">
                                                    <label for="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                                        Email
                                                    </label>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    <input id="af-account-email" name="email" type="email" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder=" " value={formData.email} onChange={handleChange} />

                                                </div>


                                                <div className="sm:col-span-3">
                                                    <label for="af-account-address" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                                        Address
                                                    </label>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    <div className="space-y-2">
                                                        <input id="af-account- " name="address" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Street" value={formData.address} onChange={handleChange} />

                                                    </div>
                                                </div>


                                                <div className="sm:col-span-3">
                                                    <div className="inline-block">
                                                        <label for="af-account-phone" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                                            Phone
                                                        </label>
                                                        <span className="text-sm text-gray-400 dark:text-neutral-600">
                                                            {/* (Optional) */}
                                                        </span>
                                                    </div>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    <div className="sm:flex">
                                                        <input id="af-account-phone" name="phone" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="0717650880" value={formData.phone} onChange={handleChange} />
                                                    </div>
                                                </div>


                                                <div className="sm:col-span-3">
                                                    <label for="af-account-gender-checkbox" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                                        Gender
                                                    </label>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    <div className="sm:flex">
                                                        <label for="af-account-gender-checkbox" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                                            <input type="radio" name="gender" value="Male" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox" checked={formData.gender === "Male"} onChange={handleChange} />
                                                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Male</span>
                                                        </label>

                                                        <label for="af-account-gender-checkbox-female" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                                            <input type="radio" name="gender" value="Female" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox-female" checked={formData.gender === "Female"} onChange={handleChange} />
                                                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Female</span>
                                                        </label>

                                                        <label for="af-account-gender-checkbox-other" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                                            <input type="radio" name="gender" value="Other" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox-other" checked={formData.gender === "Other"} onChange={handleChange} />
                                                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Other</span>
                                                        </label>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="mt-5 flex justify-end gap-x-2">
                                                <button type="submit" onSubmit={handleSubmit} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                    Save changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Profile change end */}

                        {/* Profile Form end */}


                        {storedLoginType !== "google" && (
                            <>
                                <div class="col-lg-5 " style={{ paddingBottom: '100px' }}>
                                    <div class="section-header text-left">
                                        <p>Secure Key</p>
                                        <h2>Change Password</h2>
                                    </div>
                                    <div class="about-content">
                                        <p>
                                            Secure your <strong>GearWise!</strong> account with ease! Change your password to enhance your account's security.
                                        </p>
                                        <ul>
                                            <li><i class="far fa-check-circle"></i>Update Password: Keep your account secure by updating password.</li>
                                            <li><i class="far fa-check-circle"></i>Strengthen Security.</li>
                                            <li><i class="far fa-check-circle"></i>Enhance Protection.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-lg-7">
                                    <div class="aboutg">
                                        <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800 padding-top: 250px">
                                            <div className="mb-8">
                                                <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                                                    Password
                                                </h2>
                                                <p className="text-sm text-gray-600 dark:text-neutral-400">
                                                    Manage your password and account settings.
                                                </p>
                                            </div>
                                            <form onSubmit={handlePasswordSubmit}>
                                                <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                                                    <div className="sm:col-span-3">
                                                        <div className="hs-tooltip inline-block">
                                                            <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
                                                                Displayed on public forums, such as Preline
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-9"></div>
                                                    <div className="sm:col-span-3">
                                                        <label for="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                                            Current Password
                                                        </label>
                                                    </div>
                                                    <div className="sm:col-span-9">
                                                        <div className="space-y-2">
                                                            <input type="password" name="currentPassword" className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm focus:ring-blue-500" value={passwordData.currentPassword} onChange={handlePasswordChange} placeholder="Current Password" />
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-3">
                                                        <label for="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                                            New Password
                                                        </label>
                                                    </div>
                                                    <div className="sm:col-span-9">
                                                        <div className="space-y-2">
                                                            <input type="password" name="newPassword" className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm focus:ring-blue-500" value={passwordData.newPassword} onChange={handlePasswordChange} placeholder="New Password" />
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-3">
                                                        <label for="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                                            Confirm Password
                                                        </label>
                                                    </div>
                                                    <div className="sm:col-span-9">
                                                        <div className="space-y-2">
                                                            <input type="password" name="confirmPassword" className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm focus:ring-blue-500" value={passwordData.confirmPassword} onChange={handlePasswordChange} placeholder="Confirm New Password" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-5 flex justify-end gap-x-2">
                                                    <button type="submit" onSubmit={handleSubmit} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                        Save changes
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        <div>
                            <div class="about">
                                <div class="container">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="section-header text-left">
                                                <p>Vehicle Space</p>
                                                <h2>Add Your Vehicle</h2>
                                            </div>
                                            <div class="about-content">
                                                <p>
                                                    Manage your entire vehicle fleet with ease at <strong>GearWise! </strong>
                                                    Here, you can effortlessly add details for each of your vehicles.
                                                </p>
                                                <ul>
                                                    <li><i class="far fa-check-circle"></i>Easily manage multiple vehicles: Add information for all your vehicles in one place.</li>
                                                    <li><i class="far fa-check-circle"></i>Ensure that every vehicle’s details are captured, providing a complete overview of your entire fleet.</li>
                                                    {/* <li><i class="far fa-check-circle"></i>Generate detailed vehicle history reports for your records or future reference.</li> */}
                                                    {/* <li><i class="far fa-check-circle"></i>Stay informed and up-to-date with your vehicle's maintenance journey, ensuring a smooth and reliable ride.</li> */}
                                                </ul>
                                                {!hideButton && <a class="btn btn-custom" href="/Addvehicle">Add Vehicle Details</a>}
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="about-img">
                                                <img src={Img3} alt="Image" style={{ width: '550px', height: 'auto' }} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Add vehicle end */}


                        {/* Vehicle history session start */}

                        <div>
                            <div class="about">
                                <div class="container">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="about-img">
                                                <img src={Img2} alt="Image" />
                                            </div>

                                        </div>

                                        <div class="col-lg-6">
                                            <div class="section-header text-left">
                                                <p>Vehicle HIstory</p>
                                                <h2>About Vehicle History</h2>
                                            </div>
                                            <div class="about-content">
                                                <p>
                                                    Explore your vehicle's journey at <strong>GearWise! </strong>
                                                    Here, you can easily track and manage your vehicle's service history.
                                                </p>
                                                <ul>
                                                    <li><i class="far fa-check-circle"></i>Every service you schedule is documented here.</li>
                                                    <li><i class="far fa-check-circle"></i>View a comprehensive history of all the services your vehicle has undergone.</li>
                                                    <li><i class="far fa-check-circle"></i>Generate detailed vehicle history reports for your records or future reference.</li>
                                                    <li><i class="far fa-check-circle"></i>Stay informed and up-to-date with your vehicle's maintenance journey, ensuring a smooth and reliable ride.</li>
                                                </ul>
                                                {!hideButton && <a class="btn btn-custom" href="/Vehicle_history">Learn More</a>}
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vehicle history session end */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default U_Profile