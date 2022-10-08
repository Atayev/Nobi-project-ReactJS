import React, { useEffect, useState } from 'react'
import {BiFilter} from 'react-icons/bi'

function SecondNav() {
    const [nav, setNav] = useState()
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('../data.json')
            const data =await response.json()
            setNav(data?.menu)
        }
        fetchData()
    },[])
  return (
    <div className='secondNav bg-white'>
              <div className='container mx-auto'>
              <ul className='flex justify-center '>
                  {
                      nav?.map((item,key) => (
                          <li key={key} className='px-5 py-1 my-2 text-base leading-5 hover:bg-gray-200 rounded-lg'>{ item }</li>
                      ))
                  }
                  <li>
                  <button className='flex px-3 py-1 mt-1 ml-5 border rounded-lg border-gray-400 hover:bg-gray-200'>
                        <BiFilter className='mt-1'/>
                            <span className='px-1'>Filter</span>
                        </button>
                    </li>
              </ul>
              </div>
          </div>
  )
}

export default SecondNav