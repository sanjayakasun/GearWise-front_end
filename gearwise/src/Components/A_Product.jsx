import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4005/api/products');
                const suppliersResponse = await axios.get('http://localhost:4005/api/customers/suppliers');
                const suppliers = suppliersResponse.data;

                const productsWithSupplierDetails = response.data.map(product => {
                    const supplier = suppliers.find(supplier => supplier._id === product.s_name);
                    const supplierName = supplier ? supplier.name : 'Unknown Supplier';
                    const supplierEmail = supplier ? supplier.email : 'Unknown Email';
                    return { ...product, supplierName, supplierEmail, alertSent: false }; // Initialize alertSent as false
                });

                setProducts(productsWithSupplierDetails);
            } catch (error) {
                console.error("There was an error fetching the products!", error);
                toast.error("There was an error fetching the products!");
            }
        };

        fetchProducts();
    }, []);

    const handleAlert = async (email, productId) => {
        try {
            await axios.post('http://localhost:4005/api/send-email', {
                to: email,
                subject: 'Low Product Quantity - Request for Immediate Supply.',
                text: `Our current stock of your product is running low. Kindly arrange for immediate supply. Thank you.`
            });
            toast.success('Alert email sent successfully');

            // Update the state to mark the alert as sent for the specific product
            setProducts(prevProducts =>
                prevProducts.map(product =>
                    product._id === productId ? { ...product, alertSent: true } : product
                )
            );
        } catch (error) {
            console.error('Error sending alert email', error);
            toast.error('Failed to send alert email');
        }
    };

    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                                    <div>
                                        <h3 className="text-center mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
                                            <span className="text-blue-800 dark:text-blue-500">Supplier </span> Product <span className="text-blue-800 dark:text-blue-500">Details</span>
                                        </h3>
                                    </div>
                                </div>
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Product Name
                                            </th><th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Supplier Name
                                            </th>
                                            
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Supplied Date
                                            </th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Quantity
                                            </th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Unit Price
                                            </th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Action
                                            </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {products.length > 0 ? (
                                            products.map(product => (
                                                <tr key={product._id}>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <h2 className="text-sm font-normal">{product.name}</h2>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap" style={{ paddingLeft: '20px' }}>
                                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                            <div className="flex items-center gap-x-3">
                                                                <div className="grow">
                                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200"> {product.supplierName} </span>
                                                                    <span className="block text-sm text-gray-500 dark:text-neutral-500"> {product.supplierEmail} </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <h2 className="text-sm font-medium text-gray-800 dark:text-white">{new Date(product.date).toLocaleDateString()}</h2>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${product.quantity < 100 ? 'text-red-500 bg-red-100/60 dark:bg-gray-800' : 'text-emerald-500 bg-emerald-100/60 dark:bg-gray-800'}`}>
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                            </svg>
                                                            <h2 className="text-sm font-normal">{product.quantity}</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">
                                                            <h2 className="text-sm font-normal">Rs. {product.price}</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">
                                                            <button
                                                                className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                                                onClick={() => handleAlert(product.supplierEmail, product._id)}
                                                            >
                                                                Alert
                                                            </button>
                                                        </div>
                                                    </td>
                                                   
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300">
                                                    No products found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Product;
