import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="header">
        <div className="subheader bg-[#282828] py-[15px]">
            <div className="contain max-w-container mx-auto flex justify-between">
                <div className="contact flex gap-4">
                    <div className="mail text-[white]"><i className="fa-regular fa-envelope"></i> mail@yourcompany.com</div>
                    <div className="mail text-[white]"><i className="fa-solid fa-phone"></i> +896 120 5889 (Toll free)</div>
                </div>
                <div className="sociallink flex gap-4 text-[white]">
                    <Link to='https://facebook.com/paroscrangsha'><i className="fa-brands fa-facebook-f"></i></Link>
                    <Link to='/'><i className="fa-brands fa-twitter"></i></Link>
                    <Link to='/'><i className="fa-brands fa-linkedin-in"></i></Link>
                    <Link to='/'><i className="fa-brands fa-instagram"></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header