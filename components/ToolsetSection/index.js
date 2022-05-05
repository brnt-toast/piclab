import React from 'react'
import Image from 'next/image'
import Title from '../Title'

import toolset from '/public/toolset.png'

export default function ToolSection() {
  return (
    <div className='col-start-2 col-end-12'> 
      <div className='py-36'>
        <div className='text-6xl'>
              <div className='py-14'>
                <Title 
                      title="One unified toolset."
                  />
              </div>

                <p className='text-xl leading-8 m-auto px-8 w-5/12'>
                    Finally, an image management app that devs, designers, and marketing teams can agree on.
                </p>

            </div>
      </div>
        <div className='py-24'>
            <Image 
                src={toolset}
                alt="lorem ipsum"
            />
        </div>

    </div>
  )
}

