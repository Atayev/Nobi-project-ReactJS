import React from 'react'
import mainPhoto from '../assets/img/mainPhoto.jpg'

function HeaderMain() {
  return (
    <div className='w-100 section1 flex justify-center bg-white py-5 border-b'>
              <div className='block p-6 mt-10 max-w-xl flex-initial flex-col justify-center mr-10'>
                  <p className='mb-2 text-lg sm:text-xl font-bold tracking-tight text-gray-900'>
                    Nobi connect remote consultants and users
                  </p>
                  <p className='my-2 text-sm md:text-base'>
                    We give you the tools you need to have paid 1:1 video calls and livestreams with your audience and paid subscribers.
                  </p>
                  <button className='bg-btn text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2'>Register Now</button>
              </div>
              <div className='headerCard block p-3 text-center bg-white rounded-lg ml-10'>
                  <img src={mainPhoto} alt="" className='p-0 m-0'/>
                  <button className='bg-btn text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-2'>Book Now</button>
              </div>
          </div>
  )
}

export default HeaderMain