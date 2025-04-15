import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-between mt-10 px-6 md:px-20 py-12 bg-primary rounded-2xl shadow-lg overflow-hidden text-white'>
      <div className='w-full md:w-1/2 space-y-6'>
        <h1 className='text-4xl md:text-5xl font-extrabold leading-tight'>
          Book Your Doctor <br className='hidden md:block' /> in Minutes
        </h1>
        <p className='text-lg md:text-xl font-light text-gray-100 mr-2'>
          Connect with experienced doctors, book appointments instantly, and get the care you deserve — anytime, anywhere.
        </p>
        <button className='bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 w-fit'>
          Book Now
        </button>
      </div>

      <div className='w-full md:w-1/2 mb-10 md:mb-0'>
        <img 
          src={assets.headerDoc} 
          alt='Doctor Illustration' 
          className='w-full max-w-md mx-auto rounded-xl shadow-2xl'
        />
      </div>
    </div>
  );
};

export default Header;
