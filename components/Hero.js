import React from 'react'
import Image from 'next/image'

import Email from './Email'

import hero from  '/public/app.piclab-5.png'

export default function Hero() {
  return (
    <div className="col-start-2 mt-32 col-end-12">
        <h1 className="text-7xl w-9/12 tracking-tight leading-[6rem] mx-auto font-extrabold">
        Image management
            <span className='block bg-clip-text 
              text-transparent bg-gradient-to-r from-_blue via-_pink to-_orange'>
                reimagined.
            </span>
        </h1>
            
        <p className='pt-16  pb-20 text-xl w-6/12 px-10 leading-8 m-auto'>
            Organize, transform, & serve your entire photo library. The perfect image management app for freelancers, organizations, & web developers.
        </p>
       <div className="w-6/12 px-10 pb-40">
        <Email />
       </div>
        <Image src={hero} alt="Hero Image" />
    </div>
  )
}

