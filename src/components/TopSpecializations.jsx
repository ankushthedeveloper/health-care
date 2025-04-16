import React from 'react';
import {Link} from "react-router-dom"
import {specialityData} from "../assets/assets"

const TopSpecializations = () => {
  return (
    <div className='rounded-md px-6 md:px-16 py-20 bg-gradient-to-b from-[#e0f7f9] to-white'>
      <h2 className='text-4xl font-extrabold text-center text-[#00796b] mb-16 tracking-wide'>
        🧑‍⚕️ Explore Top Specializations
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
        {specialityData.map((spec, index) => (
        <Link onClick={()=>scrollTo(0,0)} to={`/doctors/${spec.speciality}`}>
          <div
            key={index}
            className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-teal-100 hover:border-teal-400'
          >
            <div className='w-[60px]'>
              <img src={spec.image} alt="" />
            </div>
            <p className='text-lg font-semibold text-gray-800'>{spec.speciality}</p>
          </div>
        </Link>
        )
        )}

      </div>
    </div>
  );
};

export default TopSpecializations;
