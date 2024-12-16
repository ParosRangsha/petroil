import React from 'react'
import { Link } from 'react-router-dom'
import viewOne from './../img/view1.png'
import viewTwo from './../img/view2.png'
import viewThree from './../img/view3.png'
import viewFour from './../img/view4.png'
const Home = () => {
  return (
    <div className="home">
      <div className="banner bg-ban bg-cover bg-center">
        <div className="shade w-full bg-[rgba(0,0,0,0.5)] py-[257px] ">
          <div className="max-w-container mx-auto">
            <h2 className='text-[64px] font-[700] text-[#fff]'>We exist since 1975 on the oil and gas industry.</h2>
            <Link to='/'className='py-[15px] px-[40px] bg-[#f00] text-[#fff] inline-block my-[40px] hover:bg-[#0d0] transition duration-[1s] hover:text-[#fff] font-[700]'>LEARN MORE</Link>
          </div>
        </div>
      </div>
      <div className="note max-w-container mx-auto py-[78px]">
        <div className="heading flex items-center">
          <h2 className='text-[48px] font-[700] w-[30%]'>The biggest supplier on the country</h2>
          <p className='w-[70%] text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
        </div>
      </div>
      <div className="view max-w-container mx-auto flex justify-between py-[30px]">
        <img className='w-[24%]' src={viewOne} alt="view" />
        <img className='w-[24%]' src={viewTwo} alt="view" />
        <img className='w-[24%]' src={viewThree} alt="view" />
        <img className='w-[24%]' src={viewFour} alt="view" />
      </div>
      <div className="service max-w-container mx-auto my-[20px]">
        <div className="flex">
          <div className="item w-[50%] py-[100px] px-[50px]">
              <h2 className='text-[64px] font-[700]'>Our Services</h2>
              <p className='text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <div className="item w-[50%] bg-banOne bg-cover">
              <div className="p-[50px] bg-[#00000060] h-full">
                <h2 className='text-[36px] font-[700] text-[#fff]'>Modern natural oil and gas refineries.</h2>
                <Link to='/' className='py-[15px] px-[30px] inline-block bg-[#f00] my-[15px] text-[#fff]'>Learn More</Link>
              </div>
          </div>
        </div>
        <div className="flex">
          <div className="item w-[50%] bg-banTwo bg-cover">
              <div className="p-[50px] bg-[#00000060] h-full">
                <h2 className='text-[36px] font-[700] text-[#fff]'>Supply of national industries.</h2>
                <Link to='/' className='py-[15px] px-[30px] inline-block bg-[#f00] my-[15px] text-[#fff]'>Learn More</Link>
              </div>
          </div>
          <div className="item w-[50%] bg-banThree bg-cover">
              <div className="p-[50px] bg-[#00000060] h-full">
                <h2 className='text-[36px] font-[700] text-[#fff]'>National fuel distribution and supply.</h2>
                <Link to='/' className='py-[15px] px-[30px] inline-block bg-[#f00] my-[15px] text-[#fff]'>Learn More</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home