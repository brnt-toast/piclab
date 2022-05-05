import React from 'react'
import Title from './Title'
import Icon from './Icon'

export default function FeatureBox(props) {
    const {
      icon, 
      title,
      text 
    } = props
  return (

    <div className='bg-_saturated flex'>
     <div className='m-8'>
      <div className=' text-xl font-bold
        bg-gradient-to-r from-_blue via-_pink to-_orange w-fit bg-clip-text text-transparent'>
        <Icon 
            icon={icon}
          />
      </div>
       <div className='py-4 text-xl'>
        <Title 
            title={title}
          />
       </div>
        <p className='leading-6'>{text}</p>
     </div>
    </div>
  )
}
