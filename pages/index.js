import Head from 'next/head'
import Script from 'next/script'

import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection'
import NexGenSection from '../components/NextGenSection'
import ToolSection from '../components/ToolsetSection'
import FeatureBannerSection from '../components/FeatureBannerSection'


export default function Home() {
  return (
    <div className='bg-black mt-6 grid grid-cols-12'>
      <Head>
          <title>PicLab</title>
          <meta name="description" content="Your Picture Laboratory" />
          <link rel="icon" href="/logo.svg" />
      </Head>

      <Script src="https://kit.fontawesome.com/117bcfe378.js" />

      <Nav />
      <HeroSection />
      <NexGenSection />
      <ToolSection />
      {/*<FeatureBannerSection /> */}
     
    </div>
  )
}
      