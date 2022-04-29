import Head from 'next/head'

import Nav from '../components/Nav'


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>PicLab</title>
        <meta name="description" content="Your Picture Laboratory" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <Nav />
        
      </main>
    </div>
  )
}
