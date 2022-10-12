import React from 'react'
import Navbar from '../components/Navbar'
import SecondNav from '../components/SecondNav'
import All from '../components/All'
import Filters from '../components/Filters'
function Home() {
  return (
      <div className=''>
          <Navbar />
          <SecondNav />
          <Filters />
          <All />
    </div>
  )
}

export default Home