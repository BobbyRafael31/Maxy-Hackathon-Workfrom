import React from 'react'
import { useSelector } from 'react-redux';

export const Welcome = () => {
  const {user} = useSelector((state)=> state.auth);  
  return (
    <div className="ml-5">
        <h1 className='title'>Dashboard</h1>
        <h2 className='subtitle pt-2'>Welcome Back <strong> {user && user.name}</strong> </h2>
    </div>
  )
}

export default Welcome;
