import React from 'react'
import logo from '../img/logo.png'
import { FaPhoneAlt } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import certificateOne from '../img/certificate1.png'
import certificateTwo from '../img/certificate2.png'

const Footer = () => {
  return (
    <div className="footer bg-[#1F1F1F] py-[148px]">
      <div className="contain max-w-container mx-auto flex justify-between">
        <div className="contact w-1.5/4">
          <img src={logo} alt="logo" />
          <ul className='text-[#fff] py-[15px]'>
            <li className='flex gap-1 py-[5px]'><MdMailOutline /> mail@yourcompany.com</li>
            <li className='flex gap-1 py-[5px]'><FaPhoneAlt /> +896 120 5889 (Toll free)</li>
            <li className='flex gap-1 py-[5px]'><FaLocationDot /> 101 Baker Street, New York, USA, 12345</li>
          </ul>
        </div>
        <div className="company w-.75/4">
          <ul className='text-[white]'>
            <h3 className='text-[22px] font-[700]'>Company</h3>
            <li>
              <Link to='/' className='py-[5px] inline-block'>Home</Link>
            </li>
            <li>
              <Link to='/' className='py-[5px] inline-block'>About</Link>
            </li>
            <li>
              <Link to='/' className='py-[5px] inline-block'>Services</Link>
            </li>
            <li>
              <Link to='/' className='py-[5px] inline-block'>Gallery</Link>
            </li>
          </ul>
        </div>
        <div className="others w-.75/4">
          <ul className='text-[white]'>
            <h3 className='text-[22px] font-[700]'>Company</h3>
            <li>
              <Link to='/' className='py-[5px] inline-block'>Blog</Link>
            </li>
            <li>
              <Link to='/' className='py-[5px] inline-block'>Contact</Link>
            </li>
            <li>
              <Link to='/' className='py-[5px] inline-block'>Terms & Conditions</Link>
            </li>
            <li>
              <Link to='/' className='py-[5px] inline-block'>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="certificate w-1/4">
          <h3 className='text-[22px] font-[700] text-[#fff]'>Certificate</h3>
          <div className="thumb flex gap-1 py-3">
            <img src={certificateOne} alt="certificate" />
            <img src={certificateTwo} alt="certificate" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer