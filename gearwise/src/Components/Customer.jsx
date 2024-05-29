import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar/A_Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './Sidebar/styles.css';

const Customer = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:4005/api/customers');
                setCustomers(response.data);
            } catch (error) {
                console.error("There was an error fetching the customers!", error);
                toast.error("There was an error fetching the customers!");
            }
        };
        fetchCustomers();
    }, []);

    const handleToggleStatus = async (customerId, currentStatus) => {
        const newStatus = currentStatus === 'active' ? 'deactivated' : 'active';
        try {
            const response = await axios.put(`http://localhost:4005/api/customers/${customerId}/toggle-status`);
            toast.success(response.data.message);
            setCustomers(prevCustomers =>
                prevCustomers.map(customer =>
                    customer._id === customerId ? { ...customer, status: newStatus } : customer
                )
            );
        } catch (error) {
            console.error("There was an error toggling the customer status!", error);
            toast.error("There was an error toggling the customer status!");
        }
    };

    const showConfirmation = (customerId, currentStatus) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: `Are you sure you want to ${currentStatus === 'active' ? 'deactivate' : 'activate'} this customer?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => handleToggleStatus(customerId, currentStatus)
                },
                {
                    label: 'No',
                    onClick: () => { /* Do nothing */ }
                }
            ]
        });
    };

    return (
        <div>
            <Sidebar />
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                                    <div>
                                        <h3 className="topic6 h6 text-center mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-6xl dark:text-white">
                                            <span className="text-blue-800 dark:text-blue-500">Registered </span>Customer <span className="text-blue-800 dark:text-blue-500">Details</span>
                                        </h3>
                                    </div>
                                    <div></div>
                                </div>
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead className="bg-gray-50 dark:bg-neutral-800">
                                        <tr>
                                            <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start" style={{ paddingLeft: '20px' }}>
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Name
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Phone number
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Vehicle Number
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Vehicle Type
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Number of Appointments
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Status
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Action
                                                    </span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                        {customers.map((customer) => (
                                            <tr key={customer._id}>
                                                 <td className="size-px whitespace-nowrap" style={{ paddingLeft: '20px' }}>
                                                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <div className="grow">
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{customer.name}</span>
                                                                <span className="block text-sm text-gray-500 dark:text-neutral-500">{customer.email}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{customer.phone}</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{customer.vehicle ? customer.vehicle.vehicle_no : 'N/A'}</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{customer.vehicle ? customer.vehicle.v_type : 'N/A'}</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="text-sm text-gray-500 dark:text-neutral-500">{customer.appointmentCount}</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className={`py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-full ${customer.status === 'active' ? 'bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500' : 'bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-500'}`}>
                                                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                {customer.status === 'active' ? (
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                ) : (
                                                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.325 3.25a.552.552 0 0 1-1.15 0l-.325-3.25A.905.905 0 0 1 8 5zm.002 6a1.002 1.002 0 1 1-2.004 0 1.002 1.002 0 0 1 2.004 0z" />
                                                                )}
                                                            </svg>
                                                            {customer.status}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5">
                                                        <button
                                                            type="button"
                                                            onClick={() => showConfirmation(customer._id, customer.status)}
                                                            className={`py-2 px-3 inline-flex items-center gap-x-1.5 text-sm font-medium ${customer.status === 'active' ? 'text-red-700 bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800 dark:text-red-200' : 'text-green-700 bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 dark:text-green-200'} rounded-md shadow-sm align-middle`}
                                                        >
                                                            {customer.status === 'active' ? 'Deactivate' : 'Activate'}
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="size-px text-end whitespace-nowrap">
                                                    <div className="px-6"></div>
                                                </td>
                                            </tr>
                                        ))}
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

export default Customer;
