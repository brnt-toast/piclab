import React from 'react'
import Link from 'next/Link'

import Logo from '../Logo'
import Button from '../Button'

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

            <Button>
              <Link href='#'>Request Beta Access</Link>
            </Button>
        </div>
        

    </div>
  )
}