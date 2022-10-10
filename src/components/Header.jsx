import React from 'react'
import All from './All'
import HeaderMain from './HeaderMain'
import Navbar from './Navbar'
import SecondNav from './SecondNav'
import Footer from './Footer'
function Header() {
  


  return (
      <div>
      <Navbar />
      <HeaderMain />
      <SecondNav />
      <All />
      <Footer />
      </div>

  )
}

export default Header