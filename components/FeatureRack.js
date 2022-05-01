import React from 'react'

import FeatureBox from './FeatureBox'

export default function FeatureRack() {
  return (
    <div className="inline-grid grid-cols-2 items-center">
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
  )
}