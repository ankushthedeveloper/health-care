import React from 'react'
import { doctors } from '../assets/assets'
import DoctorCard from '../components/DoctorCard'

const Doctors = () => {
  return (
    <div>
      <div className="sidebar">

      </div>
      <div className="doctors">
         <div className='w-full grid grid-cols-auto gap-4 mt-10 py-10 '>
           {
            doctors.map((item,index)=>(
              <div>
                <DoctorCard item={item} index={index} />
              </div>
            ))
           }
         </div>
      </div>
    </div>
  )
}

export default Doctors