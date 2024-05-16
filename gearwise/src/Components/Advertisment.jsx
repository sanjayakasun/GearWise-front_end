import React from 'react';

const Advertisment = () => {
    return (
        <div>
            <h6 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">Promote your <span className="text-blue-800 dark:text-blue-500">Product</span> through Advertisements</h6>

            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
        <form >
        <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Submit your Advertisment
          </h2>
        </div>

        <div className="sm:col-span-3">
          <label for="af-submit-application-full-name" className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
            Full name
          </label>
        </div>
       

        <div className="sm:col-span-9">
          <div className="sm:flex">
            <input id="af-submit-application-full-name" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
            <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
          </div>
        </div>
        <div className="sm:col-span-3">
          <div className="inline-block">
            <label for="af-submit-application-phone" className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
              Phone
            </label>
          </div>
        </div>

        <div className="sm:col-span-9">
          <input id="af-submit-application-phone" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>

          </div>
          <div className="sm:col-span-3">
          <label for="af-submit-application-resume-cv" className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
            Advertisment
          </label>
        </div>

        <div className="sm:col-span-9">
          <label for="af-submit-application-resume-cv" className="sr-only">Choose file</label>
          <input type="file" name="af-submit-application-resume-cv" id="af-submit-application-resume-cv" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
            file:bg-gray-50 file:border-0
            file:bg-gray-100 file:me-4
            file:py-2 file:px-4
            dark:file:bg-neutral-700 dark:file:text-neutral-400"/>
        </div>
        <div class="sm:col-span-3">
          <div class="inline-block">
            <label for="af-submit-application-bio" class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
              Description
            </label>
          </div>
        </div>

        <div class="sm:col-span-9">
          <textarea id="af-submit-application-bio" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="6" placeholder="Add anything else you want to publish with your advertisment."></textarea>
        </div>
          </div>
         
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Submit Advertiment
          </button>
        </form>
    </div></div></div>
    );
};

export default Advertisment;
