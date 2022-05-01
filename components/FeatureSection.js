import React from 'react'
import Image from 'next/image'

import Title from './Title'

import img from '/public/Image-Group-1.png'

export default function FeatureSection() {
  return (
    <div className='col-span-full'>
          <Title
              size="text-6xl"
              title="One unified toolset."
              content="Finally, an image management app that devs, designers, and marketing teams can agree on.."
            />
            <Image
              src={img}
              alt="image showcase"
              className='block col-span-full' />
    </div>
  )
}
