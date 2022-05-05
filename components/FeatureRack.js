import React from 'react'

import FeatureBox from './FeatureBox'

export default function FeatureRack() {
  return (
    <div className='flex items-center text-left'>
        <div className="inline-grid grid-cols-2 gap-5 ">
          <FeatureBox
          icon="fa-light fa-gear"
          title="Ultra-Fast"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <FeatureBox
          icon="fa-light fa-robot"
          title="AI Powered"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <FeatureBox
          icon="fa-light fa-gear"
          title="CDN"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <FeatureBox
          icon="fa-light fa-lock"
          title="Secure"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <FeatureBox
          icon="fa-light fa-crop"
          title="Editable"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <FeatureBox
          icon="fa-light fa-palette"
          title="Beautiful"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  )
}