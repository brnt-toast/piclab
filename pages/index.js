import Head from 'next/head'

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Title from '../components/Title'

export default function Home() {
  return (
    <div className='flex justify-center'>
      <Head>
        <title>PicLab</title>
        <meta name="description" content="Your Picture Laboratory" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className=' w-11/12'>
        <Nav />
        <div className='grid flex-col grid-cols-2'>
          <Hero />
          <Title 
            title="hello world"  
            content="nice to meet you"
          />
        </div>
      </main>
    </div>
  )
}
