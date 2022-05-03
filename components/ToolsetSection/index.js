import React from 'react'
import Image from 'next/image'
import Title from '../Title'

import toolset from '/public/toolset.png'

export default function ToolSection() {
  return (
    <div className='col-start-2 col-end-12'> 
        <div className='text-5xl'>
            <Title 
                title="One unified toolset."
            />
        </div>
        <div>
            <Image 
                src={toolset}
                alt="lorem ipsum"
            />
        </div>

    </div>
  )
}
