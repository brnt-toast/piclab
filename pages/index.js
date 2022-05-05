import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'

import Title from '../components/Title'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Email from '../components/Email'
import Logo from '../components/Logo'

import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection'
import NexGenSection from '../components/NextGenSection'
import ToolSection from '../components/ToolsetSection'

import colab from '/public/colab1.png'
import organize from '/public/organize1.png'
import compose from '/public/compose1.png'
import powerful from '/public/powerful1.png'


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

      <div className='bg-_saturated col-start-1 col-end-13'>
        <div className="py-32 ">
          <div className='inline-grid grid-cols-12'>
            <div className='flex flex-col py-16 justify-evenly col-start-2 col-end-6'>
              <div className='flex text-left flex-col'>
                <div className='text-5xl'>
                  <Title
                    title="Colaborate."
                  />
                </div>
                <div className='py-6'>
                  <p className='text-xl leading-8'>
                    Build image libraries, called workspaces, to collaborate across teams and organizations. Tempor, viverra in fames gravida. Magna placerat sodales id fermentum ultrices et commodo volutpat viverra. Nibh mauris, adipiscing suspendisse eros, quis id magna sed pellentesque sed.
                  </p>
                </div>
              </div>
              <div className='w-2/4 flex rounded-lg itmes-align flex-row'>
                <Button>
                  <div className='py-4 flex'>
                    <div className='pr-2'>
                      <Icon
                        icon='fa-light fa-users'
                      >
                      </Icon>
                    </div>
                    {"Start Collaborating"}
                  </div>
                </Button>
              </div>
            </div>
            <div className='col-start-7 col-end-13'>
              <Image
                src={colab}
                alt="colab lorem"
              />
            </div>

          </div>

        </div>

      </div>

      {/* "ORGANIZE" -- FEATURE BANNER */}
      <div className='flex col-start-1 col-end-13'>
        <div className='py-32'>
          <div className='inline-grid grid-cols-12'>
            <div className='col-start-1 col-end-7'>
              <Image
                src={organize}
                alt="coloab"
              />
            </div >
            <div className='flex flex-col justify-evenly col-start-8 col-end-12'>
              <div className='text-left flexflex-col'>
                <div className='text-5xl'>
                  <Title
                    title="Organize."
                  />
                </div>
                <div className='py-6'>
                  <p className='text-xl leading-8'>
                    Group images by tags, or let our AI do it for you, and grab a cup of coffee instead. Aliquet non dui amet integer sit rhoncus quis pharetra. Pellentesque sed elementum fusce auctor adipiscing. Adipiscing arcu pulvinar nisl sit dapibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* "COMPOSE" -- FEATURE BANNER */}
      <div className='bg-_saturated col-start-1 col-end-13'>
        <div className="py-32 ">
          <div className='inline-grid grid-cols-12'>
            <div className='flex flex-col py-16 justify-evenly col-start-2 pl-14 col-end-6'>
              <div className='flex flex-col'>
                <div className='text-left text-5xl'>
                  <Title
                    title="Compose."
                  />
                </div>
                <div className='py-6'>
                  <p className='text-left text-xl leading-8'>
                    Prep your images for any type of project, with social media presets baked in. Nunc facilisi viverra in nisl eget egestas cum elementum netus. Aliquet non dui amet integer sit rhoncus quis pharetra.
                  </p>
                </div>
              </div>
              <div className='w-2/4 flex rounded-lg itmes-align flex-row'>
                <Button>
                  <div className='py-4 flex'>
                    <div className='pr-2'>
                      <Icon
                        icon='fa-light fa-crop'
                      >
                      </Icon>
                    </div>
                    {"Get Cropping"}
                  </div>
                </Button>
              </div>
            </div>
            <div className='col-start-7 col-end-13'>
              <Image
                src={compose}
                alt="colab lorem"
              />
            </div>

          </div>

        </div>

      </div>
      {/* "POWERFUL" -- FEATURE BANNER */}
      <div className='flex col-start-1 col-end-13'>
        <div className='py-32'>
          <div className='inline-grid grid-cols-12'>
            <div className='col-start-1 col-end-7'>
              <Image
                src={powerful}
                alt="coloab"
              />
            </div >
            <div className='flex flex-col justify-evenly col-start-8 col-end-12'>
              <div className='flex text-left flex-col'>
                <div className=' text-5xl'>
                  <Title
                    title="Powerful."
                  />
                </div>
                <div className=''>
                  <p className=' text-xl leading-8'>
                    Under the hood, PicLab is powered by imgix, the most robust image processor on the web. Use our ultra-fast CDN to host your images, optimize, or download your entire library, all backed by technology that serves billions of images, daily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className='col-start-2 col-end-12 bg-no-repeat bg-right bg-lines'>
        <div className=''>
          <div className='col-start-2 py-36 mb-16 col-end-12 '>
            <div className='text-6xl'>
              <Title
                title="Ready to give PicLab a try?"
              />
            </div>
            <div>
              <p className='text-center text-xl w-5/12 px-8 py-4 leading-8 mx-auto'>
                Become an early adpoter by joining our beta test program and invite friends and collegues.
              </p>
            </div >
            <div className='px-10 py-28'>
              <Email />
            </div>
          </div>

          {/* FOOTER */}
          <div className='col-start-2 col-end-12 flex text-center justify-between items-center '>
            <div className='flex'>
              <Logo />
              <p className='text-xs self-center px-8'>© Monogram LLC | 2022</p>
            </div>

            <div className='w-5/12 text-xs bg-transparent flex justify-between 

              
            '>
              <Link href="#">Request Beta</Link>
              <Link href="#">Login</Link>
              <Link href="#">Docs</Link>
              <Link href="#">Download</Link>
              <Link href="#">Feedback</Link>
              <Link href="#">Legal</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
