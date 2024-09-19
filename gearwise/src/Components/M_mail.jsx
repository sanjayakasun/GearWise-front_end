import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mail = () => {
    const [vehicles, setVehicles] = useState([]);

    // Fetch vehicle data when the component mounts
    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('http://localhost:4005/api/vehicles/');
                setVehicles(response.data);
            } catch (error) {
                toast.error('Failed to fetch vehicles');
                console.error('Error fetching vehicles:', error);
            }
        };

        fetchVehicles();
    }, []);
    const handleSendEmailAndDelete = async (vehicleId, email) => {
        try {
            if (!email) {
                toast.error('No email found for this owner.');
                return;
            }
    
            // Send email request
            await axios.post('http://localhost:4005/api/send-email', {
                to: email,
                subject: 'Vehicle Service Complete',
                text: `We are pleased to inform you that your vehicle service is now complete. You can collect your vehicle at your convenience. \n\nThank you for choosing us!`
            });
    
            // Delete vehicle request
            await axios.delete(`http://localhost:4005/api/vehicles/${vehicleId}`);
    
            // Remove the vehicle from the UI
            setVehicles(vehicles.filter(vehicle => vehicle._id !== vehicleId));
    
            toast.success('Email sent successfully');
        } catch (error) {
            toast.error('Failed to send email');
            console.error('Error:', error);
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
                                    <h3 className="text-center mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
                                        <span className="text-blue-800 dark:text-blue-500">Service </span>Complition <span className="text-blue-800 dark:text-blue-500">Alert</span>
                                    </h3>
                                </div>
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Vehicle Number
                                            </th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Owner
                                            </th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Service Date
                                            </th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Service Type
                                            </th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Vehicle Type
                                            </th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {vehicles.length > 0 ? (
                                            vehicles.map(vehicle => (
                                                <tr key={vehicle._id}>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <h2 className="text-sm font-normal">{vehicle.vehicle_no}</h2>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <h2 className="text-sm font-semibold">
                                                            {vehicle.owner ? vehicle.owner.name : 'Unknown'}
                                                        </h2>
                                                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                                                            {vehicle.owner ? vehicle.owner.email : 'No email'}
                                                        </p>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <h2 className="text-sm font-medium text-gray-800 dark:text-white">
                                                            {new Date(vehicle.s_date).toLocaleDateString()}
                                                        </h2>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <h2 className="text-sm font-normal">{vehicle.s_type}</h2>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <h2 className="text-sm font-normal">{vehicle.v_type}</h2>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <button
                                                    className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                                    onClick={() => { handleSendEmailAndDelete(vehicle._id, vehicle.owner ? vehicle.owner.email : null); }}
                                                >
                                                    Alert
                                                </button>

                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300">
                                                    No vehicles found.
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

export default Mail;
