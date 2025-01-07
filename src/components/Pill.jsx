import React from 'react'

export default function Pill(props) {
  return (
    <button className='rounded-lg hover:bg-gray-700 bg-gray-700/70 text-white px-5 py-1 text-center text-sm'>{props.title}</button>
  )
}
