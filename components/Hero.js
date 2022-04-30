import React from 'react'
import Image from 'next/image'

import Email from './Email'

import hero from  '/public/app.piclab-5.png'

export default function Hero() {
  return (
    <div className="col-span-full text-center">
        <h1 className="text-7xl font-extrabold">
        Image management
            <span className='block'>
                reimagined.
            </span>
        </h1>
            
        <p className='m-auto leading-8 w-2/4 px-8 text-center text-xl'>
            Organize, transform, & serve your entire photo library. The perfect image management app for freelancers, organizations, & web developers.
        </p>

        <Email />
        <Image src={hero} alt="Hero Image" />
    </div>
  )
}

