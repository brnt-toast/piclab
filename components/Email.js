import React from 'react'

export default function Email() {
  return (
    <div className='flex'>
        <button className='block bg-purple w-24 h-24 rounded-full'>
            <i className="text-3xl fa-regular fa-lock-keyhole"></i>
        </button>
        <input 
          className='self-center h-20 rounded-full w-2/6'
          type='email'
          placeholder="Enter your email for beta access..." />
    </div>
  )
}
