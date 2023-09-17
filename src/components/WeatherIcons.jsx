import React from 'react'
import CLOUDICON from '../assets/weatherlogo.jpg'
const WeatherIcons = ({ weatherimage }) => {
  return (
    <div className='pt-3 mt-1 '>
      <img style={{ height: 100 }} className='mx-auto mix-blend-multiply filter-[contrast(1)]' src={weatherimage}></img>
    </div>
  )
}
export default WeatherIcons