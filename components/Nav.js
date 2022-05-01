import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'

import Logo from './Logo'

export default function Nav() {
  return (
    <div className='flex justify-between'>
       <Logo>
        <span>piclab</span>
       </Logo>
        <div className="text-base">
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