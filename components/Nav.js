import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'

import logo from '../assets/logo.svg'

export default function Nav() {
  return (
    <div className='flex w-11/12 justify-between m-auto'>
        <div className="flex ">
            <Image src={logo} alt="pic lab log" width={55} height={25} />
            <div className="container">picslab</div>
        </div>
        <div className="links flex justify-between">
            <Link href='#'>Download</Link>
            <Link href='#'>Docs</Link>
            <Link href='#'>Login</Link>
            <button className='bg-fuchsia-800 p-2' >
                <Link href='#'>Request Beta Access</Link>
            </button>

        </div>

    </div>
  )
}