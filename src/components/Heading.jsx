import React from 'react'

const Heading = ({heading}) => {
  return (
    <div className='text-center'>
      <h2 className='text-3xl font-extrabold uppercase my-2'>{heading}</h2>
    </div>
  )
}

export default Heading
