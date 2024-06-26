import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const MProduct = () => {
    const [formData, setFormData] = useState({
        s_name: '',  // Changed from 'owner' to 's_name'
        quantity: '',
        price: '',
        serviceDate: new Date()
    });

    const [suppliers, setSuppliers] = useState([]);
    const [productId, setProductId] = useState('');

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const response = await axios.get('http://localhost:4005/api/customers/suppliers');
                setSuppliers(response.data);
            } catch (error) {
                console.error('Error fetching suppliers', error);
                toast.error('Error fetching suppliers');
            }
        };

        fetchSuppliers();
    }, []);

    useEffect(() => {
        const fetchProductIdBySupplier = async () => {
            if (formData.s_name) {
                try {
                    console.log(`Fetching product ID for supplier ID: ${formData.s_name}`); // Log supplierId
                    const response = await axios.get(`http://localhost:4005/api/products/bySupplier/${formData.s_name}`);
                    console.log('API response:', response.data); // Log productId
                    if (response.data.productId) {
                        setProductId(response.data.productId);
                    } else {
                        setProductId(''); // Reset if no product ID found
                        toast.error('No product found for the selected supplier');
                    }
                } catch (error) {
                    console.error('Error fetching product ID by supplier:', error);
                    toast.error('Error fetching product ID');
                }
            }
        };

        fetchProductIdBySupplier();
    }, [formData.s_name]);  // Changed from formData.owner to formData.s_name

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, serviceDate: date });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!productId) {
            toast.error('No product ID found for the selected supplier');
            return;
        }

        const dataToSend = {
            s_name: formData.s_name,
            quantity: parseInt(formData.quantity), // Parse the new quantity to integer
            price: formData.price,
            date: formData.serviceDate,
        };

        try {
            const response = await axios.get(`http://localhost:4005/api/products/${productId}`);
            const currentProduct = response.data;

            const updatedQuantity = currentProduct.quantity + dataToSend.quantity;

            const updatedData = {
                s_name: formData.s_name,
                quantity: updatedQuantity,
                price: formData.price,
                date: formData.serviceDate,
            };

            const updateResponse = await axios.patch(`http://localhost:4005/api/products/${productId}`, updatedData);
            console.log('Product updated successfully:', updateResponse.data);
            toast.success('Product updated successfully');
        } catch (error) {
            console.error('Error updating product:', error);
            toast.error('Error updating product');
        }
    };

    return (
        <div className='background'>
            <ToastContainer />
            <h6 className="text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                <span className="text-blue-800 dark:text-blue-500">Product</span> Details
            </h6>
            <form className="form1 max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="relative py-2 z-0 w-full mb-4 group">
                    <label
                        htmlFor="s_name"
                        className="block px-0 w-full py-2 text-sm mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                        Supplier Name
                    </label>
                    <select
                        id="s_name"
                        name="s_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleChange}
                        value={formData.s_name}
                    >
                        <option value="">Select Supplier</option>
                        {suppliers.map((supplier) => (
                            <option key={supplier._id} value={supplier._id}>
                                {supplier.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="relative py-2 z-0 w-full mb-4 group">
                    <input
                        type="text"
                        name="quantity"
                        id="quantity"
                        className="block px-0 py-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={handleChange}
                        value={formData.quantity}
                    />
                    <label
                        htmlFor="quantity"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Quantity
                    </label>
                </div>

                <div className="relative py-2 z-0 w-full mb-4 group">
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="block px-0 py-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={handleChange}
                        value={formData.price}
                    />
                    <label
                        htmlFor="price"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Unit Price (Rs.)
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="serviceDate" className="block px-0 w-full text-sm mb-2 text-sm font-medium text-gray-500 dark:text-white">Supplied Date</label>
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

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Update
                </button>
            </form>
        </div>
    );
};

export default MProduct;
