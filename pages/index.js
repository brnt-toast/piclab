import Head from 'next/head'
import Image from 'next/image'

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Title from '../components/Title'
import Banner from '../components/Banner'

import img from '/public/Image-Group-1.png'
import colab from '/public/colab.png'

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
          <div className='col-span-full'>
            <Title 
              title="One unified toolset."  
              content="Finally, an image management app that devs, designers, and marketing teams can agree on.."
            />
            <Image 
              src={img}
              alt="image showcase"
              className='block col-span-full'
            />
          </div>
          
          <Banner
            src={colab}
            alt='colob phot'
            title='Collaborate.'
            content='Build image libraries, called workspaces, to collaborate across teams and organizations. Tempor, viverra in fames gravida. Magna placerat sodales id fermentum ultrices et commodo volutpat viverra. Nibh mauris, adipiscing suspendisse eros, quis id magna sed pellentesque sed.' 
          />
        
        </div>
      </main>
    </div>
  )
}
