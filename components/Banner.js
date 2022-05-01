/* BANNER.JS -- FIGMA : FEATURE BANNER
Props : image, title, text, button, background color
*/
import React from 'react'
import Image from 'next/image'

import Title from '../components/Title'

export default function Banner({src, alt, title, content}) {
  return (
    <div className=''>
      <div className="text-center">
        <Title 
          size='text-5xl'
          title={title}
          content={content} />
      </div>

        <div className=''>
          <Image 
            src={src}
            alt={alt} />
        </div>

    </div>
  )
}
