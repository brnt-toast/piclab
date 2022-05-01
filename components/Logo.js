import React from 'react'

import Image from 'next/image'
import logo from '/public/logo.svg'

export default function Logo({children}) {
  return (
    <div className='flex'>
        <Image src={logo} alt="pic lab logo" width={55} height={25} />
        {children}
    </div>
  )
}
