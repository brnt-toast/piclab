import React from 'react'
import Image from 'next/image'

import Title from './Title'



export default function FeatureSection(props) {
  const {
    title, 
    content, 
    img, 
    altTag, 
  } = props
  return (
    <div className="leading-[6rem]">
      <Title
          title={title}
          content={content}
        />
      <div className="">
        <Image
          src={img}
          alt={altTag}
         />
      </div>   
    </div>
  )
}
