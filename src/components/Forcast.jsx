import React from 'react'
import WIND from '../assets/noun-wind.png'
import PRESSURE from '../assets/noun-press.png'
import Humidity from '../assets/noun-humidity.png'
import FEELSLIKE from '../assets/fellslikeblack.png'
import VISIBLEBLACK from '../assets/visibelblack.png'
import WINDSPEED from '../assets/windspeedblack.png'
// import { WiStrongWind } from "react-icons/wi";

const Forcast = () => {
  return (
    <div className=' mt-1'>
      <div className='mb-2'>
        <h2 className='text-black text-3xl font-semibold pr-4 text-center'>Forcast</h2>
      </div>
      <div className='flex justify-between align-middle flex-wrap p-5   gap-y-1 glassmorphic-effect1'>
        
        <div className='text-center w-[135px] ' >
          <img width={75} src={WIND} className='mx-auto'></img>
          <div className="font-semibold">Wind</div>
          <h5>4m/s</h5>
        </div>

        <div className='text-center w-[135px] ' >
          <img width={60} src={PRESSURE} className='mx-auto'></img>
          <div className="font-semibold">Pressure</div>
          <h5>4m/s</h5>
        </div>

        <div className='text-center w-[135px] '>
          <img width={60} src={Humidity} className='mx-auto'></img>
          <div className="font-semibold">Humidity</div>
          <h5>4 m/s</h5>
        </div>

        <div className='text-center w-[135px] ' >
          <img width={60} src={FEELSLIKE} className='mx-auto'></img>
          <div className="font-semibold">Fells like</div>
          <h5>4 m/s</h5>
        </div>

        <div className='text-center w-[135px] '>
          <img width={60} src={WINDSPEED} className='mx-auto'></img>
          <div className="font-semibold">Wind speed</div>
          <h5>4 m/s</h5>
        </div>

        <div className='text-center w-[135px]'>
          <img width={60} src={VISIBLEBLACK} className='mx-auto'></img>
          <div className="font-semibold">visibility</div>
          <h5>4 m/s</h5>
        </div>
      </div>
    </div>
  )
}

export default Forcast