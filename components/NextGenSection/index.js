import React from 'react'

import FeatureRack from '../FeatureRack'
import Title from '../Title'
import Image from 'next/image'
import nextGen from '/public/next-gen-feats.png'

export default function NextGenSection() {
  return (
    <div className='col-start-1 col-end-13'>
      <div className='text-5xl'>
        <Title 
          title="Next-gen features."
        />
      </div>
      <div className='flex'>
        <div className='w-2/4 pr-16'>
          <Image
            src={nextGen}
            alt="Next Generation Hero Image"
          />
        </div>
        <div className='w-5/12 self-center'>
          <FeatureRack/>
        </div>
      </div>

    </div>
  )
}
