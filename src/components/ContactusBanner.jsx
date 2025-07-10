import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ContactusBanner = () => {
  const { token } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="bg-blue-200 p-4 flex items-center justify-around rounded-xl relative">
      {/* left side */}
      <div>
        <div>
          <p className="text-2xl text-gray-700 font-medium">Book Appointment</p>
          <p className="text-2xl text-gray-700 font-medium">
            With 200+ Trusted Doctors
          </p>
        </div>
        <button
          onClick={() => {
            token ? navigate("/contact") : navigate("/login");
            scrollTo(0, 0);
          }}
          className="border-blue-400 bg-blue-800 text-white p-4 rounded-lg font-medium m-4 hover:bg-blue-500"
        >
          {token ? "Contact Us" : "Create account"}
        </button>
      </div>

      {/* right side */}
      <img
        className="h-[250px] sm:w-80 sm:h-[unset] right-[50px] relative bottom-[-17px] max-w-[100%]"
        src={assets.appointment_img}
        alt=""
      />
    </div>
  );
};

export default ContactusBanner;
