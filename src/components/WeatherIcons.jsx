import React from 'react'
import CLOUDICON from '../assets/weatherlogo.jpg'

const WeatherIcons = () => {
  return (
    <div className='pt-3 mt-1 '>
       <img style={{height:80}} className='mx-auto mix-blend-multiply filter-[contrast(1)]' src={CLOUDICON}></img>
    </div>
  )
}

export default WeatherIcons