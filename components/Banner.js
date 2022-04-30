/* BANNER.JS -- FIGMA : FEATURE BANNER
Props : image, title, text, button, background color
*/
import React from 'react'
import Image from 'next/image'

import Title from '../components/Title'

export default function Banner({src, alt, title, content}) {
  return (
    <div className='col-span-full flex items-center'>
      <div className="text-center w-2/4">
        <Title 
          size='text-5xl'
          title={title}
          content={content} />
      </div>

        <div className='w-2/4'>
        <Image 
          src={src}
          alt={alt} />
        </div>

    </div>
  )
}
