import React from 'react'
import Image from 'next/image'

import Email from '../Email'

import heroImg from  '/public/app.piclab-5.png'

export default function Hero() {
  return (
    <div className="">
       <div className='py-16'>
        <h1 className="text-7xl w-9/12 tracking-tight leading-11 mx-auto font-extrabold">
          Image management
              <span className='block bg-clip-text 
                text-transparent bg-gradient-to-r from-_blue via-_pink to-_orange'>
                  reimagined.
              </span>
          </h1>
       </div>
            
        <p className=' text-_lightGray text-xl w-6/12 text-center px-10 leading-8 m-auto'>
            Organize, transform, & serve your entire photo library. The perfect image management app for freelancers, organizations, & web developers.
        </p>
      <div className=''>
        <div className=" px-10 mx-auto py-28">
          <Email />
        </div>
          <div className=''>
            <Image src={heroImg} alt="Hero Image" />
          </div>
      </div>
    </div>
  )
}

