import Head from 'next/head'
import Script from 'next/script'



import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Title from '../components/Title'
import BannerSection from '../components/BannerSection'
import FeatureRack from '../components/FeatureRack'
import FeatureSection from '../components/FeatureSection'
import Email from '../components/Email'

import nextGen from '/public/next-gen-feats.png'
import img from '/public/Image-Group-1.png'

export default function Home() {
  return (
    <div>
    <Head>
        <title>PicLab</title>
        <meta name="description" content="Your Picture Laboratory" />
        <link rel="icon" href="/logo.svg" />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
        <link rel="stylesheet" href="https://cloud.typography.com/6929016/7418832/css/fonts.css" />
    </Head>
      
      <Script src="https://kit.fontawesome.com/117bcfe378.js" />
      
        <Nav />
        <Hero />
        <FeatureSection 
        size = "text-6xl"
        title="Next-gen features."
        content="A powerful set of tools designed to work in any situation."
        img={nextGen}
        altTag = "features image"
        classes = '' 
        >
            <FeatureRack />
          </FeatureSection>
          <FeatureSection 
          size = "text-6xl"
          title="One unified toolset." 
          content="Finally, an image management app that devs, designers, and marketing teams can agree on.." 
          img={img}
          altTag="image showcase"
          classes="'block col-span-full'"
          />
          <BannerSection /> 
          <Title
          size="text-6xl"
          title="Ready to give PicLab a try?"
          content="Become an early adpoter by joining our beta test program and invite friends and collegues."
          />
          <Email />

        </div>
        
        )
      }
      