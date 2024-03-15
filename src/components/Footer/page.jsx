import React from 'react'
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='bg-[#f6f6f6] py-[60px] items-center text-center flex flex-col gap-4'>
      <div className='max-w-[646px] text-base'>
        <p>Sahid Sudirman Center</p>
        <p>56th Floor, Unit C. Jend Sudirman Street, Kav 86, Karet Tengsin, Tanah Abang, Central Jakarta, Jakarta 10220</p>
      </div>
      <div className='flex gap-3 text-sm font-normal'>
        <p>© 2024 Equinox Technology LLC</p>
        <p>Report Abuse</p>
      </div>
      <FaLinkedin size={24}/>
    </div>
  )
}

export default Footer