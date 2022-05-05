import React from 'react'

export default function Email() {
  return (
    <div className="mx-auto  relative ">
        <button className='w-24 h-24 z-10 absolute -top-2 right-2/3
          bg-gradient-to-r from-_blue via-_pink to-_orange 
          rounded-full'>
            <i className="text-3xl text-white fa-regular fa-lock-keyhole"></i>
        </button>
       <div className='px-7'>
        <input className='bg-slate-900 mx-auto block indent-16 pl-9 h-20 w-6/12 rounded-full'
          type='email'
          placeholder="Enter your email for beta access..." />
       </div>
    </div>
  )
}
