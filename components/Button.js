import React from 'react'

export default function Button({children}) {
  return (
    <div className=''>
       <button className='bg-_purple py-2 px-5 rounded-md flex w-fit'>
        {children}
      </button>
    </div>
  )
}
