import React from 'react';
import { MdSearch, MdEventAvailable, MdMedicalServices } from 'react-icons/md';

const steps = [
  {
    icon: <MdSearch size={40} className='text-primary' />,
    title: 'Search Doctors',
    description: 'Browse verified doctors across multiple specialties in your area.',
  },
  {
    icon: <MdEventAvailable size={40} className='text-primary' />,
    title: 'Select Slot',
    description: 'Choose a time that works best for your consultation.',
  },
  {
    icon: <MdMedicalServices size={40} className='text-primary' />,
    title: 'Confirm Appointment',
    description: 'Book your visit and get instant confirmation in a few clicks.',
  },
];

const HowItWorks = () => {
  return (
    <div className='px-6 md:px-20 py-14 bg-white text-center mb-[100px] mt-[100px]'>
      <h2 className='text-3xl md:text-4xl font-bold mb-10 text-primary'>How It Works</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {steps.map((step, index) => (
          <div key={index} className='bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300'>
            <div className='mb-4 flex justify-center'>{step.icon}</div>
            <h3 className='text-xl font-semibold mb-2'>{step.title}</h3>
            <p className='text-gray-600'>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
