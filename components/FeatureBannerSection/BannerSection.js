import React from 'react'

import Banner from '../Banner'

import colab from '/public/colab.png'
import compose from '/public/compose.png'
import organize from '/public/organize.png'
import powerful from '/public/powerful.png'

export default function BannerSection() {
  return (
    <div className=''>
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
    </div>
  )
}
