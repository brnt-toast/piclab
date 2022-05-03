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

    <div className='bg-red-600'>
        <Icon 
          icon={icon}
        />
        <Title 
          title={title}
        />
        <p>{text}</p>
    </div>
  )
}
