import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

const A_Advertisment = () => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        fetchAdvertisements();
    }, []);

    const fetchAdvertisements = async () => {
        try {
            const response = await axios.get('http://localhost:4005/api/ads/admin');
            setAds(response.data);
        } catch (error) {
            toast.error('Error fetching advertisements');
            console.error('Error fetching advertisements:', error);
        }
    };

    const handleApprove = async (id) => {
        try {
            await axios.post(`http://localhost:4005/api/ads/admin/approve/${id}`);
            setAds(prevAds => prevAds.map(ad => ad._id === id ? { ...ad, approved: true } : ad));
            toast.success('Successfully approved the advertisement');
        } catch (error) {
            toast.error('Error approving advertisement');
            console.error('Error approving advertisement:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4005/api/ads/admin/${id}`);
            setAds(prevAds => prevAds.filter(ad => ad._id !== id));
            toast.success('Successfully deleted the advertisement');

        } catch (error) {
            console.error('Error deleting advertisement:', error);
            toast.error('Error deleting advertisement');
        }
    };
    const showApproveConfirmation = (id) => {
        confirmAlert({
            title: 'Confirm to Approve',
            message: 'Are you sure you want to approve this advertisement?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => handleApprove(id)
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    };

    const showDeleteConfirmation = (id) => {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure you want to delete this advertisement?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => handleDelete(id)
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    };
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                      <ToastContainer />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ads.map(ad => (
                    <div key={ad._id} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <div className={`h-52 flex flex-col justify-center items-center rounded-t-xl ${ad.approved ? 'bg-green-500' : 'bg-rose-500'}`}>
                            <img src={`http://localhost:4005/${ad.imagePath}`} alt="Advertisement" className="h-full w-full object-cover rounded-t-xl" onError={(e) => { e.target.onerror = null; e.target.src = 'default-image-path.jpg'; }} />
                        </div>
                        <div className="p-4 md:p-6">
                            <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
                                {ad.email}
                            </span>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                {ad.name}
                            </h3>
                            <p className="mt-3 text-gray-500 dark:text-neutral-500">
                                {ad.description}
                            </p>
                        </div>
                        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                            <button
                                onClick={() => showApproveConfirmation(ad._id)}
                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                            >
                                Approve
                            </button>
                            <button
                                onClick={() => showDeleteConfirmation(ad._id)}
                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default A_Advertisment;
