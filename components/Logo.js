import React from 'react'

import Image from 'next/image'
import logo from '/public/logo.svg'

export default function Logo({children}) {
  return (
    <div className='flex items-center'>
        <Image src={logo} alt="pic lab logo" width={25} height={55} />
        <div className='pl-2.5 font-extrabold text-2xl mt-1'>
          {children}
        </div>
    </div>
  )
}
