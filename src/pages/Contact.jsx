import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      {/* Header */}
      <header className="bg-teal-600 py-6">
        <h1 className="text-3xl font-semibold text-center text-white">Contact Us</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Details */}
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">Get in Touch</h2>
           <div className='lg:flex'>
           <address className="not-italic text-teal-900">
              <p>123 Healing Way, Suite 100</p>
              <p>Healthcare City, HC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>
                Email: <a href="mailto:support@quickmed.com" className="text-teal-600 hover:underline">support@quickmed.com</a>
              </p>
              <p>
                Feedback: <a href="mailto:feedback@quickmed.com" className="text-teal-600 hover:underline">feedback@quickmed.com</a>
              </p>
            </address>
            <img src={assets.appointment_img} className='w-56'  alt="" />
           </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </main>

    </div>
  );
};

export default Contact;
