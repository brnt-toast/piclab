import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'

import Title from '../components/Title'
import Button from '../components/Button'
import Icon from '../components/Icon'

import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection'
import NexGenSection from '../components/NextGenSection'
import ToolSection from '../components/ToolsetSection'

import colab from '/public/colab1.png'
import organize from '/public/organize.png'
import compose from '/public/compose.png'
import powerful from '/public/powerful.png'


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
      {/* "COLLABORATE" -- FEATURE BANNER */}

      <div className='col-start-1 col-end-13'>
        <div className='inline-grid grid-cols-12'>
          <div className='self-center col-start-2 col-end-6'>
            <Title 
              title="Colaborate."
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem fugiat qui quia velit incidunt esse ducimus perferendis dolorem, illo nemo, asperiores iure excepturi facere veniam aliquid tempore natus! Tenetur, laudantium.
            </p>
            <Button>
              <Icon>

              </Icon>
              {"lkfjslfjslfj"}
            </Button>
          </div>
          <div className='col-start-7 col-end-13'>
            <Image 
              src={colab}
              alt="colab lorem"
            />
          </div>

        </div>
        
      </div>
  
      {/* "ORGANIZE" -- FEATURE BANNER */}
      <div className='flex col-start-1 col-end-13'>
        <div >
          <Image
              src={organize}
              alt="coloab"
            />
        </div>
        <div className='w-2/4'>
          <Title title="Organize." />
          <p>Group images by tags, or let our AI do it for you, and grab a cup of coffee instead. Aliquet non dui amet integer sit rhoncus quis pharetra. Pellentesque sed elementum fusce auctor adipiscing. Adipiscing arcu pulvinar nisl sit dapibus.</p>
        </div>
      </div>
      {/* "COMPOSE" -- FEATURE BANNER */}
      <div className='flex col-start-1 col-end-13'>
        <div className='w-2/4'>
          <div>
            <Title title="Compose." />
            <p>
              Prep your images for any type of project, with social media presets baked in. Nunc facilisi viverra in nisl eget egestas cum elementum netus. Aliquet non dui amet integer sit rhoncus quis pharetra.
            </p>
            <div>
              <Button>
                {'lorme eme '}
              </Button>
            </div>
          </div>
        </div>
        <div >
          <Image
              src={compose}
              alt="coloab"
            />
        </div>
      </div>
      {/* "POWERFUL" -- FEATURE BANNER */}
      <div className='flex col-start-1 col-end-13'>
        <div >
          <Image
              src={powerful}
              alt="coloab"
            />
        </div>
        <div className='w-2/4'>
          <div>
            <Title title="Powerful." />
            <p>Under the hood, PicLab is powered by imgix, the most robust image processor on the web. Use our ultra-fast CDN to host your images, optimize, or download your entire library, all backed by technology that serves billions of images, daily. </p>
          </div>
        </div>
      </div>
     
    </div>
  )
}
      