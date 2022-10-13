import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SecondNav from '../components/SecondNav'
import All from '../components/All'
import Filters from '../components/Filters'
import {useSelector} from 'react-redux'
import CardItem from '../components/CardItem'
function Home() {
    const [teach, setTeach] = useState()
    const [filtred,setFiltred] = useState()
    const state = useSelector(state => state.nobi)
    console.log(state.data)

    useEffect(() => {
        const fetchData = async() => {
            fetch('http://localhost:8000/teachers')
                .then(res => res.json())
                .then(data=>setTeach(data))
        }
        fetchData()

        setFiltred(teach?.filter(item => item.category===state.data)) 
    },[state.data])
  return (
      <div className=''>
          <Navbar />
          <SecondNav />
          {!filtred || state.data==='All' ? 
            <All />
              : <div className='flex-row items-center my-3 md:flex md:flex-wrap  container md:justify-center mx-auto'>
                  {
                      filtred?.map((tch) =>
                      <CardItem
                          id={tch.id}
                          name={tch.name}
                          video={tch.video}
                          date={tch.date}
                          hours={tch.hours}
                          price={tch.price}
                          profile={tch.profile}
                          category={tch.category}
                      />
                  )
                  }
              </div>
              
          }
          
          
    </div>
  )
}

export default Home