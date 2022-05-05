import React from 'react'
import Hero from './Hero'

export default function HeroSection() {
  return (
    <div className='col-start-1 col-end-13 inline-grid grid-cols-12
      bg-grid bg-bottom bg-no-repeat
    '
     >
      <div className='col-start-2  col-end-12
      '>
        <Hero />
      </div>
    </div>
  )
}
