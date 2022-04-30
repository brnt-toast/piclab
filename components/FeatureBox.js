import React from 'react'


export default function FeatureBox(props) {
    const {icon, title, text} = props
  return (

    <div>
        <div className="icon">
            <i className={icon}></i>
        </div>
        <h3 className='title'>{title}</h3>
        <p className='text'>{text}</p>
    </div>
  )
}
