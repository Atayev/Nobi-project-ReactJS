import React,{ useEffect, useState } from 'react'
import CardItem from './CardItem'

function All() {
    const [teach, setTeach] = useState()
  
    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('../data.json')
        const data = await response.json()
        setTeach(data?.teachers)
      }
      fetchData()
    },[])
  return (
    <div className='flex flex-wrap container justify-center mx-auto'>
    {
      teach?.map((tch,key) => (
        <CardItem
          key={key}
          id={tch.id}
          description={tch.description}
          video={tch.video}
          name={tch.name}
          date={tch.date}
          hours={tch.hours}
          profile={tch.profile}
          price={tch.price}
        />
      ))
    }
    </div>
  )
}

export default All