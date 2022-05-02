import React from 'react'
import Title from './Title'
import Icon from './Icon'

export default function FeatureBox(props) {
    const {
      size = "text-4xl",
      icon, 
      title, 
      text
    } = props
  return (

    <div className='bg-red-600'>
        <Icon 
          icon={icon}
        />
        <Title 
          size={size}
          title={title}
          content={text}
        />
    </div>
  )
}
