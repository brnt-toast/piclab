import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'

import Logo from '../Logo'

export default function NavBar() {
  return (
    <div className='flex items-center justify-between w-10/12 mx-auto'>
       <Logo>
        <span>piclab</span>
       </Logo>
        <div className="flex items-center pl-8 justify-between w-5/12">
            <Link href='#'>Download</Link>
            <Link href='#'>Docs</Link>
            <Link href='#'>Login</Link>

            <button className='bg-_purple py-2 px-5 rounded-md' >
                <Link href='#'>Request Beta Access</Link>
            </button>
        </div>
        

    </div>
  )
}