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
   
    <div className="bg-white py-3 flex  border-b mx-auto md:justify-center   py-3   py-2.5 rounded">
    <div className='md:container flex md:justify-center md:mx-auto md:flex-row mx-2'>
        <div className="text-lg order-2 md:order-1 md:mt-3">
          <Link to={'/'} className='text-decoration-none'>
        <div className='flex'>
          <img src={logo} alt="" className='hidden md:block logo my-1 w-10 h-10'/>
           <p className='logoTitle font-bold  text-x md:mr-10'>Nobi</p>
            </div>
            </Link>
        </div>
        <div className='menu block order-1 md:order-2 md:mt-6'>
                  <GiHamburgerMenu  onClick={()=>setShow(!show)} className='md:hidden w-6 h-6  text-gray-500 '/>
         
         <div className={`md:block md:w-auto  md:mr-5 ${show ? 'block' : 'hidden'}`}>
                <ul className={`bg-gray-50  text-sm md:flex md:mr-10 md:text-sm md:font-medium md:border-0 md:bg-white ${show ? 'fixed' : 'block'}`}>
                <Link to={'/home'}><li className='md:hidden font-medium md:px-2'>Home</li></Link>
                <Link to={'/profile'}><li className='md:hidden font-medium md:px-2'>Profile</li></Link>
                <li className='font-medium md:px-2'>Features</li>
                <li className='font-medium'>Support</li>
                </ul>
            </div>
          </div>
    <div class="flex order-3 mt-3 mx-3 md:order-3 md:mr-10">
      <AiOutlineSearch className='w-6 h-6 md:hidden text-gray-500'/>
         
    <div class="hidden relative md:block md:mr-10 md:pb-1">
      <div class="flex absolute inset-y-0 left-0  items-center pl-3">
        <AiOutlineSearch className='mb-3  text-gray-500 w-5 h-5'/>
      </div>
      <input type="text" class="block p-2 bg-gray-200 border-0 pl-10 md:w-80 text-gray-900  rounded-lg border border-gray-300 sm:text-sm" placeholder="Search..." />
    </div>
        </div>
       
    {!isAuth ? (<div className='order-4 md:order-4 md:mt-3'>
        <Link to={'/signin'} className='btn px-2 font-medium text-sm px-5 py-2.5 mr-2 mb-2'>Login</Link>
          <button className='bg-btn text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2' onClick={() => navigate('/signup')}>Sign up</button>
        </div>) : (
            <div className='flex order-4 md:order-4 md:mt-3 mt-3 mx-7 '>
              
              <p className='text-sm'><span className='hidden md:block'>Welcome back </span><span className='font-medium text-base'>{isAuth.name}  {isAuth.surname}</span> </p>
              <img src={isAuth.photo} onClick={()=>navigate('/profile')} className='md:w-12 md:h-12 w-5 h-5 rounded-lg mb-2' alt="" />
              <span className='mx-3 flex cursor-pointer hover:text-gray-500' onClick={logout}><BiLogOut className='w-5 h-5 mx-1 md:mt-5'/><span className='md:block hidden md:mt-5'>Logout</span></span>
            </div>
    )}
    </div>

</div>
  )
}

export default Navbar