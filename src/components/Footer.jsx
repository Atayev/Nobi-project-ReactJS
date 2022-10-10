import React, { useEffect, useState } from 'react'

function Footer() {
    const [menu, setMenu] = useState()
    
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('../data.json')
            const data = await response.json()
            setMenu(data?.footerMenu)
        } 
        fetchData()
    },[])

  return (
      <div className='footer bg-white py-10 '>
          <div className="container w-2/5 flex flex-col items-center justify-center m-auto py-10 border-b" >
              <p className='text-xl font-medium my-5'>Ready to become a Nobi?</p>
              <p className='my-5 px-10 text-center mx-10 text-base'>Build and grow your community face-to-face and make money while you do it.</p>
              <button className='bg-btn text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-2'>Register now</button>
          </div>
          <div className='footerNav flex justify-around pt-3'>
              <p> © 2022 Nobi. All rights reserved.</p>
              <ul className='text-black flex'>
                  {
                      menu?.map((item) => (
                          <li className='mx-3 cursor-pointer'>{ item }</li>
                      ) )
                  }
              </ul>
          </div>
    </div>
  )
}

export default Footer