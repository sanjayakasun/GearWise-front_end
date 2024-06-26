import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UploadAd = () => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      description: ''
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  };

  const handleFileChange = (e) => {
      setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('description', formData.description);
      if (file) {
          data.append('adImage', file);
      }

      try {
          await axios.post('http://localhost:4005/api/ads', data, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });
          toast.success('Advertisement successfully uploaded!');
          setFormData({
              name: '',
              email: '',
              phone: '',
              description: ''
          });
          setFile(null);
      } catch (error) {
          toast.error('Error uploading advertisement');
          console.error('There was an error uploading the ad!', error);
      }
  };

  return (
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <ToastContainer />
          <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
              <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                      <div className="sm:col-span-12">
                      <h6 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">
                      <span className="text-blue-800 dark:text-blue-500">Submit </span> your   
                      <span className="text-blue-800 dark:text-blue-500"> Advertisements </span> to   
                      <span className="text-blue-800 dark:text-blue-500"> Promote </span> your   
                      <span className="text-blue-800 dark:text-blue-500"> Products</span> 
                        </h6>
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="name" className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                              Full name
                          </label>
                      </div>
                      <div className="sm:col-span-9">
                          <input
                              id="name"
                              name="name"
                              type="text"
                              value={formData.name}
                              onChange={handleChange}
                              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              required
                          />
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="email" className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                              Email
                          </label>
                      </div>
                      <div className="sm:col-span-9">
                          <input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              required
                          />
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="phone" className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                              Phone
                          </label>
                      </div>
                      <div className="sm:col-span-9">
                          <input
                              id="phone"
                              name="phone"
                              type="text"
                              value={formData.phone}
                              onChange={handleChange}
                              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              required
                          />
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="adImage" className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                              Attach your advertisement
                          </label>
                      </div>
                      <div className="sm:col-span-9">
                          <input
                              type="file"
                              name="adImage"
                              id="adImage"
                              onChange={handleFileChange}
                              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:bg-gray-100 file:me-4 file:py-2 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400"
                              required
                          />
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="description" className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                              Description
                          </label>
                      </div>
                      <div className="sm:col-span-9">
                          <textarea
                              id="description"
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                              className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              rows="6"
                              placeholder="Add anything else you want to share."
                              required
                          ></textarea>
                      </div>
                  </div>
                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                      Submit Advertisement
                  </button>
              </form>
          </div>
      </div>
  );
};

export default UploadAd;
