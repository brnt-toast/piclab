import Head from 'next/head'

import Nav from '../components/Nav'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div>
      <Head>
        <title>PicLab</title>
        <meta name="description" content="Your Picture Laboratory" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className=''>
        <Nav />
        <div className='grid flex-col grid-cols-2'>
          <Hero />

        </div>
      </main>
    </div>
  )
}
