import React from 'react'
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai'
import { FaRegMoneyBillAlt } from 'react-icons/fa'


function CardItem({id,video,description,name,profile,date,hours,price}) {

  return (
    <div className="w-1/4 bg-white rounded-lg border border-gray-200 shadow-md mx-5 my-3">
        <iframe src={video} id={id} title='youtubevidoe'  className='w-full h-64 rounded-lg'/>
    <div className="p-3">
              <h5 className="mb-2 text-lg font-bold text-gray-900 ">{ description }</h5>
              <div className='flex my-3'>
                  <img src={profile} alt="" width='36px' heigth='36px'/>
                  <p className='px-2 my-2 font-bold'>{ name }</p>
              </div>
              <p className='flex my-1'>
                  <AiOutlineCalendar  className='my-1 mx-1'/>
                  {date}
              </p>
              <p className='flex my-1'>
                  <AiOutlineClockCircle className='my-1 mx-1'/>
                  {hours}
              </p>
              <p className='text-black flex my-1'>
                  <FaRegMoneyBillAlt className='mx-1 my-1'/>
                  {price} /USD per hour
              </p>
              <div className='my-3'>
              <button className="py-2 px-3 text-sm font-medium text-center text-white bg-btn rounded-lg">
            Book now
              </button>
              <button className='py-2 px-3 mx-4 text-sm font-medium text-center text-gray-700 bg-gray-300 rounded-lg'>
                  More
              </button>
        </div>
    </div>
</div>
  )
}

export default CardItem