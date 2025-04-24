import React from 'react';
import { FaHeartbeat, FaUserMd, FaHospitalAlt, FaLaptopMedical } from 'react-icons/fa';
import HowItWorks from '../components/HowItWorks';
import ApproachSection from '../components/OurApproach';

const About = () => {
  return (
    <div className="bg-[#f6f9fc] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8">
          About <span className="text-blue-600">QuickMed</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-16 leading-relaxed max-w-4xl mx-auto">
          QuickMed is your trusted partner in healthcare. We connect patients with experienced doctors and health experts at the click of a button. 
          Whether you need instant medical advice, a routine check-up, or access to top specialists — we’re here to make healthcare **easy, fast, and reliable**.
        </p>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-center mb-16">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaHeartbeat className="text-4xl text-red-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Compassionate Care</h4>
            <p className="text-gray-600">Your health is our priority. We bring human connection to digital healthcare.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaUserMd className="text-4xl text-blue-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Qualified Professionals</h4>
            <p className="text-gray-600">Only certified, experienced, and trusted doctors on our platform.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaHospitalAlt className="text-4xl text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Nationwide Network</h4>
            <p className="text-gray-600">Serving patients in every corner with access to hospitals and clinics near you.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaLaptopMedical className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Tech-enabled Experience</h4>
            <p className="text-gray-600">From booking to diagnosis, experience seamless healthcare from your phone.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white py-10 px-8 md:px-16 rounded-3xl shadow-md text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Why People Trust QuickMed?</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            We’ve helped thousands book appointments, access expert care, and manage their health journey effectively. Our commitment 
            to transparent, reliable, and fast healthcare makes us the preferred choice for modern families.
          </p>
          <button className="bg-primary hover:bg-blue-700 transition text-white px-8 py-3 rounded-full font-medium">
            Explore Our Services
          </button>
        </div>
       <ApproachSection/>
     

      </div>
    </div>
  );
};

export default About;
