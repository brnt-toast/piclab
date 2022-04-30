import React from 'react'

export default function Title({title, content}) {
  return (
    <div className='text-center col-span-full'>
        <h2 className='text-6xl font-bold'>{title}</h2>
        <p>{content}</p>
    </div>
  )
}
