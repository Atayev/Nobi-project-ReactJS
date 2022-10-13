import React, { useEffect, useState } from 'react'
import {BiFilter} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { filteredData } from '../app/redux/slice'
import Filters from './Filters'

function SecondNav() {
    const [nav, setNav] = useState()
    const [show,setShow]=useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('../data.json')
            const data =await response.json()
            setNav(data?.menu)
        }
        fetchData()
    },[])
    const handleFilter = (item) => {
        dispatch(
            filteredData({data:item})
        )
    }
  return (
    <div className='secondNav bg-white'>
              <div className='container mx-auto'>
              <ul className='flex flex-wrap md:flex md:justify-center '>
                  {
                      nav?.map((item,key) => (
                          <li key={key} onClick={()=>handleFilter(item)} className='px-5 py-1 my-2 text-base leading-5 hover:bg-gray-200 rounded-lg cursor-pointer' >{ item }</li>
                      ))
                  }
                  <li onClick={()=>setShow(!show)}>
                    <button className='flex px-3 py-1 mt-1 ml-5 border rounded-lg border-gray-400 hover:bg-gray-200'>
                        <BiFilter className='mt-1'/>
                            <span className='px-1'>Filter</span>
                        </button>
                    </li>
              </ul>
          </div>
          {
              show && <Filters />
          }
          </div>
  )
}

export default SecondNav