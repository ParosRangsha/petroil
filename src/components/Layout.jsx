import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Footnote from './Footnote'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
        <Footnote/>
    </>
  )
}

export default Layout