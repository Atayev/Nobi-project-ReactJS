import React, { useState } from 'react'
import CardItem from './CardItem'
import {useNavigate} from 'react-router-dom'
function Posts() {
    const [posts, setPosts] = useState()
    const navigate = useNavigate()
  return (
      <div className='md:my-32 '>
          <p className='font-medium text-lg mx-4'>My Posts</p>
          {
              posts ? posts?.map((item) =>
                  <CardItem
                        id={item.id}
                        name={item.name}
                        video={item.video}
                        date={item.date}
                        hours={item.hours}
                        price={item.price}
                        profile={item.profile}
                        category={item.category}
                  />
              )
                  : <div className='my-2 mx-8 '>
                      <p className='font-medium '>You dont have any booked post!</p>
                  </div>         }
    </div>
  )
}

export default Posts