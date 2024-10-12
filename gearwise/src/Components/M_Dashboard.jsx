import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const M_Dashboard = () => {
    const [formData, setFormData] = useState({
        vehicleNumber: '',
        vehicleType: 'Sedan', 
        serviceType: 'Full Service', 
        serviceDate: new Date(), 
        owner: '' 
    });
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fetch the list of customers 
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:4005/api/customers');
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customers:', error);
                toast.error('Failed to load customers.');
            }
        };
        fetchCustomers();
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(`Updated formData:`, formData); 
    };
    

    const handleDateChange = (date) => {
        setFormData({ ...formData, serviceDate: date });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const dataToSend = {
            vehicle_no: formData.vehicleNumber,
            v_type: formData.vehicleType,
            s_type: formData.serviceType,
            s_date: formData.serviceDate,
            owner: formData.owner
        };
    
        console.log('Data being sent to backend:', dataToSend); 
    
        try {
            const response = await axios.post('http://localhost:4005/api/vehicles', dataToSend);
            console.log(response.data);
            toast.success('Vehicle service details submitted successfully!');
            
            setFormData({
                vehicleNumber: '',
                vehicleType: 'car',
                serviceType: 'Full Service',
                serviceDate: new Date(),
                owner: ''
            });
        } catch (error) {
            console.error('Error submitting the form:', error);
            if (error.response && error.response.data) {
                toast.error('Submission failed');
            } else {
                toast.error('There was an error submitting the form!');
            }
        }
    };
    

    return (
        <div className='background'>
            <ToastContainer />
            <h6 className="text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                Vehicle <span className="text-blue-800 dark:text-blue-500">Service</span> Details
            </h6>
            <form className="form1 max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-4 group">
                    <input
                        type="text"
                        name="vehicleNumber"
                        id="vehicleNumber"
                        className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={formData.vehicleNumber}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="vehicleNumber"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Vehicle Number
                    </label>
                </div>
                <div className="relative z-0 w-full mb-4 group">
                    <label
                        htmlFor="owner"
                        className="block px-0 w-full text-sm mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                        Customer
                    </label>
                    <select
                        id="owner"
                        name="owner"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.owner}
                        onChange={handleChange}
                    >
                        <option value="">Select Customer</option>
                        {customers.map((customer) => (
                            <option key={customer._id} value={customer._id}>
                                {customer.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="relative z-0 w-full mb-4 group">
                    <label
                        htmlFor="vehicleType"
                        className="block px-0 w-full text-sm mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                        Vehicle Type
                    </label>
                    <select
                        id="vehicleType"
                        name="vehicleType"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.vehicleType}
                        onChange={handleChange}
                    >
                        <option value="Car">Car</option>
                        <option value="SUV">SUV</option>
                        <option value="Truck">Truck</option>
                        <option value="Bus">Bus</option>
                        <option value="Van">Van</option>
                    </select>
                </div>
                <div className="relative z-0 w-full mb-4 group">
                    <label
                        htmlFor="serviceType"
                        className="block px-0 w-full text-sm mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                        Service Type
                    </label>
                    <select
                        id="serviceType"
                        name="serviceType"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.serviceType}
                        onChange={handleChange}
                    >
                        <option value="Full Service">Full Service</option>
                        <option value="Oil Change">Oil Change</option>
                        <option value="Tire Rotation">Tire Rotation</option>
                        <option value="Brake Inspection">Brake Inspection</option>
                    </select>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label
                        htmlFor="serviceDate"
                        className="block py-0.5 px-0 w-full text-sm mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                        Service Date
                    </label>
                    <div className="relative my-6">
                        <DatePicker
                            id="serviceDate"
                            selected={formData.serviceDate}
                            onChange={handleDateChange}
                            dateFormat="yyyy/MM/dd"
                            className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-indigo-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default M_Dashboard;
