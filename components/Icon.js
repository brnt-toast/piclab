import React from 'react'

export default function Icon(props) {
    const {icon} = props
  return (
    <div>
        <i className={icon}></i>
    </div>
  )
}
