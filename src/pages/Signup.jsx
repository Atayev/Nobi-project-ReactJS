import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast'
function Signup() {
  const [name,setName] = useState()
  const [surname,setSurname] = useState()
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = { name, surname, email, password }
    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(userData)
    })
      .then(() => toast.success('Succesfully signed up!'))
      .then(()=>navigate('/signin'))
  }
  useEffect(() => {
  },[])
  return (
    <div className='bg-white h-screen'>
          <div className='logoSection flex justify-around py-5 border-b'>
              <p className='text-f font-medium'><Link to={'/home'} className='text-decoration-none'>Nobi</Link></p>
              <p className='pt-4'>Already a member ? <Link to={'/signin'} className='text-cyan-600'>Log in</Link></p>
          </div>
          <div className='formSection flex flex-col items-center bg-white'>
              <p className='font-medium text-lg py-8'>Sign up to Nobi</p>
              <button className='flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mb-2 w-80'>
                  <FcGoogle className='w-7 h-7 mr-3 bg-white rounded-lg'/>
                  <span className='py-1'>
                      Sign up with Google account
                  </span>
              </button>
              <form method='GET' className='flex flex-col' onSubmit={handleSubmit}>
                  <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}  className='w-80 rounded-md my-5 px-5 py-2.5 bg-gray-200 text-sm' placeholder='Name' required/>
                  <input type="text"  value={surname} onChange={e=>setSurname(e.target.value)} placeholder='Surname'className='w-80 rounded-md my-3  px-5 py-2.5 bg-gray-200 text-sm' required/>
                  <input type="email"  value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email'className='w-80 rounded-md my-3 px-5 py-2.5 bg-gray-200 text-sm' required/>
                  <input type="password"  value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password'className='w-80 rounded-md my-3 px-5 py-2.5 bg-gray-200 text-sm' required/>
                  <span className='text-end text-cyan-600 text-sm my-3 cursor-pointer'> Forgot password? </span>
                  <input type='submit' value='Sign up'  className='w-80 rounded-md mb-4  px-5 py-2.5 bg-btn text-white text-sm cursor-pointer'/>
              </form>
          </div>
      </div>
  )
}

export default Signup