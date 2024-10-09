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
            }); }
        } catch (error) {
            console.error('Error updating password:', error);
            toast.error('There was an error updating the password!');
        }
    };

    const location = useLocation();
    const hideButtonPath = '/Vehicle_history';
    const hideButton = location.pathname === hideButtonPath;

    useEffect(() => {
        getOneCusprofile();
    }, []);

    //Fetching data
    const getOneCusprofile = async () => {
        try {
            if (customerId) {
            const result = await axios.get(`http://localhost:4005/api/customers/customerspro/${customerId}`);
            setFormData(result.data);
            console.log(result.data);
            }
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

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
                                {/* <img src={Img1} alt="Image" /> */}
                                <>

                                    {/* <div className="container-xxl py-5   shadow p-4 sm:p-7 dark:bg-neutral-800"> */}

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


                                                 
                                                    {/* <div className="sm:col-span-3">
                                                        <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                                            Profile photo
                                                        </label>
                                                    </div>


                                                    <div className="sm:col-span-9">
                                                        <div className="flex items-center gap-5">
                                                            <img
                                                                className="cv"
                                                                src={formData.profilePhoto}
                                                                alt="Image Description"
                                                                style={{ width: '48px', height: '48px' }} />
                                                            <div className="flex gap-x-2">
                                                                <div>
                                                                    <label for="photo0"></label>
                                                                    <input id="photo0" type="file" name="photo" onChange={handleFileChange} />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}



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
                                                        {/* <td><%= customers.email%></td> */}
                                                    </div>


                                                    <div className="sm:col-span-3">
                                                        <label for="af-account-address" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                                            Address
                                                        </label>
                                                    </div>


                                                    <div className="sm:col-span-9">
                                                        <div className="space-y-2">
                                                            <input id="af-account- " name="address" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Street" value={formData.address} onChange={handleChange} />
                                                            {/* <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Road">{customers.address}</input>
                                                            <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Town">{customers.address}</input> */}
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
                                                            {/* <select className="py-2 px-3 pe-9 block w-full sm:w-auto border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                                                <option selected>Mobile</option>
                                                                <option>Home</option>
                                                                <option>Work</option>
                                                                <option>Fax</option>
                                                            </select> */}
                                                        </div>

                                                        {/* <p className="mt-3">
            <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="../docs/index.html">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                Add phone
            </a>
        </p> */}
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


                                                    {/* <div class="sm:col-span-3">
        <label for="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
            BIO
        </label>
    </div> */}


                                                    {/* <div class="sm:col-span-9">
        <textarea id="af-account-bio" claclassNamess="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="6" placeholder="Type your message..."></textarea>
    </div> */}

                                                </div>

                                                <div className="mt-5 flex justify-end gap-x-2">
                                                    {/* <button type="button" onSubmit={handleSubmit} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                                        Cancel
                                                    </button> */}
                                                    <button type="submit" onSubmit={handleSubmit} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                        Save changes
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    {/* </div> */}

                                </>
                            </div>

                        </div>
                        {/* Profile change end */}

                        {/* Profile Form end */}

                        {/* Password change start */}
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
                                {/* {!hideButton && <a class="btn btn-custom" href="/Reward">Learn More</a>} */}
                            </div>
                            {/* <img src={Img1} alt="Image" /> */}

                        </div>
                        {/* Password change end */}

                        {/* Password change Form start */}

                        <div class="col-lg-7">
                            <div class="aboutg">
                                <>

                                    {/* <div className="container-xxl py-5 padding-top: 250px margin:20px col-lg-6 row-g-5"></div> */}
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
                                                {/* <div className="sm:col-span-3">
                            <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                Profile photo
                            </label>
                        </div> */}


                                                {/* <div className="sm:col-span-9">
                            <div className="flex items-center gap-5">
                                <img className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900" src="../assets/img/160x160/img1.jpg" alt="Image Description" />
                                <div className="flex gap-x-2">
                                    <div>
                                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                                            Upload photo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                                                <div className="sm:col-span-3">
                                                    {/* <label for="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                Full name
                            </label> */}
                                                    <div className="hs-tooltip inline-block">
                                                        {/* <button type="button" class="hs-tooltip-toggle ms-1">
                                    <svg className="inline-block size-3 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                </button> */}
                                                        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
                                                            Displayed on public forums, such as Preline
                                                        </span>
                                                    </div>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    {/* <div className="sm:flex">
                                <input id="af-account-full-name" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Maria" />
                                <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Boone" />
                            </div> */}
                                                </div>


                                                {/* <div className="sm:col-span-3">
                            <label for="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                Email
                            </label>
                        </div>


                        <div className="sm:col-span-9">
                            <input id="af-account-email" type="email" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="maria@site.com" />
                        </div> */}


                                                <div className="sm:col-span-3">
                                                    <label for="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                                        Current Password
                                                    </label>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    <div className="space-y-2">
                                                        <input type="password" name="currentPassword" className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm focus:ring-blue-500" value={passwordData.currentPassword} onChange={handlePasswordChange} placeholder="Current Password" />
                                                        {/* <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter new password" /> */}
                                                    </div>
                                                </div>




                                                {/*  */}
                                                <div className="sm:col-span-3">
                                                    <label for="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                                        New Password
                                                    </label>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    <div className="space-y-2">
                                                        <input type="password" name="newPassword" className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm focus:ring-blue-500" value={passwordData.newPassword} onChange={handlePasswordChange} placeholder="New Password" />
                                                        {/* <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter new password" /> */}
                                                    </div>
                                                </div>
                                                {/*  */}



                                                <div className="sm:col-span-3">
                                                    <label for="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                                        Confirm Password
                                                    </label>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    <div className="space-y-2">
                                                        <input type="password" name="confirmPassword" className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm focus:ring-blue-500" value={passwordData.confirmPassword} onChange={handlePasswordChange} placeholder="Confirm New Password" />
                                                        {/* <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter new password" /> */}
                                                    </div>
                                                </div>

                                                {/* <div className="sm:col-span-3">
                            <div className="inline-block">
                                <label for="af-account-phone" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Phone
                                </label>
                                <span className="text-sm text-gray-400 dark:text-neutral-600">
                                    (Optional)
                                </span>
                            </div>
                        </div>


                        <div className="sm:col-span-9">
                            <div className="sm:flex">
                                <input id="af-account-phone" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="+x(xxx)xxx-xx-xx" />
                                <select className="py-2 px-3 pe-9 block w-full sm:w-auto border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                    <option selected>Mobile</option>
                                    <option>Home</option>
                                    <option>Work</option>
                                    <option>Fax</option>
                                </select>
                            </div>

                            <p className="mt-3">
                                <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="../docs/index.html">
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                                    Add phone
                                </a>
                            </p>
                        </div>


                        <div className="sm:col-span-3">
                            <label for="af-account-gender-checkbox" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                Gender
                            </label>
                        </div> */}


                                                {/* <div className="sm:col-span-9">
                            <div className="sm:flex">
                                <label for="af-account-gender-checkbox" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                    <input type="radio" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox" checked />
                                    <span clclassNameass="text-sm text-gray-500 ms-3 dark:text-neutral-400">Male</span>
                                </label>

                                <label for="af-account-gender-checkbox-female" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                    <input type="radio" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox-female" />
                                    <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Female</span>
                                </label>

                                <label for="af-account-gender-checkbox-other" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                    <input type="radio" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox-other" />
                                    <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Other</span>
                                </label>
                            </div>
                        </div>


                        <div class="sm:col-span-3">
                            <label for="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                BIO
                            </label>
                        </div>


                        <div class="sm:col-span-9">
                            <textarea id="af-account-bio" claclassNamess="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="6" placeholder="Type your message..."></textarea>
                        </div> */}

                                            </div>

                                            <div className="mt-5 flex justify-end gap-x-2">
                                                {/* <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                                    Cancel
                                                </button> */}
                                                <button type="submit" onSubmit={handleSubmit} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                    Save changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>


                                </>
                                {/* <img src={Img1} alt="Image" /> */}
                            </div>

                        </div>

                        {/* Password change Form end */}


                        {/* Add vehicle start */}

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