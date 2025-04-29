import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import DoctorCard from "./DoctorCard";

const TopDoctors = () => {
  const navigate=useNavigate();
  const {doctors} =useContext(AppContext);
  return (
     <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-2xl font-medium ">Top Doctors near You to book </h1>
      <p>Simply browse through our extensive list of doctors</p>
       <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {
          doctors.slice(0,10).map((item,index)=>(
            <DoctorCard item={item} index={index} />
          ))
        }
       </div>
       <button onClick={()=>{navigate('/doctors') ;scrollTo(0,0)}} className="bg-teal-100 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-teal-200">more Doctors</button>
     </div>
  )
};

export default TopDoctors;
