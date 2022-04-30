import React from 'react'
import Image from 'next/image'

import hero from  '../assets/app.piclab-5.png'

export default function Hero() {
  return (
    <div className="col-span-full text-center">
        <h1 className="text-8xl">
        Image management
            <span className='block'>
                reimagined.
            </span>
        </h1>
            
        <p className='m-auto w-2/6 text-center text-xl'>
            Organize, transform, & serve your entire photo library. The perfect image management app for freelancers, organizations, & web developers.
        </p>
        <Image src={hero} alt="Hero Image" />
    </div>
  )
}

