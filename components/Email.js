import React from 'react'

export default function Email() {
  return (
    <div className='m-auto justify-center flex'>
        <button className='block w-24 h-24 rounded-full'>
            <i className="text-5xl fa-regular fa-lock-keyhole"></i>
        </button>
        <input 
          className='self-center h-20 rounded-full w-2/6'
          type="Enter your email for beta access..." />
    </div>
  )
}
