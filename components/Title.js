import React from 'react'

export default function Title(props) {
  const {size, title, content} = props

  return (
    <div className='text-center col-span-full'>
        <h2 className={`${size} font-bold`}>{title}</h2>
        <p>{content}</p>
    </div>
  )
}
