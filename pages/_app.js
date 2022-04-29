/* _app.js == root in nextj.js

*/

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react' // utilities and settings
import { PrismicPreview } from '@prismicio/next' // enable preview
import { linkResolver, repositoryName } from '../prismicio'


import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}

