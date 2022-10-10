import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast'
function Signin() {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/users', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
            .then(data => {
                const userCheck = data?.find((user) => (user.email === email && user.password === pass))
                if (userCheck) {
                    localStorage.setItem("user-info", JSON.stringify(userCheck))
                    toast.success('Successfully signed in!')
                    navigate('/home')
                    window.location.reload()
                }
                else toast.error('No such user. Please sure you enter correct email or password')
        })
    }

  return (
      <div className='bg-white h-screen'>
          <div className='logoSection flex justify-around py-5 border-b'>
              <p className='text-f font-medium'><Link to={'/home'} className='text-decoration-none'>Nobi</Link></p>
              <p className='pt-4'>Not a member ? <Link to={'/signup'} className='text-cyan-600'>Sign up now</Link></p>
          </div>
          <div className='formSection flex flex-col items-center bg-white'>
              <p className='font-medium text-lg py-8'>Log in to Nobi</p>
              <button className='flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mb-2 w-80'>
                  <FcGoogle className='w-7 h-7 mr-3 bg-white rounded-lg'/>
                  <span className='py-1'>
                      Log in with Google account
                  </span>
              </button>
              <form className='flex flex-col' onSubmit={handleSubmit}>
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className='w-80 rounded-md my-5 px-5 py-2.5 bg-gray-200 text-sm' placeholder='Email'/>
                  <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='Password'className='w-80 rounded-md  px-5 py-2.5 bg-gray-200 text-sm'/>
                  <span className='text-end text-cyan-600 text-sm my-3'> Forgot password? </span>
                  <input type="submit" value='Log in' className='w-80 rounded-md mb-4  px-5 py-2.5 bg-btn text-white text-sm'/>
              </form>
          </div>
      </div>
  )
}

export default Signin