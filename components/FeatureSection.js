import React from 'react'
import Image from 'next/image'

import Title from './Title'



export default function FeatureSection(props) {
  const {
    distance,
    size, 
    title, 
    content, 
    img, 
    altTag, 
    classes = '',
    children
  } = props
  return (
    <div className={`${distance} flex flex-col leading-[6rem]`}>
      <Title
          size={size}
          title={title}
          content={content}
        />
      <div className="flex justify-between">
        <Image
          src={img}
          alt={altTag}
          className={classes} />

          <div className="w-2/4">
            {children}  
          </div>
      </div>   
    
    </div>
  )
}
