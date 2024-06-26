import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const M_alert = () => {
    const [formData, setFormData] = useState({
        vehicle_no: '', 
        serviceDate: new Date(),
    });
    const [products, setProducts] = useState([]);
    const [usedProducts, setUsedProducts] = useState([]);
    const [currentSection, setCurrentSection] = useState('vehicleDetails'); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4005/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchProducts();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, serviceDate: date });
    };

    const handleUsedProductChange = (productId, quantity) => {
        const updatedUsedProducts = [...usedProducts];
        const existingProductIndex = usedProducts.findIndex(product => product.productId === productId);
        if (existingProductIndex !== -1) {
            updatedUsedProducts[existingProductIndex].quantity = parseInt(quantity, 10);
        } else {
            updatedUsedProducts.push({ productId, quantity: parseInt(quantity, 10) }); 
        }
        setUsedProducts(updatedUsedProducts);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.vehicle_no) {
            toast.error('Please select a vehicle');
            return;
        }

        const vehicleData = {
            replacedParts: usedProducts
        };

        const appointmentData = {
            nextS_date: formData.serviceDate,
        };

        console.log('Vehicle Data:', vehicleData);  // Debugging log
        console.log('Appointment Data:', appointmentData);  // Debugging log

        try {
            // First request to update vehicle data
            const vehicleResponse = await axios.patch(`http://localhost:4005/api/vehicles/${formData.vehicle_no}`, vehicleData);
            console.log('Vehicle Response:', vehicleResponse.data);

            // Second request to update the next service date in the appointment table
            const appointmentResponse = await axios.patch(`http://localhost:4005/api/appointments/${formData.vehicle_no}`, appointmentData);
            console.log('Appointment Response:', appointmentResponse.data);

            toast.success('Vehicle service details submitted successfully!');
        } catch (error) {
            console.error('Error response:', error.response);
            if (error.response) {
                console.error('Error data:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
                toast.error(`Error: ${error.response.data.message || 'There was an error submitting the form!'}`);
            } else {
                toast.error('There was an error submitting the form!');
            }
        }
    };

    return (
        <div className='background'>
            <ToastContainer />
            <div className="max-w-md mx-auto">
                <div className="flex items-center justify-center mb-6">
                    <a
                        href="#"
                        onClick={() => setCurrentSection('vehicleDetails')}
                        className={`w-1/2 pb-4 font-medium text-center capitalize border-b-2 ${currentSection === 'vehicleDetails' ? 'border-blue-700 text-blue-800 dark:text-white' : 'border-gray-300 text-gray-500 dark:text-gray-300'}`}
                        style={{ borderBottomWidth: currentSection === 'vehicleDetails' ? '2px' : '1px', color: currentSection === 'vehicleDetails' ? '#ffffff' : '#000000', textDecoration: 'none' }}
                    >
                        Vehicle Details
                    </a>
                    <a
                        href="#"
                        onClick={() => setCurrentSection('productDetails')}
                        className={`w-1/2 pb-4 font-medium text-center capitalize border-b-2 ${currentSection === 'productDetails' ? 'border-blue-700 text-blue-800 dark:text-white' : 'border-gray-300 text-gray-500 dark:text-gray-300'}`}
                        style={{ borderBottomWidth: currentSection === 'productDetails' ? '2px' : '1px', color: currentSection === 'productDetails' ? '#ffffff' : '#000000', textDecoration: 'none' }}
                    >
                        Product Details
                    </a>
                </div>

                {currentSection === 'vehicleDetails' && (
                    <form className="form1" onSubmit={handleSubmit}>
                        <h6 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">
                            Vehicle <span className="text-blue-800 dark:text-blue-500">Service </span>Details
                        </h6>
                        <div className="relative z-0 w-full mb-4 group">
                            <input
                                type="text"
                                name="vehicle_no"
                                id="vehicleNumber"
                                className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="vehicleNumber"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Vehicle Number
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="serviceDate" className="block py-0.5 px-0 w-full text-sm mb-2 text-sm font-medium text-gray-500 dark:text-white">Next Service Date</label>
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
                            type="button"
                            onClick={() => setCurrentSection('productDetails')}
                            className="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Next
                        </button>
                    </form>
                )}

                {currentSection === 'productDetails' && (
                    <form className="form1" onSubmit={handleSubmit}>
                        <h6 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">
                            Update <span className="text-blue-800 dark:text-blue-500">Used </span>Products
                        </h6>
                        {products.map((product) => (
                            <div key={product._id} className="relative z-0 w-full mb-4 group">
                                <label htmlFor={`product-${product._id}`} className="block py-0.5 px-0 w-full text-sm mb-2 text-sm font-medium text-gray-500 dark:text-white">
                                    {product.name}
                                </label>
                                <input
                                    type="number"
                                    id={`product-${product._id}`}
                                    name="quantity"
                                    className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder="Enter quantity used"
                                    min={0}
                                    onChange={(e) => handleUsedProductChange(product._id, e.target.value)}
                                />
                            </div>
                        ))}
                        <button type="submit" className="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default M_alert;
