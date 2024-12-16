import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from '../img/logo.png'

const Header = () => {
  return (
    <div className="header sticky z-[999] top-0 left-0 w-full">
        <div className="subheader bg-[#282828] py-[15px]">
            <div className="contain max-w-container mx-auto flex justify-between">
                <div className="contact flex gap-4">
                    <div className="mail text-[white] flex gap-1 items-center"><MdMailOutline /> <p>mail@yourcompany.com</p></div>
                    <div className="mail text-[white] flex gap-1 items-center"><FaPhoneAlt /> <p>+896 120 5889 (Toll free)</p></div>
                </div>
                <div className="sociallink flex gap-4 text-[white]">
                    <Link to='https://facebook.com/paroscrangsha'><FaFacebookF /></Link>
                    <Link to='/'><FaTwitter /></Link>
                    <Link to='/'><FaLinkedinIn /></Link>
                    <Link to='/'><FaInstagram /></Link>
                </div>
            </div>
        </div>
        <div className="nav bg-[#F40404] py-[15px]">
            <div className="contain max-w-container mx-auto flex justify-between">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menus">
                    <ul className='flex align-middle justify-center text-[white]'>
                        <li>
                            <Link to='/' className='py-[12px] px-[24px] inline-block font-[700]'>Home</Link>
                        </li>
                        <li>
                            <Link to='/' className='py-[12px] px-[24px] inline-block font-[700]'>About</Link>
                        </li>
                        <li>
                            <Link to='/' className='py-[12px] px-[24px] inline-block font-[700]'>Services</Link>
                        </li>
                        <li>
                            <Link to='/' className='py-[12px] px-[24px] inline-block font-[700]'>Gallery</Link>
                        </li>
                        <li>
                            <Link to='/' className='py-[12px] px-[24px] inline-block font-[700]'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/' className='py-[12px] px-[24px] inline-block font-[700] border-[2px] border-[white] rounded-[5px] transition duration-[1s] hover:bg-[yellow] '>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header