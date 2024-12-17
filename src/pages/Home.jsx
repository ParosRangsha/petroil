import React from 'react'
import { Link } from 'react-router-dom'
import ban from './../img/banner.png'
import viewOne from './../img/view1.png'
import viewTwo from './../img/view2.png'
import viewThree from './../img/view3.png'
import viewFour from './../img/view4.png'
import supportOne from './../img/support1.png'
import supportTwo from './../img/support2.png'
import supportThree from './../img/support3.png'
import supportFour from './../img/support4.png'
import { MdArrowForwardIos } from "react-icons/md";

const Home = () => {
  return (
    <div className="home">
      <div className="banner bg-cover bg-center" style={{backgroundImage: `url(${ban})`}}>
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
      <div className="learn bg-[#00000010] py-[100px]">
        <div className="max-w-container mx-auto flex">
          <div className="txt w-[35%] bg-[#f00] py-[100px] px-[75px]">
            <h2 className='text-[36px] font-[700] text-[#fff]'>Learn more about our company</h2>
          </div>
          <div className="w-[65%] bg-banFour bg-cover flex justify-center items-center">
            <Link to='/' className='py-[15px] px-[30px] bg-[#fff] font-[700] hover:bg-[#0d0] hover:text-[#fff] transition duration-[1s] rounded-[10px]'>Learn More</Link>
          </div>
        </div>
      </div>
      <div className="support max-w-container mx-auto my-[20px] py-[115px]">
        <div className="contain w-full flex justify-between ">
          <img src={supportOne} alt="support" className='w-[25%]'/>
          <img src={supportTwo} alt="support" className='w-[25%]'/>
          <img src={supportThree} alt="support" className='w-[25%]'/>
          <img src={supportFour} alt="support" className='w-[25%]'/>
        </div>
      </div>
      <div className="blog bg-[#00000010] py-[100px]">
        <div className="max-w-container mx-auto my-[20px] flex justify-between">
          <div className="item w-[32%] bg-blogOne bg-cover">
            <div className="shade py-[75px] px-[45px] bg-[#00000090]">
              <p className='text-[24px] font-[700] text-[#fff]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
              <Link to='/' className='py-[15px] px-[30px] bg-[#ffffff50] inline-block my-[30px] text-[#fff] font-[700]'>Read more</Link>
            </div>
          </div>
          <div className="item w-[32%] bg-blogTwo bg-cover">
            <div className="shade py-[75px] px-[45px] bg-[#00000090]">
              <p className='text-[24px] font-[700] text-[#fff]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
              <Link to='/' className='py-[15px] px-[30px] bg-[#ffffff50] inline-block my-[30px] text-[#fff] font-[700]'>Read more</Link>
            </div>
          </div>
          <div className="item w-[32%] bg-blogThree bg-cover">
            <div className="shade py-[75px] px-[45px] bg-[#00000090]">
              <p className='text-[24px] font-[700] text-[#fff]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
              <Link to='/' className='py-[15px] px-[30px] bg-[#ffffff50] inline-block my-[30px] text-[#fff] font-[700]'>Read more</Link>
            </div>
          </div>
        </div>
        <div className="max-w-container mx-auto flex justify-end">
          <Link to='/' className='text-right flex items-center font-[700]'> <p>MORE FROM THE BLLOG</p> <MdArrowForwardIos /></Link>
        </div>
      </div>
      <div className="map">
        <iframe className='w-full h-[350px] border-8 border-[#f00]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383.8873715447503!2d90.3824305639961!3d23.741218416602113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1734361958672!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="knowmore bg-[#f00] py-[20px]">
        <div className="contain max-w-container mx-auto flex items-center justify-between">
          <p className='text-[#fff] text-[36px] font-[700]'>Want to join as member branch in your area?</p>
          <Link to='/' className='py-[15px] px-[30px] border-[1px] border-[#fff] text-[#fff] font-[700] hover:bg-[#0d0] transition duration-[1s] rounded-[10px]'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Home