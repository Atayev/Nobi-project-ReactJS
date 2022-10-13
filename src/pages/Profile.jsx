import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { HiOutlinePhotograph, HiOutlineCalendar, HiOutlineCash } from 'react-icons/hi'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import toast from 'react-hot-toast'

function Profile() {
    const [isAuth,setIsAuth] = useState()
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
        <>
            <Navbar />
            <div className='container mx-auto'>
            <div className='profileMenu bg-white md:w-64 my-32 rounded-xl py-3'>
                <div className='authSection w-24  mx-auto '>
                    <img src={isAuth?.photo} alt="" className='w-24 h-24' />
                    <p>{isAuth?.name + isAuth?.surname}</p>
                </div>
                <ul className='my-4 text-center text-white'>
                    <li className='bg-btn rounded-lg py-2 mx-5 px-14 my-3 shadow-md cursor-pointer'><span className='flex text-center'><HiOutlinePhotograph className='w-5 h-5 mx-2 mt-1 '/><span>My posts</span></span></li>
                    <li className='rounded-lg py-2 mx-5 px-14 my-3 shadow-md text-black cursor-pointer'><span className='flex text-center'><HiOutlineCalendar className='w-5 h-5 mx-2 mt-1'/><span>Calendar</span></span></li>
                    <li className='rounded-lg py-2 mx-5 px-14 my-3 shadow-md text-black cursor-pointer'><span className='flex text-center'><HiOutlineCash className='w-5 h-5 mx-2 mt-1'/><span>Balance</span></span></li>
                    <li className='rounded-lg py-2 mx-5 px-14 my-3 shadow-md text-black cursor-pointer'><span className='flex text-center'><HiOutlinePhotograph className='w-5 h-5 mx-2 mt-1'/><span>Payouts</span></span></li>
                    <li className='rounded-lg py-2 mx-5 px-14 my-3 shadow-md text-black cursor-pointer'><span className='flex text-center'><FiSettings className='w-5 h-5 mx-2 mt-1'/><span>Settings</span></span></li>
                    <li className='rounded-lg py-2 mx-5 px-14 my-3 shadow-md text-black cursor-pointer' onClick={logout}><span className='flex text-center'><FiLogOut className='w-5 h-5 mx-2 mt-1'/><span>Logout</span></span></li>
                </ul>
            </div>

            </div>
        </>
  )
}

export default Profile