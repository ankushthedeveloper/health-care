import React from "react";
import { FaHeartbeat, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {assets} from '../assets/assets'
const Footer = () => {
  return (
    <footer className="bg-[#E0F7FA] text-gray-800 px-6 py-10 mt-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={assets.quickmedlogo} width={"150px"} alt="" />
          </div>
          <p className="text-sm">
            Your trusted partner for fast, reliable, and compassionate healthcare. Book appointments with top doctors near you in just a few clicks.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
            <li><a href="/doctors" className="hover:text-blue-600">Find Doctors</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            <li><a href="/privacy" className="hover:text-blue-600">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" /> +91-9876543210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" /> support@quickmed.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-400" /> Chandigarh, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-sm text-center">
        © {new Date().getFullYear()} QuickMed. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
