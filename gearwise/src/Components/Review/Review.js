import React, { useState } from 'react';

export default function Review() {
  const [currentPage, setCurrentPage] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const reviewsPerPage = 2; // Number of reviews to display per page

  const handleRatingSelect = (rating) => {
    setUserRating(rating);
  };
  const reviews = [
    {
      text:
        '“Remarkable service! Gearwise Automotive provided exceptional care for my vehicle, delivering not only excellent repairs but also valuable advice on maintenance. With their attention to detail and commitment to customer satisfaction, I have full confidence in their expertise.”',
      name: 'Robbert',
      position: 'CTO, Robert Consultancy',
      image:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      rating: 4, // Add rating property
    },
    {
      text:
        '“Prompt, efficient, and friendly service at Gearwise Auto Repairs. Highly recommended for all your automotive needs!”',
      name: 'Hasanki',
      position: 'Marketing Manager at Stech',
      image:
        'https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      rating: 5, // Add rating property
    },
    {
        text:
          '“Cruising through the city streets, my cars engine purred like a contented lion, thanks to the exceptional service I received at Gearwise Auto Service Center.The skilled technicians meticulously examined every aspect of my vehicle, diagnosing and fixing the issue promptly.”',
        name: 'Didulani',
        position: 'CTO, Robert Consultancy',
        image:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        rating: 4, // Add rating property
      },
      {
        text:
          '“Exceptional service! My experience at Gearwise Auto was nothing short of fantastic. Courteous staff, quick turnaround, and my car drives like new. Highly recommended!”',
        name: 'Mia Brown',
        position: 'Marketing Manager at Stech',
        image:
          'https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        rating: 5, // Add rating property
      },
    // Add more reviews with ratings as needed
  ];

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextReviewPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
  };

  const prevReviewPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const startIndex = currentPage * reviewsPerPage;
  const endIndex = Math.min(startIndex + reviewsPerPage, reviews.length);

  const visibleReviews = reviews.slice(startIndex, endIndex);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto relative">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-blue-500">clients</span> say
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
          "Whispers of Trust: Discover the Stories Behind Experiences.
           Explore What Our Clients Say and Let Their Words Paint the Canvas of Satisfaction."
          </p>

          <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            {visibleReviews.map((review, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                <p className="leading-loose text-gray-500 dark:text-gray-300">{review.text}</p>
                <div className="flex items-center mt-6">
                  <img className="object-cover rounded-full w-14 h-14" src={review.image} alt="" />
                  <div className="mx-4">
                    <h1 className="font-semibold text-blue-500">{review.name}</h1>
                    <span className="text-sm text-gray-500 dark:text-gray-300">{review.position}</span>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-gray-500 dark:text-gray-300 mr-1">Rating:</span>
                      {/* Render the rating stars based on the review's rating */}
                      {Array.from({ length: review.rating }, (_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 1l2.5 6.5H18l-5 4.25 1.5 6L10 13.5 5.5 17l1.5-6-5-4.25h5.5L10 1z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-10 p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100" onClick={prevReviewPage}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-10 p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100" onClick={nextReviewPage}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>


<div>
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
      Share Your Thoughts: Submit your <span className="text-blue-500">Review and Ratings</span>  
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
          "Unlock Your Voice: Share Your Thoughts and Illuminate the Experience. 
          Your Review and Ratings Shape the Journey."
          </p>
</div>
      <div>

      <section class="max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md dark:bg-gray-800">
    <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Your Review and Rating</h2>

    <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
            <div>
                <label class="text-gray-700 dark:text-gray-200" for="name">Your Name</label>
                <input id="name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="review">Your Review</label>
                <input id="review" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200">Your Rating</label>
                <div class="flex items-center mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            class={`w-6 h-6 cursor-pointer ${star <= userRating ? 'text-yellow-400' : 'text-gray-300'}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            onClick={() => handleRatingSelect(star)}
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 1l2.245 6.838H18l-5.612 4.08 2.245 6.839L10 14.75l-5.633 4.007 2.245-6.839L2 7.838h5.755L10 1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ))}
                </div>
            </div>
        </div>

        <div class="flex justify-end mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-blue-600">Submit</button>
        </div>
    </form>
</section>
      </div>

      
    </div>



  );
}
