import React from 'react';
import Sidebar from './Sidebar/A_Sidebar';

const Customer = () => {
    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                                    <div>
                                    <h3 class=" tpoic6 h6 text-center mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white"> <span class="text-blue-800 dark:text-blue-500">Customer</span> Details</h3>
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
                                                        No of Appoinments
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
                                            <th scope="col" className="px-6 py-3 text-end"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                   

                                    <tr>
      
                                    <td className="size-px whitespace-nowrap" style={{ paddingLeft: '20px' }}>
  <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
    <div className="flex items-center gap-x-3">
      <div className="grow">
        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">David Harrison</span>
        <span className="block text-sm text-gray-500 dark:text-neutral-500">david@site.com</span>
      </div>
    </div>
  </div>
</td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">0912241730</span>
          
        </div>
      </td>
      
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">ABC 3434</span>
          
        </div>
      </td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">SUV</span>
          
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="text-sm text-gray-500 dark:text-neutral-500">15 </span>
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
            <div className="px-6 py-3">
                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                    <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    Active
                </span>
            </div>
        </td>
     
    
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-1.5">
          <a
            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
            href="#"
          >
           Deactivate
          </a>
        </div>
      </td>
    </tr>

   
  
    <tr>
      
    <td className="size-px whitespace-nowrap" style={{ paddingLeft: '20px' }}>
  <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
    <div className="flex items-center gap-x-3">
      <div className="grow">
        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">David Harrison</span>
        <span className="block text-sm text-gray-500 dark:text-neutral-500">david@site.com</span>
      </div>
    </div>
  </div>
</td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">0912241730</span>
        </div>
      </td>
      
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">CAR 2345</span>
          
        </div>
      </td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">CAR</span>
          
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="text-sm text-gray-500 dark:text-neutral-500">1</span>
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
            <div className="px-6 py-3">
                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                    <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    Active
                </span>
            </div>
        </td>
     
      
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-1.5">
          <a
            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
            href="#"
          >
           Deactivate
          </a>
        </div>
      </td>
    </tr>

   
    <tr>
      
    <td className="size-px whitespace-nowrap" style={{ paddingLeft: '20px' }}>
  <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
    <div className="flex items-center gap-x-3">
      <div className="grow">
        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">David Harrison</span>
        <span className="block text-sm text-gray-500 dark:text-neutral-500">david@site.com</span>
      </div>
    </div>
  </div>
</td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">0912241730</span>
        </div>
      </td>
      
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">CAb 3434</span>
          
        </div>
      </td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">VAN</span>
          
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="text-sm text-gray-500 dark:text-neutral-500">41</span>
        </div>
      </td>

      <td className="size-px whitespace-nowrap">
            <div className="px-6 py-3">
                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                    <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    Active
                </span>
            </div>
        </td>
     
      
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-1.5">
          <a
            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
            href="#"
          >
           Deactivate
          </a>
        </div>
      </td>
    </tr>

    <tr>
    <td className="size-px whitespace-nowrap" style={{ paddingLeft: '20px' }}>
  <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
    <div className="flex items-center gap-x-3">
      <div className="grow">
        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">David Harrison</span>
        <span className="block text-sm text-gray-500 dark:text-neutral-500">david@site.com</span>
      </div>
    </div>
  </div>
</td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">0912241730</span>
        </div>
      </td>
      
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">KA 2344</span>
          
        </div>
      </td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">SUV</span>
          
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="text-sm text-gray-500 dark:text-neutral-500">1</span>
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
            <svg
              className="size-2.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            Danger
          </span>
        </div>
      </td>
      
      
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-1.5">
          <a
            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
            href="#"
          >
           Activate
          </a>
        </div>
      </td>
    </tr>
     </tbody>
        </table>
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;
