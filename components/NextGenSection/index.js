import React from 'react'

import FeatureRack from '../FeatureRack'
import Title from '../Title'
import Image from 'next/image'
import nextGen from '/public/next-gen-feats.png'

export default function NextGenSection() {
  return (
    <div className='col-start-1 pt-24 col-end-13'>
      <div className='text-6xl py-14'>
          <Title 
            title="Next-gen features."
          />
        </div>
        <p className='w-3/12 px-2 leading-8 text-xl mx-auto'>
            A powerful set of tools designed to work in any situation.
        </p>
      <div className='flex py-24'>
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
