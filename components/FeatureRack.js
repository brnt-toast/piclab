import React from 'react'

import FeatureBox from './FeatureBox'

export default function FeatureRack() {
  return (
    <div className='flex'>
        <div className="inline-grid grid-cols-2 gap-5 ">
          <FeatureBox
          icon="fa-solid fa-gear"
          title="Ultra-Fast"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <FeatureBox
          icon="fa-solid fa-gear"
          title="Ultra-Fast"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <FeatureBox
          icon="fa-solid fa-gear"
          title="Ultra-Fast"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <FeatureBox
          icon="fa-solid fa-gear"
          title="Ultra-Fast"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <FeatureBox
          icon="fa-solid fa-gear"
          title="Ultra-Fast"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <FeatureBox
          icon="fa-solid fa-gear"
          title="Ultra-Fast"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  )
}