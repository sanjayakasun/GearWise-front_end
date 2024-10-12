import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';  
import './Sidebar/styles.css';
import { toast, ToastContainer } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Review_Ratings = () => {
    const [reviews, setReviews] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:4005/api/reviews/reviews');  
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();  
    }, []);

        // Handle delete review
    const handleDeleteClick = async (id) => {
        console.log('Deleting review with ID:', id); 
        try {
            const response = await axios.delete(`http://localhost:4005/api/reviews/reviews/${id}`); 
            if (response.status === 200) {
                setReviews(reviews.filter(review => review._id !== id)); 
                setIsClicked(!isClicked); 
                toast.success("Successfully deleted the review")
            } else {
                console.error('Failed to delete review:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting review:', error);
        }
    };
    const showDeleteConfirmation = (id) => {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure you want to delete this review?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => handleDeleteClick(id)
                },
                {
                    label: 'No',
                    onClick: () => {}
                }
            ]
        });
    };
    return (
        <div>            <ToastContainer />

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="cardd group flex flex-col h-full shadow-sm rounded-xl">
                            <div className="p-4 md:p-6">
                                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                    <div className="flex items-center gap-6">
                                        <span className="flex items-center gap-4 rounded text-sm text-slate-500">
                                            <span className="flex text-amber-400" role="img" aria-label={`Rating: ${review.rating} out of 5 stars`}>
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <svg
                                                        key={star}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className={`h-4 w-4 ${star <= review.rating ? 'text-amber-400' : 'text-gray-200'}`}
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                ))}
                                            </span>
                                        </span>
                                    </div>
                                </span>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                    {review.name}
                                </h3>
                                <p className="mt-3 text-gray-800 dark:text-neutral-800">
                                    {review.review}
                                </p>
                            </div>
                            <div className="mt-auto flex">
                                <button
                                    className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-br-xl text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none ${isClicked ? 'text-blue-500' : 'text-red-500'}`}
                                    onClick={() => showDeleteConfirmation(review._id)}
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review_Ratings;
