import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'


import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Title from '../components/Title'
import Banner from '../components/Banner'
import FeatureRack from '../components/FeatureRack'
import Email from '../components/Email'

import img from '/public/Image-Group-1.png'
import colab from '/public/colab.png'
import compose from '/public/compose.png'
import organize from '/public/organize.png'
import powerful from '/public/powerful.png'
import nextGen from '/public/next-gen-feats.png'


export default function Home() {
  return (
    <div className='flex justify-center'>
      <Head>
        <title>PicLab</title>
        <meta name="description" content="Your Picture Laboratory" />
        <link rel="icon" href="/logo.svg" />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
        <link rel="stylesheet" href="https://cloud.typography.com/6929016/7418832/css/fonts.css" />
      </Head>
      <Script src="https://kit.fontawesome.com/117bcfe378.js" />

      <main className=' w-11/12'>
        <Nav />
        <div className='grid flex-col grid-cols-2'>
          <Hero />
          <div className='flex-col col-span-full'>
            <Title
              size="text-6xl"
              title="Next-gen features."
              content="A powerful set of tools designed to work in any situation."
            />
          </div>
          <Image
            src={nextGen}
            alt="features image"
          />
          <FeatureRack />
          <div className='col-span-full'>
            <Title
              size="text-6xl"
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
          <Banner src={organize}
            alt="organize screen shot"
            title="Organize."
            content="Group images by tags, or let our AI do it for you, and grab a cup of coffee instead. Aliquet non dui amet integer sit rhoncus quis pharetra. Pellentesque sed elementum fusce auctor adipiscing. Adipiscing arcu pulvinar nisl sit dapibus."
          />
          <Banner src={compose}
            alt="composition screen shot"
            title="Compose."
            content="Prep your images for any type of project, with social media presets baked in. Nunc facilisi viverra in nisl eget egestas cum elementum netus. Aliquet non dui amet integer sit rhoncus quis pharetra."
          />
          <Banner src={powerful}
            alt="lion"
            title="Powerful."
            content="Under the hood, PicLab is powered by imgix, the most robust image processor on the web. Use our ultra-fast CDN to host your images, optimize, or download your entire library, all backed by technology that serves billions of images, daily. "
          />
          <Title
            size="text-6xl"
            title="Ready to give PicLab a try?"
            content="Become an early adpoter by joining our beta test program and invite friends and collegues."
          />
          <Email />
        </div>
      </main>
    </div>
  )
}
