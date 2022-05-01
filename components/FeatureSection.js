import React from 'react'
import Image from 'next/image'

import Title from './Title'



export default function FeatureSection(props) {
  const {
    size, 
    title, 
    content, 
    img, 
    altTag, 
    classes = '',
    children
  } = props
  return (
    <div className=''>
      <Title
          size={size}
          title={title}
          content={content}
        />
      <Image
        src={img}
        alt={altTag}
        className={classes} />

          {children}
    </div>
  )
}
