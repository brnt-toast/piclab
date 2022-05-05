import React from 'react'
import NextLink from 'next/link'

import Logo from '../Logo'
import Button from '../Button'

export default function NavBar() {
  return (
    <div className='flex items-center justify-between w-10/12 mx-auto'>
       <Logo>
        <span>piclab</span>
       </Logo>
        <div className="flex items-center pl-8 justify-between w-5/12">
            <NextLink href='#'>Download</NextLink>
            <NextLink href='#'>Docs</NextLink>
            <NextLink href='#'>Login</NextLink>

            <Button>
              <NextLink href='#'>Request Beta Access</NextLink>
            </Button>
        </div>
        

    </div>
  )
}