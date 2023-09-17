import React from 'react'

const Temp = ({citytemp}) => {
  return (
    <div>
      <div className='text-center '>
      <h2 className='text-5xl'>{citytemp}<sup>°</sup>C</h2>
        <h3 className='text-1xl'>Good Morning</h3>
        <p className='text-sm font-light font-sans'>Paris</p>
      </div>
    </div>
  )
}

export default Temp