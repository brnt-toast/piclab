/* _app.js == root in nextj.js

*/

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react' // utilities and settings
import { PrismicPreview } from '@prismicio/next' // enable preview
import { linkResolver, repositoryName } from '../prismicio'


import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
