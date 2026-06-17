import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import MyCarousel from './MyCarousel'

const Layout = () => {
  return (
      <>
        <Header/>
        <section style= {{minHeight: '80vh'}}>
            <Outlet/>
        </section>
        <Footer/>
      </>
  )
}

export default Layout