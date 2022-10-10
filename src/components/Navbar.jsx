import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import {BiLogOut} from 'react-icons/bi'
import logo from '../assets/img/logo.png'
import { useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
function Navbar() {
  const [show,setShow] = useState(false)
  const [isAuth,setIsAuth] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user-info'))
    if(data) setIsAuth(data)
  }, [])
  
  const logout = () => {
    localStorage.clear()
    window.location.reload()
    toast.success('See you soon ... ')
  }
  return (
   
    <div className="bg-white py-3 flex justify-center border  py-3  sm:px-4 py-2.5 rounded">
    <div className='container flex  justify-center md:justify-around  md:flex-row '>
    <div className="ml-8 text-lg text-black">
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
          <div className={show ? 'w-auto  mx-3' : 'hidden w-full'}>
          <ul className='flex-col bg-gray-50 text-sm md:flex-row  md:mt-2 md:text-sm md:font-medium md:border-0 md:bg-white'>
            <li className='font-medium md:px-2'>Features</li>
            <li className='font-medium'>Support</li>
        </ul>
          </div>
    <div class="hidden relative md:block">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <AiOutlineSearch className='mb-2'/>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900  rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
    </div>
    
        </div>
        
    {!isAuth ? (<div className='order-1 md:order-2'>
        <Link to={'/signin'} className='btn px-2 font-medium text-sm px-5 py-2.5 mr-2 mb-2'>Login</Link>
          <button className='bg-btn text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2' onClick={() => navigate('/signup')}>Sign up</button>
        </div>) : (
            <div className='flex'>
              <p className='text-sm'>Welcome back <span className='font-medium text-base'>{isAuth.name}  {isAuth.surname}</span></p>
              <span className='mx-3 flex cursor-pointer' onClick={logout}><BiLogOut className='w-5 h-5 mx-1'/> Logout</span>
            </div>
    )}
    </div>

</div>
  )
}

export default Navbar