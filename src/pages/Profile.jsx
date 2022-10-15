import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import ProfileMenu from '../components/ProfileMenu'
import Settings from '../components/Settings'
import {Outlet} from 'react-router-dom'

function Profile() {
  
    return (
        <>
            <Navbar />
            <div className='container mx-auto flex'>
                <ProfileMenu /> 
                <Outlet />
                
            </div>
        </>
  )
}

export default Profile