import { useState } from 'react';
import hatImage from '../assets/hat.png';

const Toaster = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <>
      {/* Mobile/Tablet Overlay (md breakpoint and below) */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onClose}></div>
      
      {/* Toaster Container - Mobile modal center, Desktop lower left */}
      <div className={`
        fixed z-50 
        
        /* Mobile/Tablet: centered modal */
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        md:transform-none
        
        /* Desktop: lower left positioning */
        md:bottom-6 md:left-6 md:top-auto md:translate-x-0 md:translate-y-0
        
        /* Base styling */
        bg-white rounded-xl shadow-2xl border border-blue-200
        w-[90%] md:mx-0 md:max-w-xl
        animate-in fade-in duration-300
      `}>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-0 right-0 md:top-3 md:right-3 text-gray-500 hover:text-gray-600 transition-colors"
          aria-label="Close notification"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {        /* Content Container with Flex Layout */}
        <div className="p-0 flex flex-col md:flex-row gap-4 items-start h-auto md:h-[200px]">
          
          {/* Placeholder Image */}
          <div className="flex-shrink-0 w-full rounded-tl-lg rounded-bl-none rounded-tr-lg rounded-br-none  md:w-1/3 h-full md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none md:rounded-br-none flex items-center justify-center overflow-hidden">
            {/* <svg className="w-12 h-12 md:w-8 md:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg> */}
            <img 
              src={hatImage}
              alt="Britannica hat"
              className="h-full object-contain w-full md:min-h-[204px]"
            />
          </div>

          {/* Text Content */}
          <div className="flex w-full flex-col items-center justify-between flex-1 min-w-0 md:w-2/3 p-4 md:items-start md:h-full">
            
            {/* Header */}
              <span className="inline-block px-2 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full my-2">
                Britannica Merch
              </span>
              <h3 className="text-md md:text-lg font-semibold text-gray-900 mb-1">
              Knowledge looks good on you.
              </h3>

            {/* Action Button */}
            <a href="https://britannica.threadless.com/designs/thistle-embroidered-cap/accessories/hat/dad-hat?color=navy" target="_blank" rel="noopener noreferrer">
              <button className="w-50 md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 mb-3">
                Shop Now
              </button>
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Toaster;
