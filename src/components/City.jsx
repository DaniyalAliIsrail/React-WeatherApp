import React from 'react'

const City = ({cityname}) => {
  return (
    <div>
       <div className='text-center '>
              <h2 className='font-bold text-black text-3xl '>{cityname}</h2>
              <h4 className='text-lg '>Sunday 6:00 Am</h4>
       </div>
    </div>
  )
}

export default City