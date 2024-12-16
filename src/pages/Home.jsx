import React from 'react'
import bant from '../img/banner.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-ban bg-cover bg-center">
      <div className="shade w-full bg-[rgba(0,0,0,0.5)] py-[257px] ">
        <div className="banner max-w-container mx-auto">
          <h2 className='text-[64px] font-[700] text-[#fff]'>We exist since 1975 on the oil and gas industry.</h2>
          <Link to='/'className='py-[15px] px-[40px] bg-[#f00] text-[#fff] inline-block my-[40px] hover:bg-[#ff0] transition duration-[1s] hover:text-[#00f] font-[700]'>LEARN MORE</Link>
        </div>
      </div>
    </div>
  )
}

export default Home