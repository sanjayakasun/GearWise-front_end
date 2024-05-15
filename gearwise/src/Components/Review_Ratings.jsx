import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './Sidebar/styles.css';

const Review_Ratings = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleDeleteClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* First Row */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    
                    <div className="cardd group flex flex-col h-full  shadow-sm rounded-xl">
                        {/* Card Content */}
                        <div className="p-4 md:p-6">
                            {/* Rating */}
                            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                <div className="flex items-center gap-6">
                                    <span className="flex items-center gap-4 rounded text-sm text-slate-500">
                                        <span className="flex text-amber-400" role="img" aria-label="Rating: 4 out of 5 stars">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span key={star}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="h-4 w-4"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            ))}
                                        </span>
                                    </span>
                                </div>
                            </span>
                            {/* Name */}
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                Malsha Karunarathna
                            </h3>
                            {/* Review */}
                            <p className="mt-3 text-gray-800 dark:text-neutral-800">
                                This system is the best place to place appointments.
                            </p>
                        </div>
                        {/* Delete Button */}
                        <div className="mt-auto flex  ">
                            <button
                                className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-br-xl  text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none  ${
                                    isClicked ? 'text-blue-500' : 'text-red-500'
                                }`}
                                onClick={handleDeleteClick}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                    
                    <div className="cardd group flex flex-col h-full  shadow-sm rounded-xl">
                        {/* Card Content */}
                        <div className="p-4 md:p-6">
                            {/* Rating */}
                            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                <div className="flex items-center gap-6">
                                    <span className="flex items-center gap-4 rounded text-sm text-slate-500">
                                        <span className="flex text-amber-400" role="img" aria-label="Rating: 4 out of 5 stars">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span key={star}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="h-4 w-4"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            ))}
                                        </span>
                                    </span>
                                </div>
                            </span>
                            {/* Name */}
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                Malsha Karunarathna
                            </h3>
                            {/* Review */}
                            <p className="mt-3 text-gray-800 dark:text-neutral-800">
                                This system is the best place to place appointments.
                            </p>
                        </div>
                        {/* Delete Button */}
                        <div className="mt-auto flex  ">
                            <button
                                className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-br-xl  text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none  ${
                                    isClicked ? 'text-blue-500' : 'text-red-500'
                                }`}
                                onClick={handleDeleteClick}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                    
                    <div className="cardd group flex flex-col h-full  shadow-sm rounded-xl">
                        {/* Card Content */}
                        <div className="p-4 md:p-6">
                            {/* Rating */}
                            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                <div className="flex items-center gap-6">
                                    <span className="flex items-center gap-4 rounded text-sm text-slate-500">
                                        <span className="flex text-amber-400" role="img" aria-label="Rating: 4 out of 5 stars">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span key={star}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="h-4 w-4"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            ))}
                                        </span>
                                    </span>
                                </div>
                            </span>
                            {/* Name */}
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                Malsha Karunarathna
                            </h3>
                            {/* Review */}
                            <p className="mt-3 text-gray-800 dark:text-neutral-800">
                                This system is the best place to place appointments.
                            </p>
                        </div>
                        {/* Delete Button */}
                        <div className="mt-auto flex  ">
                            <button
                                className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-br-xl  text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none  ${
                                    isClicked ? 'text-blue-500' : 'text-red-500'
                                }`}
                                onClick={handleDeleteClick}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                    {/* Repeat similar structure for Card 2 and Card 3 */}
                </div>

                {/* Second Row */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {/* Card 4 */}
                    <div className="cardd group flex flex-col h-full  shadow-sm rounded-xl">
                        {/* Card Content */}
                    <div className="cardd group flex flex-col h-full  shadow-sm rounded-xl">
                        {/* Card Content */}
                        <div className="p-4 md:p-6">
                            {/* Rating */}
                            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                <div className="flex items-center gap-6">
                                    <span className="flex items-center gap-4 rounded text-sm text-slate-500">
                                        <span className="flex text-amber-400" role="img" aria-label="Rating: 4 out of 5 stars">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span key={star}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="h-4 w-4"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            ))}
                                        </span>
                                    </span>
                                </div>
                            </span>
                            {/* Name */}
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                Malsha Karunarathna
                            </h3>
                            {/* Review */}
                            <p className="mt-3 text-gray-800 dark:text-neutral-800">
                                This system is the best place to place appointments.
                            </p>
                        </div>
                        {/* Delete Button */}
                        <div className="mt-auto flex  ">
                            <button
                                className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-br-xl  text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none  ${
                                    isClicked ? 'text-blue-500' : 'text-red-500'
                                }`}
                                onClick={handleDeleteClick}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                        {/* Repeat structure similar to Card 1 for Card 4 */}
                    </div>
                    
                    <div className="cardd group flex flex-col h-full  shadow-sm rounded-xl">
                        {/* Card Content */}
                        <div className="p-4 md:p-6">
                            {/* Rating */}
                            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                <div className="flex items-center gap-6">
                                    <span className="flex items-center gap-4 rounded text-sm text-slate-500">
                                        <span className="flex text-amber-400" role="img" aria-label="Rating: 4 out of 5 stars">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span key={star}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="h-4 w-4"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            ))}
                                        </span>
                                    </span>
                                </div>
                            </span>
                            {/* Name */}
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                Malsha Karunarathna
                            </h3>
                            {/* Review */}
                            <p className="mt-3 text-gray-800 dark:text-neutral-800">
                                This system is the best place to place appointments.
                            </p>
                        </div>
                        {/* Delete Button */}
                        <div className="mt-auto flex  ">
                            <button
                                className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-br-xl  text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none  ${
                                    isClicked ? 'text-blue-500' : 'text-red-500'
                                }`}
                                onClick={handleDeleteClick}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                    <div className="cardd group flex flex-col h-full  shadow-sm rounded-xl">
                        {/* Card Content */}
                        <div className="p-4 md:p-6">
                            {/* Rating */}
                            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                <div className="flex items-center gap-6">
                                    <span className="flex items-center gap-4 rounded text-sm text-slate-500">
                                        <span className="flex text-amber-400" role="img" aria-label="Rating: 4 out of 5 stars">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span key={star}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="h-4 w-4"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            ))}
                                        </span>
                                    </span>
                                </div>
                            </span>
                            {/* Name */}
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                Malsha Karunarathna
                            </h3>
                            {/* Review */}
                            <p className="mt-3 text-gray-800 dark:text-neutral-800">
                                This system is the best place to place appointments.
                            </p>
                        </div>
                        {/* Delete Button */}
                        <div className="mt-auto flex  ">
                            <button
                                className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-br-xl  text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none  ${
                                    isClicked ? 'text-blue-500' : 'text-red-500'
                                }`}
                                onClick={handleDeleteClick}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                    {/* Repeat similar structure for Card 5 and Card 6 */}
                </div>
            </div>
        </div>
    );
};

export default Review_Ratings;
