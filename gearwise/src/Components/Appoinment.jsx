import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().split('T')[0]); // Default to today's date

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:4005/api/appointments', {
                    params: { date: selectedDate }
                });
                setAppointments(response.data.appointments);
            } catch (error) {
                console.error("There was an error fetching appointments!", error);
                toast.error("There was an error fetching appointments!");
            }
        };
        fetchAppointments();
    }, [selectedDate]);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

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

    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                                    <div>
                                    <h3 class=" tpoic6 h6 text-center mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white"> <span class="text-blue-800 dark:text-blue-500">Appoinment</span> Details</h3>

                                    </div>
                                    <div className="relative my-6">
                                        <input 
                                            id="id-date01" 
                                            type="date" 
                                            name="id-date01" 
                                            value={selectedDate} 
                                            onChange={handleDateChange}
                                            className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border-b outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                        />
                                        <label 
                                            htmlFor="id-date01" 
                                            className="absolute -top-2 left-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                        >
                                            Date
                                        </label>
                                    </div>
                                </div>
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead className="bg-gray-50 dark:bg-neutral-800">
                                        <tr>
                                            <th className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start" style={{ paddingLeft: '20px' }}>
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Name
                                                    </span>
                                                </div>
                                            </th>
                                            <th className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Phone number
                                                    </span>
                                                </div>
                                            </th>
                                            <th className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Vehicle Number
                                                    </span>
                                                </div>
                                            </th>
                                            <th className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Service Type
                                                    </span>
                                                </div>
                                            </th>
                                            <th className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Time Slot
                                                    </span>
                                                </div>
                                            </th>
                                            <th className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Status
                                                    </span>
                                                </div>
                                            </th>
                                            <th className="px-6 py-3 text-end"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                        {appointments.length > 0 ? (
                                            appointments.map(appointment => (
                                                <tr key={appointment._id}>
                                                    <td className="size-px whitespace-nowrap" style={{ paddingLeft: '20px' }}>
                                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                            <div className="flex items-center gap-x-3">
                                                                <div className="grow">
                                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{appointment.customerId.name}</span>
                                                                    <span className="block text-sm text-gray-500 dark:text-neutral-500">{appointment.customerId.email}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-72 whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{appointment.customerId.phone}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-72 whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{appointment.vrNo}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-72 whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{appointment.serviceType}</span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="text-sm text-gray-500 dark:text-neutral-500">{appointment.timeSlot}</span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium 
                                                                ${appointment.status === "Active" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400" : 
                                                                appointment.status === "Cancelled" ? "bg-red-50 text-red-600 dark:bg-red-500/20 dark:text-red-400" : 
                                                                "bg-gray-50 text-gray-600 dark:bg-gray-500/20 dark:text-gray-400"}`}>
                                                                {appointment.status}
                                                            </span>
                                                        </div>
                                                    </td>
                                                   
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500 dark:text-neutral-500">
                                                    No appointments found for the selected date.
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

export default Appointment;
