import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../assets/img/logo.png'
function Navbar() {
  const [show,setShow] = useState(false)


  return (
   
    <div className="bg-white py-3 flex justify-center px-2 py-3  sm:px-4 py-2.5 rounded">
    <div className='container flex justify-between'>
    <div className="ml-8 text-lg text-black flex ">
    <div className='flex'>
          <img src={logo} alt="" className='logo my-1'/>
`         <p className='logoTitle font-bold px-2 mt-1'>Nobi</p>
          </div>
         
          
       
    </div>
    <div class="flex order-2 md:order-1">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5" >
      <AiOutlineSearch className='w-6 h-6'/>
      <span class="sr-only">Search</span>
          </button>
          <button onClick={()=>setShow(!show)} className="text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                  <span class="sr-only">Open menu</span>
                  <GiHamburgerMenu className='w-6 h-6'/>
          </button>
         
    <div class="hidden relative md:block">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <AiOutlineSearch className='mb-2'/>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900  rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
    </div>
    
        </div>
        <div className={show ? 'block w-auto' : 'hidden w-full'}>
          <ul className='flex-col bg-gray-50 text-sm md:flex-row  md:mt-2 md:text-sm md:font-medium md:border-0 md:bg-white'>
            <li className='font-medium md:px-2'>Features</li>
            <li className='font-medium'>Support</li>
        </ul>
          </div>
    <div className='order-1 md:order-2'>
        <button className='btn px-2 font-medium text-sm px-5 py-2.5 mr-2 mb-2'>Login</button>
        <button className='bg-btn text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Sign up</button>
    </div>
    </div>

</div>
  )
}

export default Navbar