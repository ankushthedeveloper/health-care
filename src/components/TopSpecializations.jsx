import React from 'react';
import {
  FaUserMd,
  FaTooth,
  FaHeartbeat,
  FaBrain,
  FaEye,
  FaHandHoldingMedical,
} from 'react-icons/fa';

const specializations = [
  { icon: <FaUserMd size={28} />, name: 'General Physician' },
  { icon: <FaTooth size={28} />, name: 'Dentist' },
  { icon: <FaHeartbeat size={28} />, name: 'Cardiologist' },
  { icon: <FaBrain size={28} />, name: 'Neurologist' },
  { icon: <FaEye size={28} />, name: 'Ophthalmologist' },
  { icon: <FaHandHoldingMedical size={28} />, name: 'Dermatologist' },
];

const TopSpecializations = () => {
  return (
    <div className='rounded-md px-6 md:px-16 py-20 bg-gradient-to-b from-[#e0f7f9] to-white'>
      <h2 className='text-4xl font-extrabold text-center text-[#00796b] mb-16 tracking-wide'>
        🧑‍⚕️ Explore Top Specializations
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
        {specializations.map((spec, index) => (
          <div
            key={index}
            className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-teal-100 hover:border-teal-400'
          >
            <div className='text-[#009688] mb-4'>{spec.icon}</div>
            <p className='text-lg font-semibold text-gray-800'>{spec.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSpecializations;
